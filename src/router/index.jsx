import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/page/Home";
import BankPage from "@/page/Bank";
import MainLayout from "@/page/layout/main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="bank" element={<BankPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
