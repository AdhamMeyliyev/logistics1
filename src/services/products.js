  import axios from "./api";

  const ProductsService = {
    getProductsStatistic: async () => {
      const data = await axios.get("/product/admin/statistics?lang=eng");
      return { data };
    },
    getProductsDiagram: async () => {
      const data = await axios.get("/product/diagramForAdmin?lang=eng");
      return { data };
    },
    getProducts: async (currentPage) => {
      const data = await axios.get(`product?page=${currentPage}&size=2&lang=en`);
      return { data };
    },
    getUser: async () => {
      const data = await axios.get("/user?page=0&size=10&lang=en");
      return { data };
    },
  };

  export default ProductsService;
