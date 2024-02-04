import { instance } from ".";

const path = "follow";

export const follow = async (userID) => {
  return await instance.post(`/${path}/${userID}`);
};

export const unFollow = async (userID) => {
  return await instance.delete(`/${path}/${userID}`);
};

export const followList = async () => {
  return await instance.get(`/${path}/list`);
};
