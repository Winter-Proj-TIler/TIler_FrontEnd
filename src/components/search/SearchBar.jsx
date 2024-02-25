import Dropdown from "../common/Dropdown";
import Input from "../common/Input";
import SearchIcon from "./SearchIcon";

export default function SearchBar({ value, action, sort, setSort }) {
  const handleClick = (e) => {
    setSort({
      view: e.target.innerHTML,
      code: e.target.id,
    });
  };

  return (
    <div className="flex items-center relative">
      <div className="flex items-center rounded-md bg-neutral-100 dark:bg-neutral-800 w-[36rem] h-[1.3rem] p-3 box-content">
        <SearchIcon />
        <Input
          placeholder="검색어를 입력하세요"
          value={value}
          action={action}
        />
      </div>
      <div className="py-1 w-[5.5rem] bg-neutral-200 dark:bg-neutral-900 flex justify-center item-center absolute right-2 rounded-md">
        <Dropdown value={sort?.view}>
          <h1 id="keyword" onClick={handleClick}>
            키워드
          </h1>
          <h1 id="tag" onClick={handleClick}>
            태그
          </h1>
        </Dropdown>
      </div>
    </div>
  );
}
