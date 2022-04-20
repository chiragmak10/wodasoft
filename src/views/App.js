import { Table } from "../components/Table";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link } from "../components/Link";
export const App = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users",
    }).then((response) => {
      setUserData(response.data);
    });
  }, []);

  const columns = [
    { title: "Name", accessor: "name", width: 250 },
    { accessor: "username", title: "Username", width: 200 },
    { accessor: "email", title: "Email", width: 270 },
    { accessor: "phone", title: "Phone", width: 220 },
    {
      accessor: "website",
      title: "Website",
      width: 200,
      Cell: (row) => {
        /*  TODO: For task 3 I tried to stop event propagation by making pointer disable while  hovering
      over but not sure that the ideal way    (⌣̩̩́_⌣̩̩̀) */
        return <Link showText={row.website} to={"https://www.google.com/"} />;
      },
    },
  ];

  const useTableColumns = useMemo(() => columns, []);
  const useTableData = useMemo(() => userData, [userData]);

  return (
    <Table
      id="userTable"
      columns={useTableColumns}
      data={useTableData}
      expandRow={(rowId) => {
        const updatedData = userData.map((row) => {
          return row.id === rowId
            ? { ...row, isExpanded: !row.isExpanded }
            : { ...row, isExpanded: false };
        });
        setUserData(updatedData);
      }}
    />
  );
};
