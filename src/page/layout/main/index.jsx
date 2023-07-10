import { useMemo } from "react";
import LeftMenu from "@/component/leftMenu";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Modal from "@/component/modal";
import { useSelector } from "react-redux";

export const MainLayout = () => {
  const modal = useSelector((state) => state.modal);

  const data = useMemo(
    () => [
      { name: "Home", key: "/" },
      { name: "Bank", key: "/bank" },
    ],
    []
  );
  console.log(modal);

  return (
    <>
      <div className="_header">Header</div>
      <div className="_body">
        <div className="_left-menu">
          <LeftMenu data={data} />
        </div>
        <div className="_main">
          <Outlet />
        </div>
      </div>
      {modal.active && <Modal />}
    </>
  );
};

export default MainLayout;
