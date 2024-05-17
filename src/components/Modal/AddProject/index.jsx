import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectService from "../../../services/project";

const AddProject = ({ addModalProject }) => {
  const [fileId, setFileId] = useState();

  const addFile = async (e) => {
    const { data } = await ProjectService.addFile(e.target.value);
    console.log(data);
  };

  return (
    <>
      <Add_Project>
        <button className="salom">salom</button>

        <div class="absolute inset-0 overflow-hidden z-50">
          <section class="absolute inset-y-0 left-0 max-w-full flex outline-none">
            <div class="w-screen max-w-lg">
              <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-auto  col1 z-50">
                <div class="md:px-6 px-3 pt-[10%] flex justify-between ">
                  <h2 class="text-lg font-medium text-gray-900 inline-block">
                    Add Project
                  </h2>
                </div>
                <div class="mt-6 relative flex-1 md:px-6 sm:px-4 px-2">
                  <div>
                    <label
                      for="nametrue"
                      class="block text-gray-700 text-sm font-bold "
                    >
                      Project Name
                    </label>
                    <input
                      id="nametrue"
                      placeholder="Project Name"
                      class="shadow appearance-none border rounded w-full py-2.5 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label
                      for="filetrue"
                      class="block text-gray-700 text-sm font-bold my-2 "
                    >
                      File
                    </label>
                    <input
                      id="filetrue"
                      type="file"
                      class="shadow appearance-none border rounded w-full py-2.5 px-4 mb-3 text-gray-700 bg-slate-50 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={addFile}
                    />
                    <label
                      for="transporttrue"
                      class="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Transport
                    </label>
                    <select
                      id="transporttrue"
                      class="block w-full p-2 border rounded-md shadow-sm focus:outline-0 mb-4"
                    >
                      <option disabled="" value="0">
                        Select transport
                      </option>
                      <option value="1">Auto</option>
                      <option value="2">Avia</option>
                      <option value="3">JD</option>
                    </select>
                    <label
                      for="productStatustrue"
                      class="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Project Status
                    </label>
                    <select
                      id="productStatustrue"
                      class="block w-full p-2 border rounded-md shadow-sm focus:outline-0 mb-4"
                    >
                      <option disabled="" value="0">
                        Project Status
                      </option>
                      <option value="1">Preporation</option>
                      <option value="2">Loading</option>
                      <option value="3">Sending</option>
                      <option value="4">On the way to China</option>
                      <option value="5">To the border in China</option>
                      <option value="6">On the way in the transit zone</option>
                      <option value="7">To the Uzbek border</option>
                      <option value="8">
                        In the process of customs clearance
                      </option>
                      <option value="9">Ready</option>
                    </select>
                    <label
                      for="projecttrue"
                      class="block text-gray-700 text-sm font-bold my-2"
                    >
                      Project ID
                    </label>
                    <input
                      id="projecttrue"
                      placeholder="Project ID"
                      class="shadow appearance-none border rounded w-full py-2.5 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label
                      for="commenttrue"
                      class="block text-gray-700 text-sm font-bold my-2"
                    >
                      Comment
                    </label>
                    <textarea
                      id="commenttrue"
                      placeholder="Comment"
                      class="shadow appearance-none border rounded w-full py-2.5 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                    <div class=" flex justify-between">
                      <button
                        onClick={addModalProject}
                        class="inline-flex justify-center w-[45%] rounded-md shadow-sm py-2 bg-gray-500 text-sm font-medium text-white"
                      >
                        Close
                      </button>
                      <button
                        disabled=""
                        class="bg-gray-600 cursor-not-allowed opacity-70 inline-flex justify-center w-[45%] rounded-md shadow-sm py-2  text-sm font-medium text-white"
                      >
                        Add Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Add_Project>
    </>
  );
};

const Add_Project = styled.div`
  .h-full {
    background-color: #ececec;
  }

  .salom {
    width: 300px;
    margin-left: 1000px;
  }
`;

export default AddProject;
