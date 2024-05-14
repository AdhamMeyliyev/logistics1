import React, { useEffect, useState } from "react";
import ProductsService from "../../services/products";
import { Pagination } from "flowbite-react";
import ModalImg from "./modal-img";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [img, setImg] = useState("");
  const [toggle, setToggle] = useState(false);

  const onPageChange = (page) => setCurrentPage(page);

  const getProducts = async () => {
    setIsloading(true);
    const data = await ProductsService.getProducts(currentPage - 1);
    setProducts(data.data.data.body.object);
    setMessage(data.data.data.message);
    setTotalPage(data.data.data.body.totalPage);
    setIsloading(false);
  };

  const handleClick = (id) => {
    setToggle(true);
    setImg(id);
  };

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  return (
    <div className="relative">
      <ModalImg toggle={toggle} setToggle={setToggle} imgUrl={img} />
      <p className="mt-6">Current Page: {currentPage}</p>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-[#e1e8f0]">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Photo
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCT NAME
            </th>
            <th scope="col" className="px-6 py-3">
              TOTAL KLUB
            </th>
            <th scope="col" className="px-6 py-3">
              TOTAL WEIGHT
            </th>
            <th scope="col" className="px-6 py-3">
              DATE
            </th>
            <th scope="col" className="px-6 py-3">
              COMMENT
            </th>
            <th scope="col" className="px-6 py-3">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products &&
            products.map((item) => (
              <tr key={item.id} className="bg-white border-b">
                <td className="px-6 py-4">{item.id}</td>
                <th className="py-2">
                  <img
                    onClick={() => handleClick(item.attachmentId)}
                    className="rounded-full w-20 h-20"
                    src={`http://164.90.171.135:8080/attachment/getFile/${item.attachmentId}`}
                    alt=""
                  />
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4 relative">
                  {item.totalKub} sm
                  <span className="text-xs inline-block absolute">3</span>
                </td>
                <td className="px-6 py-4">{item.totalWeight} Kg</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.comment}</td>
                <td className="px-6 py-4">{item.status}</td>
              </tr>
            ))
          ) : (
            <tr className="text-center text-2xl mx-auto">{message}</tr>
          )}
        </tbody>
      </table>
      {isLoading && (
        <div className="w-12 animate-spin h-12 mt-8 rounded-full border-4 mx-auto border-black border-dotted" />
      )}
      <div className="flex overflow-x-auto">
        <Pagination
          className="flex gap-10"
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={onPageChange}
          previousLabel=""
          nextLabel=""
          showIcons
        />
      </div>
    </div>
  );
};

export default Table;
