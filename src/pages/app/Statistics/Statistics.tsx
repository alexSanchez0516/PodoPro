import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import StatisticsDonnut from "../../../components/Graphs/StatisticDonnut";
import StsatisticBar from "../../../components/Graphs/StsatisticBar";
import { Card, Typography } from "@mui/material";

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
        text: "Informe rentabilidad por año",
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
      <div
        style={{ margin: "0 auto" }}
        className="flex w-full gap-16 flex-col items-center justify-center md:w-11/12 "
      >
        <Typography variant="h3">Dashboard</Typography>
        <Card className="w-full p-5">
          TODO: AQUI SERÁ LOS BENEFICIOS TOTALES DEL AÑO - EL AÑO PUEDE SER
          CAMBIADO
          <div id="chart" className="w-full">
            <ReactApexChart
              options={chartState.options}
              series={chartState.series}
              type="line"
              height={350}
            />
          </div>
        </Card>
        {/* "Informe rentabilidad por año y clínica" */}
        <Card className="w-full p-5">
          TODO: AQUI SERÁ LOS BENEFICIOS TOTALES DEL AÑO SEPARADO POR CLINICA-
          EL AÑO PUEDE SER CAMBIADO
          <StsatisticBar
            titleStatistic={"Informe rentabilidad por año y clínica"}
          />
        </Card>
        <Card className="w-full p-5">
          TODO: AQUI SERÁ LOS BENEFICIOS TOTALES DEL MES SEPARADO POR CLINICA-
          EL MES PUEDE SER CAMBIADO
          <StsatisticBar
            titleStatistic={"Informe rentabilidad por mes y clínica"}
          />
        </Card>
        <Card className="w-full flex flex-col md:flex-row p-5">
          <div className="w-full md:w-1/2 flex flex-col">
            <StatisticsDonnut />
          </div>
          {/* <div className="w-full md:w-1/2 flex flex-col">
            <StatisticsDonnut />
          </div> */}
        </Card>
      </div>
    </>
  );
};

export default Statistics;
