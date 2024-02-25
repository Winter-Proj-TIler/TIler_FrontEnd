let timer;

export const debounce = (action, delay) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    action();
  }, delay);
};
