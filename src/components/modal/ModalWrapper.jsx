import useModal from "../../hooks/useModal";
import { Login, Register } from "./modals";

export default function ModalWrapper() {
  const { isopen, modalId, close } = useModal();
  const modals = {
    login: Login,
    register: Register,
  };
  const Active = modals[modalId];

  const handleClose = (e) => {
    if (e.target.id === "out") {
      close();
    }
  };

  return (
    <div
      id="out"
      className={`${
        isopen ? "fixed" : "hidden"
      } flex justify-center items-center z-10 bg-black/60 backdrop-blur-lg w-full h-full`}
      onClick={handleClose}
    >
      <div className="min-w-[30rem] min-h-[25rem] p-3 pb-9 rounded-lg bg-neutral-50 dark:bg-neutral-950">
        {Active && <Active />}
      </div>
    </div>
  );
}
