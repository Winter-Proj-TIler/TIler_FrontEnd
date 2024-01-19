import { useState } from "react";

export default function Dropdown({ value, children }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened((prev) => !prev);
  };

  return (
    <div className="select-none relative" onClick={handleOpen}>
      <div className="cursor-pointer">{value}</div>
      <div
        id="dropdown"
        className={`${
          opened ? "flex" : "hidden"
        } z-20 shadow-sm flex-col min-w-32 p-3 gap-3 mt-4 bg-neutral-100 dark:bg-neutral-900 rounded-md absolute left-[-100%] cursor-pointer dark:text-neutral-100`}
      >
        {children}
      </div>
    </div>
  );
}
