import { create } from "zustand";

const closed = {
  isopen: false,
  modalId: undefined,
};

const useModal = create((set, get) => ({
  isopen: closed.isopen,
  modalId: closed.modalId,
  open: (id) => {
    const html = document.querySelector("html");
    html.style.overflow = "hidden";
    set({
      isopen: true,
      modalId: id,
    });
  },
  close: () => {
    const html = document.querySelector("html");
    html.style.overflow = "auto";
    set(closed);
  },
}));

export default useModal;
