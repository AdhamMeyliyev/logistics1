import React from "react";
import styled from "styled-components";

const AddCashier = ({ toggleFunc }) => {
  return (
    <div>
      <Add_Cashier>
        <div class="zoom-modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div class="relative md:w-[100%] w-[80vw] my-6 mx-auto max-w-3xl">
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-6">
              <div class="flex items-center justify-between border-b pb-2 rounded-t">
                <h3 class="text-2xl font-semibold">Add data</h3>
                <button
                  onClick={toggleFunc}
                  class="p-1 ml-auto border-0 text-4xl hover:scale-110 duration-200"
                >
                  ×
                </button>
              </div>
              <form class="flex md:justify-evenly mt-5 flex-wrap">
                <select
                  id="projectId"
                  class=" p-2 md:w-[23%] w-full mx-1 md:mt-4 mt-2 duration-300 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                >
                  <option disabled="">Select project</option>
                  <option value="5">Yw 006 </option>
                </select>
                <select
                  id="userId"
                  disabled=""
                  class="  p-2 md:w-[23%] w-full mx-1 md:mt-4 mt-2 duration-300 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                >
                  <option disabled="">Select user</option>
                </select>
                <select
                  id="productId"
                  disabled=""
                  class="p-2 md:w-[23%] w-full mx-1 md:mt-4 mt-2 duration-300 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                >
                  <option disabled="">Select product</option>
                </select>
                <select
                  id="measure"
                  disabled=""
                  class=" p-2 md:w-[23%] w-full mx-1 md:mt-4 mt-2 duration-300 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                >
                  <option disabled="">Kub And Kg</option>
                  <option value="kub">Kub</option>
                  <option value="kg">Kg</option>
                </select>
              </form>
              <form class="mx-auto flex justify-evenly flex-wrap">
                <div class="flex flex-col w-[49%] mt-4">
                  <label class="text-[0.885rem]" for="priceOfKub">
                    Price of Kub or Kg
                  </label>
                  <input
                    id="priceOfKub"
                    type="number"
                    disabled=""
                    placeholder="Enter price"
                    class="bg-gray-50 duration-300 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 p-2.5 "
                  />
                </div>
                <div class="flex flex-col w-[49%] mt-4">
                  <label for="totalKub">Result price</label>
                  <input
                    id="totalKub"
                    disabled=""
                    placeholder="Result price"
                    class="bg-gray-200 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
                    value="0"
                  />
                </div>
                <div class="flex flex-col w-[49%] mt-4">
                  <label for="priceForRoad">Price For Road</label>
                  <input
                    id="priceForRoad"
                    type="number"
                    placeholder="Enter price"
                    class="bg-gray-50 duration-300 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
                  />
                </div>
                <div class="flex flex-col w-[49%] mt-4">
                  <label for="customsClearancePrice">
                    Customs clearance amount
                  </label>
                  <input
                    id="customsClearancePrice"
                    type="number"
                    placeholder="Enter price"
                    class="bg-gray-50 duration-300 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
                  />
                </div>
                <div class="flex flex-col w-[49%] mt-4">
                  <label for="cct">Cct amount</label>
                  <input
                    id="cct"
                    type="number"
                    placeholder="Enter Cct amount"
                    class="bg-gray-50 duration-300 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
                  />
                </div>
                <div class="flex flex-col w-[49%] mt-4">
                  <label for="costChina">Consumption to China</label>
                  <input
                    id="costChina"
                    type="number"
                    placeholder="Enter Consumption to China"
                    class="bg-gray-50 duration-300 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
                  />
                </div>
                <div class="flex flex-col w-full mt-4">
                  <label for="totalPrice">Total price</label>
                  <input
                    id="totalPrice"
                    disabled=""
                    placeholder="Total price"
                    class="bg-gray-200 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
                    value="0"
                  />
                </div>
              </form>
              <div class="flex md:justify-end justify-center  mt-4">
                <button
                  onClick={toggleFunc}
                  class="py-2 px-8 mr-3 bg-red-500 rounded-md text-white active:scale-95 hover:shadow-lg hover:shadow-red-200 duration-300"
                >
                  Close
                </button>
                <button class="py-2 px-8 bg-[#16A34A] rounded-md text-white active:scale-95 hover:shadow-lg hover:shadow-green-200 duration-300">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </Add_Cashier>
    </div>
  );
};

const Add_Cashier = styled.div``;

export default AddCashier;
