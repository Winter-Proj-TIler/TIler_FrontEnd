import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";
import ModalWrapper from "../components/modal/ModalWrapper";
import Back from "../components/common/header/Back";

export const Layout = ({ back }) => {
  return (
    <>
      <ModalWrapper />
      <div className="flex flex-col items-center gap-5 p-5 min-h-screen dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        {back ? <Back /> : <Header />}
        <Outlet />
      </div>
    </>
  );
};
