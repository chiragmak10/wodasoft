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
        return <Link showText={row.website} to={"https://www.google.com/"} />;
      },
    },
  ];

  const memoisedColumns = useMemo(() => columns, []);
  const memoisedData = useMemo(() => userData, [userData]);
  console.log(memoisedData);
  return (
    <Table
      id="userTable"
      columns={memoisedColumns}
      data={memoisedData}
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
