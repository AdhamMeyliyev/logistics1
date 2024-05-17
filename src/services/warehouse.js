import axios from "./api";

const Warehouse = {
  getWarehouse: async () => {
    const data = await axios.get("/wareHouse?page=0&size=10&lang=en");
    return { data };
  },
  addWarehouse: async (name) => {
    const data = await axios.post("/wareHouse", name);
    return { data };
  },
  deleteWarehouse: async (id) => {
    const data = await axios.delete(`/wareHouse?id=${id}`);
    return { data };
  },
  downloadWarehouse: async (wareHouseId) => {
    const data = await axios.post("/wareHouse/download-file", wareHouseId);
    return { data };
  },
};

export default Warehouse;
