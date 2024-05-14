import axios from "./api";

const Users = {
  getUsers: async () => {
    const data = await axios.get("/user?page=0&size=10&lang=en");
    return { data };
  },
};

export default Users;
