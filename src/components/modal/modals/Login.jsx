import { useState } from "react";
import { Google, Github } from "../../../assets";
import useModal from "../../../hooks/useModal";
import Input from "../../common/Input";
import { findPW, googleAuth, login, searchUser } from "../../../api/user";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useUser from "../../../hooks/useUser";

export const Login = () => {
  const { open, close } = useModal();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { add } = useUser();

  const handleRegister = () => {
    open("register");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleFind = () => {
    if (data.email) {
      findPassword();
    } else {
      toast.error("이메일을 다시 한번 확인해 주세요");
    }
  };

  const { mutate: findPassword } = useMutation({
    mutationFn: () => findPW(data.email),
    onSuccess: () => {
      toast.success("이메일로 비밀번호가 발송되었습니다.");
    },
  });

  const handleLogin = () => {
    let load = toast.loading("로그인중입니다..");
    login(data).then((res) => {
      if (!!!res.code) {
        const { data } = res.data;
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("userID", data.userId);
        searchUser(data.userId).then((res) => {
          const { user } = res.data.data;
          add(user);
          close();
          toast.update(load, {
            render: "로그인되었습니다",
            type: "success",
            isLoading: false,
            autoClose: 1000,
          });
        });
      } else {
        toast.update(load, {
          render: "이메일 또는 비밀번호를 다시 확인해주세요",
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      }
    });
  };

  return (
    <div className="grid grid-rows-[1fr_3fr_3fr] gap-2 place-content-center place-items-center">
      <h1 className="text-2xl dark:text-neutral-50">Login</h1>
      <div className="w-96 flex flex-col gap-6">
        <Input
          placeholder="이메일"
          id="email"
          value={data.email}
          action={handleChange}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={data.password}
          action={handleChange}
          id="password"
        />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xs dark:text-neutral-50">
              비밀번호를 잊으셨나요?
              <span
                className="cursor-pointer text-neutral-400 ml-1"
                onClick={handleFind}
              >
                비밀번호 찾기
              </span>
            </h1>
            <h1 className="text-xs dark:text-neutral-50">
              회원이 아니신가요?
              <span
                className="cursor-pointer text-neutral-400 ml-1"
                onClick={handleRegister}
              >
                회원가입
              </span>
            </h1>
          </div>
          <button
            className="px-8 py-2 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 rounded-md"
            onClick={handleLogin}
          >
            로그인
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-80 p-3 box-content">
        <div className="flex justify-center items-center relative p-5">
          <h1 className="absolute bg-[#ffffff] dark:bg-neutral-950 dark:text-neutral-50 z-10 px-2">
            또는
          </h1>
          <hr className="absolute w-full bg-gray-900 dark:bg-neutral-50 h-[1px]" />
        </div>
        <div
          onClick={googleAuth}
          className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-md cursor-pointer flex justify-center items-center relative"
        >
          <img
            src={Google}
            alt=""
            className="absolute left-2 w-9 h-9 rounded-full p-2 bg-[#ffffff] dark:bg-neutral-600"
          />
          <h1 className="dark:text-neutral-50">Google로 로그인</h1>
        </div>
        <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-md cursor-pointer flex justify-center items-center relative">
          <img
            src={Github}
            alt=""
            className="absolute left-2 w-9 h-9 rounded-full p-2 bg-[#ffffff] dark:bg-neutral-600"
          />
          <h1 className="dark:text-neutral-50">Github로 로그인</h1>
        </div>
      </div>
    </div>
  );
};
