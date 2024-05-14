import axios from "./api";

const Modals = {
  getUser: async () => {
    const data = await axios.get("/user/getMe?lang=en");
    return { data };
  },
  changeUser: async (user, id) => {
    const data = await axios.put(`/user/${id}`, user);
    return { data };
  },
};

export default Modals;
