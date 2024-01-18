import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";
import ModalWrapper from "../components/modal/ModalWrapper";
import Back from "../components/common/header/Back";

export const Layout = ({ back }) => {
  return (
    <>
      <ModalWrapper />
      <div className="flex flex-col items-center p-5 gap-5 dark:bg-neutral-950 min-h-screen">
        {back ? <Back /> : <Header />}
        <Outlet />
      </div>
    </>
  );
};
