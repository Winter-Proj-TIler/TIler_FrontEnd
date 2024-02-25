import { instance } from ".";

const path = "like";

export const like = async (postID) => {
  return await instance.post(`/${path}/${postID}`);
};

export const unLike = async (postID) => {
  return await instance.delete(`/${path}/${postID}`);
};
