import React from "react";
import styled from "styled-components";

const AddWarehouse = ({ toggleFunc }) => {
  return (
    <div>
      <Add_Warehouse>
        <div class="absolute inset-0 overflow-hidden z-50">
          <section class="absolute inset-y-0 left-0 max-w-full flex outline-none">
            <div class="w-screen max-w-lg">
              <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-auto  col1 z-50">
                <div class="md:px-6 px-3 pt-[10%] flex justify-between ">
                  <h2 class="text-lg font-medium text-gray-900 inline-block">
                    Add warehouse
                  </h2>
                </div>
                <div class="mt-6 relative flex-1 md:px-6 sm:px-4 px-2">
                  <div class="">
                    <label
                      for="nametrue"
                      class="block text-gray-700 text-sm font-bold my-2"
                    >
                      Warehouse Name
                    </label>
                    <input
                      id="nametrue"
                      placeholder="Warehouse Name"
                      class="shadow appearance-none border rounded w-full py-2.5 px-4 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div class="mt-10 flex justify-between">
                      <button
                        onClick={toggleFunc}
                        class="inline-flex justify-center w-[45%] rounded-md shadow-sm py-2 bg-gray-500 text-sm font-medium text-white"
                      >
                        Close
                      </button>
                      <button
                        disabled=""
                        class="bg-gray-700 opacity-70 cursor-not-allowed inline-flex justify-center w-[45%] rounded-md shadow-sm py-2 text-sm font-medium text-white"
                      >
                        Add warehouse
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Add_Warehouse>
    </div>
  );
};

const Add_Warehouse = styled.div`
  .h-full {
    background-color: #ececec;
  }
`;

export default AddWarehouse;
