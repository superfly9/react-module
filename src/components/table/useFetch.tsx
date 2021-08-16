export {};
// import React from 'react';
// const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
//     // This will get called when the table needs new data
//     // You could fetch your data from literally anywhere,
//     // even a server. But for this example, we'll just fake it.

//     // Give this fetch an ID
//     const fetchId = ++fetchIdRef.current;

//     // Set the loading state
//     setLoading(true);

//     // We'll even set a delay to simulate a server here
//     setTimeout(() => {
//       // Only update the data if this is the latest fetch
//       if (fetchId === fetchIdRef.current) {
//         const startRow = pageSize * pageIndex;
//         const endRow = startRow + pageSize;
//         setData(serverData.slice(startRow, endRow));

//         // Your server could send back total page count.
//         // For now we'll just fake it, too
//         setPageCount(Math.ceil(serverData.length / pageSize));

//         setLoading(false);
//       }
//     }, 1000);
//   }, []);
