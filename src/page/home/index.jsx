import { useEffect, useMemo, useState } from "react";
import UserService from "@/service/user";
import Table from "@/component/table";
import "./style.scss";

const Home = () => {
  const [data, setData] = useState();

  const columns = useMemo(
    () => [
      { header: "Id", key: "id" },
      { header: "Email", key: "email" },
      { header: "First name", key: "first_name" },
    ],
    []
  );

  useEffect(() => {
    UserService.getList().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="home-page">
      <div className="title">Home</div>
      <Table data={data?.data || []} column={columns} />
    </div>
  );
};

export default Home;
