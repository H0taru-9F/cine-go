import axiosClient from "./config/axiosClient";

const userApi = {
  signIn: (user) => {
    const url = "/auth/sign-in";
    return axiosClient.post(url, user);
  },
  SignUp: (user) => {
    const url = "/auth/sign-up";
    return axiosClient.post(url, user);
  },
  getUser: (id) => {
    const url = "/users/";
    return axiosClient.get(url, id);
  },
};

export default userApi;
