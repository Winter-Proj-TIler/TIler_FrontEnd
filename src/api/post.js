import { instance } from ".";

const path = "post";

export const searchPost = async (sort, keyword) =>
  await instance.get(`/${path}/search/keyword/${sort}?keyword=${keyword}`);

export const searchPostTag = async (tag) =>
  await instance.get(`/${path}/search/tag/${tag}/DESC`);

export const uploadPost = async (data) => {
  const item = {
    ...data,
    tags: data.tags.split("_"),
  };
  return await instance.post(`/${path}/`, item);
};

export const detailPost = async (postID) => {
  return await instance.get(`/${path}/${postID}`);
};

export const updatePost = async (postID, data) => {
  return await instance.patch(`/${path}/${postID}`, data);
};

export const deletePost = async (postID) => {
  return await instance.delete(`/${path}/${postID}`);
};

export const uploadImg = async (file) => {
  return await instance.post(`/${path}/img`, file);
};
