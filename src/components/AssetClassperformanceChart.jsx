import React from "react";
import Chart from "react-apexcharts";

const AssetClassperformanceChart = ({ number }) => {
  const generateSeriesData = (baseYear, multiplier) => {
    return Array.from({ length: number }, (_, i) => ({
      x: baseYear + i,
      y: 1000 + i * multiplier,
    }));
  };

  const seriesData = [
    {
      name: "Series 1",
      data: generateSeriesData(2020, 5), 
    },
    {
      name: "Series 2",
      data: generateSeriesData(2020, 7),
    },
    {
      name: "Series 3",
      data: generateSeriesData(2020, 10),
    },
    {
      name: "Series 4",
      data: generateSeriesData(2020, 12), 
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    colors: ["#FF4560", "#008FFB", "#00E396", "#FEB019"],
    series: seriesData,
    xaxis: {
      type: "numeric",
      labels: {
        formatter: function (val) {
          return `${val}`;
        },
      },
      title: {
        text: "Year",
      },
    },
    yaxis: {
      title: {
        text: "Amount",
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={seriesData} type="area" height={350} />
    </div>
  );
};

export default AssetClassperformanceChart;
