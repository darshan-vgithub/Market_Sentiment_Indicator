import React from "react";
import Chart from "react-apexcharts";

const FIIDIIChart = ({ number }) => {
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
    series: [
      {
        name: "Series 1",
        data: generateSeriesData(31, 5), // Different data for Series 1
      },
      {
        name: "Series 2",
        data: generateSeriesData(31, 3), // Different data for Series 2
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

export default FIIDIIChart;
