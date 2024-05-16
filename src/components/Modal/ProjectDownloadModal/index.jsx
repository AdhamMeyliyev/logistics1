import React from "react";
import styled from "styled-components";

const ProjectDownloadModal = ({ downloadModalProject }) => {
  return (
    <div>
      <Project_Download>
        <div class="fixed sm:px-0 px-5 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div class="zoom-modal relative top-20 mx-auto p-5 border sm:w-96 w-full shadow-lg rounded-md bg-white">
            <div>
              <div>
                <label
                  for="start"
                  class="block text-gray-700 text-sm font-bold my-2"
                >
                  Start date
                </label>
                <input
                  id="start"
                  placeholder="Start date"
                  type="date"
                  class="shadow appearance-none border rounded w-full py-2.5 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required=""
                />
              </div>
              <div>
                <label
                  for="end"
                  class="block text-gray-700 text-sm font-bold my-2"
                >
                  End date
                </label>
                <input
                  id="end"
                  placeholder="End date"
                  type="date"
                  required=""
                  class="shadow appearance-none border rounded w-full py-2.5 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class=" css-qbdosj-Input" data-value="">
                <form class="max-w-sm mx-auto">
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option default>Select...</option>
                    <option value="1">Yw 006</option>
                  </select>
                </form>
              </div>
              <div class="flex justify-between ">
                <button
                  onClick={downloadModalProject}
                  type="button"
                  class="btm-close"
                >
                  Close
                </button>
                <button class="btmn">Download</button>
              </div>
            </div>
          </div>
        </div>
      </Project_Download>
    </div>
  );
};

const Project_Download = styled.div`
  .btm-close {
    margin-top: 20px;
    background-color: #c12f2f;
    width: 125px;
    height: 44px;
    color: #fff;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-weight: 700px;
    letter-spacing: 1px;
    transition: all 0.3s;

    &:active {
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      transition: all 0.3s ease-in;
    }
  }

  .btmn {
    width: 175px;
    height: 44px;
    color: #fff;
    background-color: #32c12f;
    margin-top: 20px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-weight: 700;
    letter-space: 1px;
    transition: all 0.3s;

    &:active {
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      transition: all 0.3s ease-in;
    }
  }
`;

export default ProjectDownloadModal;
