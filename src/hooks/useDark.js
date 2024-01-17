import { create } from "zustand";

const useDark = create((set, get) => ({
  dark: false,
  setDark: () => {
    const html = document.querySelector("html");
    if (get().dark === false) {
      html.classList = ["dark"];
    } else {
      html.classList = [];
    }
    set({
      dark: !get().dark,
    });
  },
}));

export default useDark;
