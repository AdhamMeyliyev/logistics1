import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import ProductsService from "../../services/products";
import { toast } from "react-toastify";

export const StatisticDashboard = () => {
  const [data, setData] = useState([]);

  const getDiagram = async () => {
    try {
      const data = await ProductsService.getProductsDiagram();
      setData(data.data.data.body);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDiagram();
  }, []);

  const option = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "4%",
      right: "4%",
      bottom: "1%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: data.map((item) => item.month),
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Count",
        type: "bar",
        barWidth: "80%",
        data: [10, 20, 30],
      },
      {
        name: "Name",
        type: "bar",
        data: data.map((item) => item.names[0]),
      },
      {
        name: "Status",
        type: "bar",
        data: data.map((item) => item.status),
      },
    ],
  };

  return (
    <div className="w-full">
      <ReactECharts option={option} />
    </div>
  );
};
