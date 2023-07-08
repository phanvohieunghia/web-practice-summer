import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/page/Home";
import BankPage from "@/page/Bank";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="bank" element={<BankPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
