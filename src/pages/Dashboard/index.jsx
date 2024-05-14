import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import ProductsService from "../../services/products";

export const Dashboard = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await ProductsService.getProductsStatistic();
      setData(data.data.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };

  return (
    <div className="w-96">
      <ReactECharts option={option} />
    </div>
  );
};
