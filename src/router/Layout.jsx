import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col items-center p-5 gap-5">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
