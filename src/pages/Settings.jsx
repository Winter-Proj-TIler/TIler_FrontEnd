import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Layout from "../components/settings/Layout";
import { useState } from "react";
import useUser from "../hooks/useUser";
import {
  deleteAccount,
  resetProfile,
  searchUser,
  setProfile,
  updateInfo,
} from "../api/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const { username, profileImg, statusMsg, email, userId, add, reset } =
    useUser();
  const navigate = useNavigate();

  const [data, setData] = useState({
    profileImg: profileImg,
    statusMsg: statusMsg || "",
    username: username,
    email: email,
    userId: userId,
  });

  const [password, setPassword] = useState({
    password: "",
    check: "",
  });

  const handlePassword = (e) => {
    setPassword({ ...password, [e.target.id]: e.target.value });
  };

  const handleData = () => {
    searchUser(userId).then(async (res) => {
      const { user } = res.data.data;
      toast.success("성공적으로 수정되었습니다");
      const response = add(user);
      setData(response);
    });
  };

  const handleUpload = (e) => {
    const { id } = e.target;
    if (id === "profileImg") {
      const formData = new FormData();
      formData.append("profile", e.target.files[0]);
      setProfile(formData).then(() => {
        handleData();
      });
    } else if (id === "username" || id === "statusMsg") {
      if (e.code === "Enter" && e.shiftKey) {
        updateInfo("info", {
          username: data.username,
          statusMsg: data.statusMsg,
        }).then(() => {
          handleData();
        });
      }
    } else if (id === "email") {
      if (e.code === "Enter" && e.shiftKey) {
        updateInfo("email", {
          email: data.email,
        }).then(() => handleData());
      }
    } else {
      if (
        password.password === password.check &&
        !!parseInt(password.password.length)
      ) {
        const tmp = window.confirm("정말 변경하시겠습니까?");
        if (tmp) {
          updateInfo("password", password).then(() => handleData());
        }
      } else {
        toast.error("비밀번호를 다시 한번 확인해 주세요");
      }
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleReset = () => {
    resetProfile().then(() => {
      handleData();
    });
  };

  const handleDelete = () => {
    const tmp = window.confirm("정말 삭제하시겠습니까?");
    if (tmp) {
      deleteAccount().then(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userID");
        reset();
        toast.success("계정이 삭제되었습니다");
        navigate("/");
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-20 w-full">
      <div className="flex flex-col gap-5 w-[57rem]">
        <h1 className="flex gap-1 self-start text-2xl">
          계정 설정
          <h2 className="text-sm">SHIFT+ENTER로 저장</h2>
        </h1>
        <Layout>
          <h1 className="text-xl">유저명</h1>
          <Input
            className="w-4/5"
            value={data.username}
            id="username"
            action={handleChange}
            keyDown={handleUpload}
          />
        </Layout>
        <Layout>
          <h1 className="text-xl">이메일</h1>
          <Input
            className="w-4/5"
            value={data.email}
            id="email"
            action={handleChange}
            keyDown={handleUpload}
          />
        </Layout>
        <Layout>
          <h1 className="text-xl">상태메세지</h1>
          <Input
            className="w-4/5"
            value={data.statusMsg}
            action={handleChange}
            keyDown={handleUpload}
            id="statusMsg"
            placeholder="상태메세지로 나를 표현해 보세요!"
          />
        </Layout>
        <Layout>
          <input
            className="hidden"
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={handleUpload}
          />
          <h1 className="text-xl">프로필 사진</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="cursor-pointer" onClick={handleReset}>
                이미지 제거
              </h1>
              <label htmlFor="profileImg">
                <img
                  src={data.profileImg || "Default.png"}
                  alt=""
                  className="cursor-pointer rounded-full w-[100px] h-[100px]"
                />
              </label>
            </div>
          </div>
        </Layout>
      </div>
      <div className="flex flex-col gap-5 w-[57rem]">
        <h1 className="self-start text-2xl text-red-500">Danger Zone</h1>
        <Layout>
          <h1 className="text-xl">계정 삭제</h1>
          <div className="flex gap-2 items-center">
            <h1>계정 삭제 후엔 글과 팔로우 등 정보 복구가 불가능합니다.</h1>
            <Button onClick={handleDelete}>계정 삭제</Button>
          </div>
        </Layout>
        <Layout>
          <h1 className="text-xl">비밀번호 변경</h1>
          <div className="flex flex-col gap-2">
            <Input
              className="w-[20rem]"
              placeholder="비밀번호"
              id="password"
              action={handlePassword}
            />
            <Input
              className="w-[20rem]"
              placeholder="비밀번호 학인"
              id="check"
              action={handlePassword}
            />
            <Button className="self-end" onClick={handleUpload} id="password">
              업데이트
            </Button>
          </div>
        </Layout>
      </div>
    </div>
  );
};
