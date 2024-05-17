import axios from "./api";

const ProjectService = {
  getProjects: async () => {
    const { data } = await axios.get("/project/page?page=0&size=10&lang=en");
    return { data };
  },
  addFile: async (file) => {
    const { data } = await axios.post("/attachment/file", file);
    return { data };
  },
};

export default ProjectService;
