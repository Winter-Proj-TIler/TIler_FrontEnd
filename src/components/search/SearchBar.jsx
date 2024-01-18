import { useState } from "react";
import { Search } from "../../assets";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";

export default function SearchBar() {
  const [sort, setSort] = useState({
    view: "전체",
    code: "all",
  });

  const handleClick = (e) => {
    setSort({
      view: e.target.innerHTML,
      code: e.target.id,
    });
  };

  return (
    <div className="flex items-center relative">
      <div className="flex items-center rounded-md bg-neutral-200 dark:bg-neutral-800 w-[36rem] h-[1.3rem] p-3 box-content">
        <img src={Search} alt="" className="dark:invert" />
        <Input placeholder="검색어를 입력하세요" />
      </div>
      <div className="py-1 w-[5.5rem] bg-neutral-300 dark:bg-neutral-900 flex justify-center item-center absolute right-2 rounded-md">
        <Dropdown value={sort.view}>
          <h1 id="all" onClick={handleClick}>
            전체
          </h1>
          <h1 id="writer" onClick={handleClick}>
            작성자
          </h1>
          <h1 id="title" onClick={handleClick}>
            제목
          </h1>
          <h1 id="tag" onClick={handleClick}>
            태그
          </h1>
        </Dropdown>
      </div>
    </div>
  );
}
