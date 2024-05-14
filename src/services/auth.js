import axios from "./api";

const AuthServices = {
  getLogin: async (user) => {
    const data = await axios.post(
      `user/login?idNumber=${user.idNumber}&password=${user.password}`
    );
    return { data };
  },
};

export default AuthServices;
