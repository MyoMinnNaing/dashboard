import React from "react";
import Chart from "react-apexcharts";

const Column = () => {
  const series = [
    {
      name: "Sale",
      data: [44, 55, 41, 67, 22, 27, 33],
    },
  ];

  const options = {
    chart: {
      chart: {
        type: "bar",
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        show: false,
      },
    },

    colors: "#e2a03f",

    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: "30%",
        barHeight: "100%",

        colors: {
          backgroundBarColors: [
            "#d1d5db",
            "#d1d5db",
            "#d1d5db",
            "#d1d5db",
            "#d1d5db",
            "#d1d5db",
            "#d1d5db",
          ],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 0,
        },
      },
    },

    grid: {
      show: false, // Set to false to hide the grid lines
    },
  };
  return (
    <Chart
      type="bar"
      height={170}
      width={"100%"}
      options={options}
      series={series}
    />
  );
};

export default Column;
