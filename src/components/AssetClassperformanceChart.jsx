import React from "react";
import Chart from "react-apexcharts";
const AssetClassperformanceChart = ({ number }) => {
  const generateSeriesData = (baseValue, multiplier) => {
    // Generate a series of data up to the given number with a multiplier
    return Array.from({ length: number }, (_, i) => baseValue + i * multiplier);
  };
  const options = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    colors: ["#FF4560", "#008FFB", "#00E396", "#FEB019"],
    series: [
      {
        name: "Series 1",
        data: generateSeriesData(0, 5), // Different data for Series 1
      },
      {
        name: "Series 2",
        data: generateSeriesData(0, 3), // Different data for Series 2
      },
      {
        name: "Series 3",
        data: generateSeriesData(0, 2), // Different data for Series 3
      },
      {
        name: "Series 4",
        data: generateSeriesData(0, 4), // Different data for Series 4
      },
    ],
    xaxis: {
      categories: Array.from({ length: number }, (_, i) => `Point ${i + 1}`),
    },
  };
  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AssetClassperformanceChart;
