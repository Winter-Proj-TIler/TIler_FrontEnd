import { instance } from ".";

const path = "post";

export const searchPost = async (sort, keyword) => {
  return await instance.get(
    `/${path}/search/keyword/${sort}?keyword=${keyword}`
  );
};

export const searchPostTag = async (tag) => {
  return await instance.get(`/${path}/logout`);
};

export const uploadPost = async (data) => {
  return await instance.post(`/${path}/`, data);
};

export const detailPost = async (postID) => {
  return await instance.post(`/${path}/${postID}`);
};

export const updatePost = async (postID, data) => {
  return await instance.patch(`/${path}/${postID}`, data);
};

export const deletePost = async (postID) => {
  return await instance.delete(`/${path}/${postID}`);
};

export const uploadImg = async (file) => {
  return await instance.post(`/${path}/${postID}`);
};
