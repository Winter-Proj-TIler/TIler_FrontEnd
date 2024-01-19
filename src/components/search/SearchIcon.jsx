import { Icon } from "@iconify/react";
import useDark from "../../hooks/useDark";

export default function SearchIcon() {
  const { dark } = useDark();
  return (
    <Icon
      icon="tabler:search"
      color={dark ? "#ffffff" : "#000000"}
      width="1.5rem"
    />
  );
}
