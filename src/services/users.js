import axios from "./api";

const Users = {
  getUsers: async () => {
    const data = await axios.get("/user?page=0&size=10&lang=en");
    return { data };
  },
  editUserData: async (userData) => {
    const data = await axios.put(`/user/${userData.id}`, userData);
    return { data };
  },
};

export default Users;
