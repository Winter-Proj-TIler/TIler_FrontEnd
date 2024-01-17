import { useState } from "react";
import { Logo, Light, Dark, Search } from "../assets";
import { Link } from "react-router-dom";
import useDark from "../hooks/useDark";
import useModal from "../hooks/useModal";

export default function Header() {
  const { dark, setDark } = useDark();
  const { open } = useModal();

  const handleChange = (e) => {
    setDark(e.target.checked);
  };

  const handleLogin = () => {
    open("login");
  };

  return (
    <div className="flex select-none justify-center items-center bg-neutral-100 dark:bg-neutral-900 w-3/4 h-6 rounded-full p-4 box-content relative">
      <img src={Logo} alt="" className="dark:invert" />
      <div className="absolute right-3 flex items-center gap-2">
        <label
          htmlFor="colorMode"
          className="flex cursor-pointer justify-center items-center w-9 h-9 rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-300 dark:invert"
        >
          <input
            className="hidden"
            id="colorMode"
            type="checkbox"
            onChange={handleChange}
          />
          <img src={dark ? Dark : Light} alt="" />
        </label>
        <Link
          to="/search"
          className="flex justify-center items-center w-9 h-9 rounded-full transition-all duration-100 hover:bg-neutral-200 hover:dark:bg-neutral-300 dark:invert"
        >
          <img src={Search} alt="" />
        </Link>
        <div
          onClick={handleLogin}
          className="cursor-pointer bg-neutral-900 rounded-full font-bold px-4 py-2 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900"
        >
          로그인
        </div>
      </div>
    </div>
  );
}
