import { instance } from ".";

const path = "user";

export const login = async (data) => {
  return await instance.post(`/${path}/login`, data);
};

export const logOut = async () => {
  return await instance.post(`/${path}/logout`);
};

export const signUp = async (data) => {
  return await instance.post(`/${path}/signup`, data);
};

export const deleteAccount = async () => {
  return await instance.delete(`/${path}/logout`);
};

export const searchUser = async (userID) => {
  return await instance.get(`/${path}/info/${userID}`);
};

export const updateInfo = async (subPath, data) => {
  return await instance.patch(`/${path}/update/${subPath}`, data);
};

export const refreshToken = async () => {
  return await instance.post(`/${path}/refresh`);
};

export const findPW = async (data) => {
  return await instance.post(`/${path}/findPW`, { email: data });
};

export const setProfile = async (data) => {
  return await instance.patch(`/${path}/profile`, data);
};

export const resetProfile = async () => {
  return await instance.patch(`/${path}/profile/basic`);
};

export const googleAuth = async () => {
  return await instance.post(`/auth/Google`);
};

export const githubAuth = async () => {
  return await instance.post(`/auth/Github`);
};
