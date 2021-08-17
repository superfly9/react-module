import axios from "axios";
import React from "react";
import PageTable from "./PageTable";
import { Styles } from "./PageTableStyle";

// 데이터를 들고 있음 + api요청하는 부모 컴포넌트
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
          completed: !v.completed ? "Seoul Lite" : "Korea",
        };
      });
      setData(result);
      //실제 사용시에는 data.length대신 서버에서 주어지는 값 totalCount 넣어주면 됨
      setPageCount(Math.ceil(data.length / pageSize));
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
    </Styles>
  );
}

export default Table;
