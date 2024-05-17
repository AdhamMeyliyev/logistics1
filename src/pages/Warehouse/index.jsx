import { useEffect, useState } from "react";
import Navbar from "../../components/admin/navbar";
import AddWarehouse from "../../components/Modal/AddWarehouseModal";
import Warehous from "../../services/warehouse";
import { toast } from "react-toastify";

const Warehouse = () => {
  const [toggle, setToggle] = useState(false);
  const [warehouse, setWarehouse] = useState([]);
  const [variable, setVariable] = useState();
  const [download, setDownload] = useState("");

  const getWarehous = async () => {
    const { data } = await Warehous.getWarehouse();
    console.log(data.data.body.object);
    setWarehouse(data.data.body.object);
  };

  const deleteWarehous = async (id) => {
    const { data } = await Warehous.deleteWarehouse(id);
    console.log(data);
    setVariable(data);
    toast.success("Warehous deleted");
  };

  const downloadWarehouse = async (warehouseData) => {
    const { data } = await Warehous.downloadWarehouse({
      woreHouseId: warehouseData.wareHouseId,
    });
    setDownload(data.data);
  };

  useEffect(() => {
    getWarehous();
  }, [variable]);

  const toggleFunc = () => setToggle(!toggle);

  return (
    <>
      <Navbar />
      {toggle && <AddWarehouse toggleFunc={toggleFunc} />}
      <div
        className="bg-[url('http://gsrlogistic.uz/static/media/back.e41e920c5b0118532b6f.jpg')] w-[100%] 
        px-20 py-10 !bg-cover bg-center bg-fixed"
      >
        <div className="w-[100%] mt-14">
          <input
            type="search"
            placeholder="🔍 Warehouse name..."
            className="lg:w-4/12 w-5/12 ml-2 md:ml-0 ps-2 h-10 focus:outline-0 border sm:mt-0 mt-2"
          />
          <div className="flex justify-between my-5">
            <button
              onClick={toggleFunc}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-1.5 px-8  rounded"
            >
              Add warehouse
            </button>
            <h1>
              <b>Warehouse</b>
            </h1>
            <span></span>
          </div>
          <div className="mt-4 flex flex-wrap justify-between overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    №
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    total kub
                  </th>
                  <th scope="col" className="px-6 py-3">
                    product count
                  </th>
                  <th scope="col" className="px-6 py-3">
                    total weight
                  </th>
                  <th scope="col" className="px-6 py-3">
                    edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    delete
                  </th>
                  <th scope="col" className="px-6 py-3">
                    view more
                  </th>
                  <th scope="col" className="px-6 py-3">
                    download
                  </th>
                </tr>
              </thead>
              <tbody>
                {warehouse.map((item) => (
                  <tr>
                    <th>{item.wareHouseId}</th>
                    <th>{item.name}</th>
                    <th>{item.totalKub}</th>
                    <th>{item.productCount}</th>
                    <th>{item.totalWeight}</th>
                    <th>
                      <button className="bg-blue-500 text-white py-2 px-8 rounded-lg">
                        Edit
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => deleteWarehous(item.wareHouseId)}
                        className="bg-red-500 text-white py-2 px-8 rounded-lg"
                      >
                        Delete
                      </button>
                    </th>
                    <th className="text-blue-400">
                      <a href="#">View more</a>
                    </th>
                    <th
                      onClick={() => downloadWarehouse(item)}
                      className="text-blue-400"
                    >
                      <a
                        href={`${download}.xlsx`}
                        download={`${download}.xlsx`}
                      >
                        Download
                      </a>
                    </th>
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

export default Warehouse;
