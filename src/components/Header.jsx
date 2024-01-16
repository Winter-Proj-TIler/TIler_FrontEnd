import { useState } from "react";
import { Logo, Light, Dark, Search } from "../assets";
import { Link } from "react-router-dom";

export default function Header() {
  const [dark, setDark] = useState(false);

  const handleChange = (e) => {
    setDark(e.target.checked);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 w-3/4 h-6 rounded-full p-4 box-content relative">
      <img src={Logo} alt="" />
      <div className="absolute right-3 flex items-center gap-2">
        <label
          htmlFor="colorMode"
          className="flex cursor-pointer justify-center items-center w-8 h-8 rounded-full transition-all duration-100 hover:bg-gray-200"
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
          className="flex justify-center items-center w-8 h-8 rounded-full transition-all duration-100 hover:bg-gray-200"
        >
          <img src={Search} alt="" />
        </Link>
        <Link
          to="/login"
          className="bg-gray-900 rounded-full font-bold px-4 py-2 text-gray-50"
        >
          로그인
        </Link>
      </div>
    </div>
  );
}
