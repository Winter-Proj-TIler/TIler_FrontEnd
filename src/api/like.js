import { instance } from ".";

const path = "like";

export const like = async (postID) => {
  return await instance.post(`/${path}/${postID}`);
};

export const unLike = async (userID) => {
  return await instance.delete(`/${path}/${postID}`);
};
