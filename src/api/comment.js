import { instance } from ".";

const path = "comment";

export const addComment = async (postID, data) => {
  return await instance.post(`/${path}/${postID}`, { contents: data });
};

export const editComment = async (commentID, data) => {
  return await instance.patch(`/${path}/${commentID}`, data);
};

export const delComment = async (commentID) => {
  return await instance.delete(`/${path}/${commentID}`);
};
