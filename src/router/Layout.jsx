import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ModalWrapper from "../components/modal/ModalWrapper";

export const Layout = ({ back }) => {
  return (
    <>
      <ModalWrapper />
      <div className="flex flex-col items-center p-5 gap-5 dark:bg-neutral-950 min-h-screen">
        {back ? <h1>back</h1> : <Header />}
        <Outlet />
      </div>
    </>
  );
};
