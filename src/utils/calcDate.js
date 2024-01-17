import { getToday } from "./getToday";

export const calcDate = (date) => {
  const date1 = new Date(getToday());
  const date2 = new Date(date.split(" ")[0]);
  let diff = date1.getTime() - date2.getTime();
  diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (diff === 1) {
    return "어제";
  } else if (diff < 7) {
    return `${diff}일 전`;
  } else {
    return date.split(" ")[0];
  }
};
