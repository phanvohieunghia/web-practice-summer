import Router from "@/router";
import LeftMenu from "./component/leftMenu";
import { useMemo } from "react";
import "./App.scss";

function App() {
  const data = useMemo(() => [{ name: "Home" }, { name: "Bank" }], []);
  return (
    <>
      <div className="_header">Header</div>
      <div className="_body">
        <div className="_left-menu">
          <LeftMenu data={data} />
        </div>
        <div className="_main">
          <Router />
        </div>
      </div>
    </>
  );
}

export default App;
