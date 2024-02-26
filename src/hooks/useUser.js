import { create } from "zustand";

const defaultData = {
  profileImg: undefined,
  userId: 0,
  statusMsg: null,
  username: undefined,
  email: undefined,
};

const useUser = create((set) => ({
  ...defaultData,
  add: (data) => {
    set(data);
    return data;
  },
  reset: () => {
    set(defaultData);
  },
}));

export default useUser;
