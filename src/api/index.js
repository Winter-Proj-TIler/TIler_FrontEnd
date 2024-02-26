import axios from "axios";
import { refreshToken } from "./user";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 3000,
});

instance.interceptors.request.use(
  (res) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      res.headers["Authorization"] = "Bearer " + token;
    }
    return res;
  },
  (err) => {
    return err;
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      // 리프레시 기능
    } else {
      return err;
    }
  }
);
