import { BackArrow } from "../../../assets";
import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div
      className="flex gap-2 p-2 self-start select-none cursor-pointer"
      onClick={handleClick}
    >
      <img src={BackArrow} alt="" className="dark:invert" />
      <h1 className="dark:text-neutral-50">돌아가기</h1>
    </div>
  );
}
