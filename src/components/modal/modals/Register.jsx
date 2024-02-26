import { useState } from "react";
import useModal from "../../../hooks/useModal";
import Input from "../../common/Input";
import { signUp } from "../../../api/user";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const Register = () => {
  const { open } = useModal();

  const handleLogin = () => {
    open("login");
  };

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    passCheck: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const { mutate: handleRegister } = useMutation({
    mutationFn: () => signUp(data),
    onSettled: (res) => {
      if (!!!res.code) {
        toast.success("성공적으로 가입되었습니다.");
        handleLogin();
      } else {
        toast.error("이미 존재하는 계정입니다.");
      }
    },
  });

  return (
    <div className="grid grid-rows-[1fr_3fr] gap-2 place-content-center place-items-center">
      <h1 className="text-2xl dark:text-neutral-50">Register</h1>
      <div className="w-96 flex flex-col gap-6">
        <Input
          placeholder="이메일"
          id="email"
          value={data.email}
          action={handleChange}
        />
        <Input
          placeholder="계정명"
          id="username"
          value={data.username}
          action={handleChange}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={data.password}
          id="password"
          action={handleChange}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={data.passCheck}
          id="passCheck"
          action={handleChange}
        />
        <div className="flex justify-between items-center">
          <h1 className="text-xs dark:text-neutral-50">
            이미 회원이신가요?
            <span
              className="cursor-pointer text-neutral-400 ml-1"
              onClick={handleLogin}
            >
              로그인
            </span>
          </h1>
          <button
            disabled={
              !(data.password === data.passCheck && data.password.length)
            }
            className="px-8 py-2 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 rounded-md"
            onClick={handleRegister}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};
