import axios from "axios";

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
  (err) => console.log(err)
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    // 토큰 만료 함수 넣을 예정
    return err;
  }
);
