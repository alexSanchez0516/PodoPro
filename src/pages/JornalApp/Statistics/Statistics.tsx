import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import StatisticsDonnut from "../../../components/Graphs/StatisticDonnut";
import StsatisticBar from "../../../components/Graphs/StsatisticBar";

const Statistics = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="line"
          height={350}
        />
      </div>
      <StatisticsDonnut />
      <StsatisticBar />
    </>
  );
};

export default Statistics;
