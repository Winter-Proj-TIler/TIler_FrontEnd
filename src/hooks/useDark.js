import { create } from "zustand";

const useDark = create((set, get) => ({
  dark: !!localStorage.getItem("dark"),
  setDark: () => {
    const html = document.querySelector("html");
    if (get().dark === false) {
      localStorage.setItem("dark", true);
      html.classList = ["dark"];
    } else {
      localStorage.removeItem("dark");
      html.classList = [];
    }
    set({
      dark: !get().dark,
    });
  },
}));

export default useDark;
