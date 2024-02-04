import { instance } from ".";

const path = "comment";

export const addComment = async (postID, data) => {
  return await instance.post(`/${path}/${postID}`, data);
};

export const editComment = async (commentID) => {
  return await instance.patch(`/${path}/${commentID}`, data);
};

export const delComment = async (commentID) => {
  return await instance.delete(`/${path}/${commentID}`);
};
