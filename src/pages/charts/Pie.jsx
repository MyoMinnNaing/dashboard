import React from "react";
import Chart from "react-apexcharts";

const Pie = () => {
  const series = [985, 737, 270];

  const options = {
    charts: {
      type: "donut",
    },

    dataLabels: {
      enabled: false,
    },
    labels: ["Apparel", "Sports", "Other"],
    title: {
      text: "", // Set the title text to an empty string to hide it
    },
    colors: ["#ea580c", "#7e22ce", "#f43f5e"],
    toolbar: {
      show: false,
    },
    plotOptions: {
      pie: {
        offsetX: 0,
        offsetY: 0,
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: {
              show: true,
            },
          },
        },
      },
    },

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 10,
        vertical: 10,
      },
    },
  };

  return (
    <Chart
      options={options}
      height={"350px"}
      width={"100%"}
      type="donut"
      series={series}
    />
  );
};

export default Pie;
