import { Logo } from "../../../assets";
import { Link, useNavigate } from "react-router-dom";
import useDark from "../../../hooks/useDark";
import useModal from "../../../hooks/useModal";
import Dropdown from "../Dropdown";
import { cookie } from "../../../utils/cookies";
import { Icon } from "@iconify/react";
import SearchIcon from "../../search/SearchIcon";

export default function Header() {
  const { dark, setDark } = useDark();
  const { open } = useModal();
  const token = cookie.get("accessToken");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDark(e.target.checked);
  };

  const handleLogin = () => {
    open("login");
  };

  const handleDrop = (e) => {
    navigate(`/${e.target.id}`);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="relative flex select-none justify-center items-center bg-neutral-100 dark:bg-neutral-900 w-3/4 h-6 rounded-full p-4 box-content">
      <img
        src={Logo}
        alt=""
        className="dark:invert cursor-pointer"
        onClick={handleHome}
      />
      <div className="absolute right-3 flex items-center gap-2">
        <label
          htmlFor="colorMode"
          className="flex cursor-pointer justify-center items-center w-9 h-9 rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700"
        >
          <input
            className="hidden"
            id="colorMode"
            type="checkbox"
            onChange={handleChange}
          />
          <Icon
            icon={dark ? "ph:moon-fill" : "ph:sun-bold"}
            width="1.5rem"
            color={dark ? "#ffffff" : "#000000"}
          />
        </label>
        <Link
          to="/search"
          className="flex justify-center items-center w-9 h-9 rounded-full transition-all duration-100 hover:bg-neutral-200 hover:dark:bg-neutral-700"
        >
          <SearchIcon />
        </Link>
        {token ? (
          <>
            <Link
              to="write"
              className="flex justify-center items-center w-9 h-9 rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700"
            >
              <Icon
                icon="mdi:pencil"
                width="1.5rem"
                color={dark ? "#ffffff" : "#000000"}
              />
            </Link>
            <Dropdown
              value={
                <img
                  title="Six-Standard"
                  src="/prf.png"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              }
            >
              <h1 onClick={handleDrop} id="profile/유저명">
                내 블로그
              </h1>
              <h1 onClick={handleDrop} id="follow">
                팔로잉 관리
              </h1>
              <h1 onClick={handleDrop} id="settings">
                설정
              </h1>
              <h1
                onClick={() => console.log("useAuth hook 만들어서 완성시키기")}
                className="text-red-400"
              >
                로그아웃
              </h1>
            </Dropdown>
          </>
        ) : (
          <h1
            onClick={handleLogin}
            className="cursor-pointer bg-neutral-900 rounded-full font-bold px-4 py-2 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900"
          >
            로그인
          </h1>
        )}
      </div>
    </div>
  );
}
