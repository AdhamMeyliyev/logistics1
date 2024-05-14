import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import ProductsService from "../../services/products";

export const StatisticDashboard = () => {
  const [data, setData] = useState([]);

  const getDiagram = async () => {
    const data = await ProductsService.getProductsDiagram();
    setData(data.data.data.body);
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
        data: data,
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
        name: "direct",
        type: "bar",
        barWidth: "80%",
        data: data,
      },
    ],
  };

  return (
    <div className="w-full">
      <ReactECharts option={option} />
    </div>
  );
};
