import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import useDark from "../../../hooks/useDark";

export default function Back() {
  const navigate = useNavigate();
  const { dark } = useDark();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div
      className="flex items-center self-start gap-2 p-2 select-none cursor-pointer"
      onClick={handleClick}
    >
      <Icon
        icon="maki:arrow"
        rotate="180deg"
        width="1.8rem"
        color={dark ? "#ffffff" : "#000000"}
      />
      <h1 className="dark:text-neutral-50">돌아가기</h1>
    </div>
  );
}
