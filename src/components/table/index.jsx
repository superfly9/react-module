import axios from "axios";
import React from "react";
import makeData from "../../util/makeData";
import PageTable from "./PageTable";
import { Styles } from "./PageTableStyle";
import SortTable from "./SortTable";

// 데이터를 들고 있음 + api요청하는 부모 컴포넌트
const serverData = makeData(1000);
function Table() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Completed",
        accessor: "completed",
      },
      {
        Header: "Title",
        accessor: "title",
      },
    ],
    []
  );

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);

  const fetchData = React.useCallback(({ pageSize, pageIndex, sortBy }) => {
    console.log("sortBy:", sortBy);
    setLoading(true);
    setTimeout(async () => {
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;
      console.log("Parent UseEffect");
      console.log("pageIndex:", pageIndex, "pageSize:", pageSize);

      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      let result = data.slice(startRow, endRow);
      result = result.map((v) => {
        return {
          ...v,
          completed: !v.completed ? "Seoul Lite" : "Woo-a-han",
        };
      });
      console.log("response Data:", result);
      setData(result);
      setPageCount(Math.ceil(serverData.length / pageSize));
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Styles>
      <PageTable
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      />
      {/* <SortTable
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      /> */}
    </Styles>
  );
}

export default Table;
