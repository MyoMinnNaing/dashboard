import React from "react";
import Chart from "react-apexcharts";

const Area = ({ width, height, options, series, type }) => {
  return (
    <Chart
      width={width}
      height={height}
      options={options}
      series={series}
      type={type}
    />
  );
};

export default Area;
