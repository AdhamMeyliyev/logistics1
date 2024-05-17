import { useEffect, useState } from "react";
import Navbar from "../../components/admin/navbar";
import AddProject from "../../components/Modal/AddProject";
import ProjectDownloadModal from "../../components/Modal/ProjectDownloadModal";
import ProjectService from "../../services/project";

const Project = () => {
  const [addModal, setAddModal] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const { data } = await ProjectService.getProjects();
    console.log(data.body.object);
    setProjects(data.body.object);
  };

  useEffect(() => {
    getProjects();
  }, []);
  const addModalProject = () => setAddModal(!addModal);
  const downloadModalProject = () => setDownloadModal(!downloadModal);

  return (
    <>
      <Navbar />
      {addModal && <AddProject addModalProject={addModalProject} />}
      {downloadModal && (
        <ProjectDownloadModal downloadModalProject={downloadModalProject} />
      )}
      <div
        className="bg-[url('http://gsrlogistic.uz/static/media/back.e41e920c5b0118532b6f.jpg')] h-[100vh] w-[100%] 
  px-20 py-10 !bg-cover"
      >
        <div className="w-[100%] mt-14">
          <input
            type="search"
            placeholder="🔍 Project name..."
            className="lg:w-4/12 w-5/12 ml-2 md:ml-0 ps-2 h-10 focus:outline-0 border sm:mt-0 mt-2"
          />
          <div className="mt-6 my-5">
            <button
              onClick={addModalProject}
              className="bg-green-600 duration-200 hover:bg-green-700 text-white font-bold  md:text-lg text-sm py-1.5 px-8 border md:w-2/12 w-[40%] rounded"
            >
              Add
            </button>
            <button
              onClick={downloadModalProject}
              className="bg-green-600 duration-200 hover:bg-green-700 text-white font-bold  md:text-lg text-sm py-1.5 px-8 border md:w-2/12 w-[40%] rounded ml-[12px]"
            >
              Download
            </button>
          </div>
          <div className="flex w-full justify-around sm:justify-between items-center">
            <span className="hidden sm:block"></span>
            <span className="me-5 pt-1.5 float-end">Current Page: 0</span>
          </div>
          <div className="relative overflow-x-auto  sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase text-center bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    №
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    transport
                  </th>
                  <th scope="col" className="px-6 py-3">
                    date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    product count
                  </th>
                  <th scope="col" className="px-6 py-3">
                    total weight
                  </th>
                  <th scope="col" className="px-6 py-3">
                    total kub
                  </th>
                  <th colSpan="4" scope="col" className="px-6 py-3 text-center">
                    action
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {projects.map((item) => (
                  <tr>
                    <th>{item.id}</th>
                    <th>{item.name}</th>
                    <th>{item.status}</th>
                    <th>{item.transport}</th>
                    <th>{item.date}</th>
                    <th>{item.productCount}</th>
                    <th>{item.productTotalKg ? item.productTotalKg : "No"}</th>
                    <th>
                      {item.productTotalKlub ? item.productTotalKlub : "No"}
                    </th>
                    <th>{item.comment}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination-style">
            <ul className="pagination flex gap-6 justify-content-center">
              <li className="page-item disabled">
                <span className="page-link" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </span>
              </li>
              <li className="page-item active" aria-current="page">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
