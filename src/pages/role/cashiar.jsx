import React, { useState } from "react";
import styled from "styled-components";
import "flowbite";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/admin/navbar";
import AddCashier from "../../components/Modal/AddCashierModal";
import DownloadCashier from "../../components/Modal/DownloadCashierModal";

const Cashier = () => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);

  const toggleFunc = () => setToggle(!toggle);
  const downloadModalToggle = () => setDownloadModal(!downloadModal);
  return (
    <>
      <Navbar />
      {toggle && <AddCashier toggleFunc={toggleFunc} />}
      {downloadModal && (
        <DownloadCashier downloadModalToggle={downloadModalToggle} />
      )}
      <Container>
        <div className=" w-[100%] px-20 py-10 !bg-cover bg-center bg-fixed h-[90vh]">
          <div className="tool-menu ">
            <div>
              <button
                onClick={toggleFunc}
                className="btn active:scale-95 transition-all duration-200"
              >
                {t("buttons.add")}
              </button>
              <button
                onClick={downloadModalToggle}
                className="btn-dwl active:scale-95 transition-all duration-200"
              >
                {t("buttons.download")}
              </button>
            </div>
            <div className="srch">
              <form className="max-w-sm mx-auto">
                <label htmlFor="underline_select" className="sr-only">
                  Underline select
                </label>
                <select id="underline_select" className="search">
                  <option value="default" selected>
                    {t("select.selectsearch")}
                  </option>
                  <option value="US">Select project search</option>
                </select>
              </form>
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="start"
                    type="text"
                    className="input"
                    placeholder={t("select.startdate")}
                  />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="end"
                    type="text"
                    className="input"
                    placeholder={t("select.enddate")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("table.username")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("table.projectname")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("table.productname")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("table.date")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("table.price")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("table.action")}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {t("table.calculated")}
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  .tool-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px;

    .btn,
    .btn-dwl {
      background-color: rgb(22 163 74);
      color: #fff;
      padding: 10px 1rem;
      margin-right: 10px;
      border-radius: 5px;
      border: 1px solid #fff;
      font-weight: bold;
    }
    .search {
      padding: 10px;
      border-radius: 5px;
      color: grey;
    }
    .input {
      padding: 8px 0px 8px 35px;
      border-radius: 5px;
    }
    .srch {
      display: flex;
      gap: 20px;
    }
  }
`;

export default Cashier;
