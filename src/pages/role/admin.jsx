import React from "react";
import Navbar from "../../components/admin/navbar";
import { Dashboard } from "../Dashboard";
import { StatisticDashboard } from "../Dashboard/statstic-dashboard";
import Table from "../../components/admin/table";

const Admin = () => {
  return (
    <div className="w-full bg-fixed bg-[url('http://gsrlogistic.uz/static/media/back.e41e920c5b0118532b6f.jpg')] h-auto py-10">
      <Navbar />
      <div className="w-full flex gap-10 flex-wrap mt-16 items-center px-10">
        <div className="flex items-center justify-center rounded-xl w-2/6 h-[25rem] bg-white/50 py-5">
          <Dashboard />
        </div>
        <div className="w-3/5 flex px-10 items-center justify-center rounded-xl h-[25rem] bg-white/50 py-5">
          <StatisticDashboard />
        </div>
      </div>
      <div className="w-full px-10 mt-20">
        <div className="bg-white/50 p-5 rounded-lg">
          <input
            placeholder="🔍 Product name"
            className="outline-none border-none px-5 w-2/6 h-8 rounded"
            type="search"
          />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Admin;
