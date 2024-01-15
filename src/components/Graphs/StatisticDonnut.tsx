import ReactApexChart from "react-apexcharts";

const StatisticsDonnut = () => {
  const chartState = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="donut"
      />
    </div>
  );
};

export default StatisticsDonnut;
