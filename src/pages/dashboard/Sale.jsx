import React from "react";
import Area from "../charts/Area";
import Pie from "../charts/Pie";
import Column from "../charts/Column";
const SalePage = () => {
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      offsetX: 10,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      min: 13,
      max: 20,
      tickAmount: 8,
      decimalsInFloat: true,

      labels: {
        show: true,
        align: "right",
        style: {
          colors: ["#333"],
          fontSize: "15px",
          fontWeight: 400,
        },
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
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "round",
      colors: ["red", "blue"],
      width: 2,
    },
    fill: {
      colors: ["#dc2626", "#4f46e5"],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },

    grid: {
      show: true, // Set to false to hide the grid lines
      borderColor: "#e0e0e0", // Color of the grid lines
      strokeDashArray: 5, // Length of the stroke dash in grid lines
      position: "back", // 'front' or 'back': determines whether the grid is drawn in front of or behind the chart series
      xaxis: {
        lines: {
          show: true, // Set to false to hide x-axis grid lines
        },
      },
      yaxis: {
        lines: {
          show: false, // Set to false to hide y-axis grid lines
        },
      },
    },
    markers: {
      size: 5,
      colors: ["red", "blue"],
      strokeColors: ["red", "blue"],
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,

      shape: "circle",
      showNullDataPoints: true,
      hover: {
        size: 9,
        sizeOffset: 3,
      },
    },

    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      itemMargin: {
        horizontal: 10,
        vertical: 10,
      },
    },
  };

  const series = [
    {
      name: "Income",
      data: [16.8, 16.8, 15.5, 17.8, 15.5, 17, 19, 16, 15, 17, 14, 17],
    },

    {
      name: "Expense",
      data: [16.5, 17.5, 16.2, 17.3, 16, 19.5, 16, 17, 16, 19, 18, 19],
    },
  ];

  const options2 = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      offsetX: 10,
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
      ],

      labels: {
        show: false,
      },
      axisBorder: {
        show: true,
      },
    },

    yaxis: {
      labels: {
        show: false,
      },
    },

    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "round",
      colors: ["green"],
      width: 2,
    },
    fill: {
      colors: ["#86efac"],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },

    grid: {
      show: false, // Set to false to hide the grid lines
    },
  };

  const series2 = [
    {
      name: "Sale",
      data: [28, 40, 36, 52, 38, 60, 38, 52, 40],
    },
  ];

  return (
    <section className=" p-[30px] bg-[#fafafa] dark:bg-slate-600">
      <ul className="flex space-x-2  mb-6 text-normal">
        <li>
          <a href="#" className="text-blue-600  hover:underline">
            Dashboard
          </a>
        </li>
        <li className="before:content-['/'] ">
          <span>Sales</span>
        </li>
      </ul>

      <div className=" grid grid-cols-12 gap-5">
        <div className=" col-span-12 lg:col-span-8  gap-3 shadow-md p-[25px] border rounded ">
          <div className="mb-3 flex items-center dark:text-white-light">
            <h5 className="text-lg font-semibold">Revenue</h5>
            <div className="dropdown ml-auto ">
              <a href="#">
                <svg
                  className="h-5 w-5 text-black/70 hover:!text-primary dark:text-white/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="5"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                  <circle
                    opacity="0.5"
                    cx="12"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                  <circle
                    cx="19"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                </svg>
              </a>
              {/* <ul>
                <li>
                  <a href="#">Weekly</a>
                </li>
                <li>
                  <a href="#">Monthly</a>
                </li>
                <li>
                  <a href="#">Yearly</a>
                </li>
              </ul> */}
            </div>
          </div>

          <p className="text-lg dark:text-white-light/90">
            Total Profit <span className="ml-2 text-blue-600">$10,840</span>
          </p>
          <Area
            height={350}
            width={"100%"}
            options={options}
            series={series}
            type="area"
          />
        </div>
        <div className=" col-span-12 lg:col-span-4 shadow-md p-[25px] border rounded ">
          <h5 className="text-lg font-semibold mb-5">Sales By Category</h5>
          <Pie />
        </div>
      </div>

      <div className=" grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-12 lg:col-span-4 p-[25px] border shadow-md">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Daily Sales{" "}
              <span className="block text-sm font-normal text-gray-400">
                Go to columns htmlFor details.
              </span>
            </h5>
            <div className="relative ltr:ml-auto rtl:mr-auto">
              <div className="grid h-11 w-11 place-content-center rounded-full bg-[#ffeccb] text-warning dark:bg-warning dark:text-[#ffeccb]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V18"
                    stroke="#e2a03f"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
                    stroke="#e2a03f"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <Column />
        </div>
        <div className=" col-span-12 md:col-span-6 lg:col-span-4 p-[25px] border shadow-md">
          <div className="mb-3 flex items-center dark:text-white-light">
            <h5 className="text-lg font-semibold">Summary</h5>
            <div className="dropdown ml-auto ">
              <a href="#">
                <svg
                  className="h-5 w-5 text-black/70 hover:!text-primary dark:text-white/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="5"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                  <circle
                    opacity="0.5"
                    cx="12"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                  <circle
                    cx="19"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                </svg>
              </a>
              {/* <ul>
                <li>
                  <a href="#">Weekly</a>
                </li>
                <li>
                  <a href="#">Monthly</a>
                </li>
                <li>
                  <a href="#">Yearly</a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className=" space-y-9">
            <div className="flex gap-3 items-center">
              <div className="p-2.5 bg-gray-200 rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#9333ea"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.74157 18.5545C4.94119 20 7.17389 20 11.6393 20H12.3605C16.8259 20 19.0586 20 20.2582 18.5545M3.74157 18.5545C2.54194 17.1091 2.9534 14.9146 3.77633 10.5257C4.36155 7.40452 4.65416 5.84393 5.76506 4.92196M3.74157 18.5545C3.74156 18.5545 3.74157 18.5545 3.74157 18.5545ZM20.2582 18.5545C21.4578 17.1091 21.0464 14.9146 20.2235 10.5257C19.6382 7.40452 19.3456 5.84393 18.2347 4.92196M20.2582 18.5545C20.2582 18.5545 20.2582 18.5545 20.2582 18.5545ZM18.2347 4.92196C17.1238 4 15.5361 4 12.3605 4H11.6393C8.46374 4 6.87596 4 5.76506 4.92196M18.2347 4.92196C18.2347 4.92196 18.2347 4.92196 18.2347 4.92196ZM5.76506 4.92196C5.76506 4.92196 5.76506 4.92196 5.76506 4.92196Z"
                    stroke="#9333ea"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M9.1709 8C9.58273 9.16519 10.694 10 12.0002 10C13.3064 10 14.4177 9.16519 14.8295 8"
                    stroke="#9333ea"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex font-semibold  justify-between text-gray-400 text-normal">
                  <h6>Income</h6>
                  <p className="ltr:ml-auto rtl:mr-auto">$92,600</p>
                </div>
                <div className="h-2 rounded-full bg-dark-light shadow dark:bg-[#1b2e4b]">
                  <div className="h-full w-11/12 rounded-full bg-gradient-to-r from-[#7579ff] to-[#b224ef]"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="p-2.5 bg-[#dcfce7]  rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                    stroke="#16a34a"
                    strokeWidth="1.5"
                  ></path>
                  <circle
                    opacity="0.5"
                    cx="8.60699"
                    cy="8.87891"
                    r="2"
                    transform="rotate(-45 8.60699 8.87891)"
                    stroke="#16a34a"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    opacity="0.5"
                    d="M11.5417 18.5L18.5208 11.5208"
                    stroke="#16a34a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex font-semibold  justify-between text-gray-400 text-normal">
                  <h6>Profit</h6>
                  <p className="ltr:ml-auto rtl:mr-auto">$37,515</p>
                </div>
                <div className="h-2 rounded-full bg-dark-light shadow dark:bg-[#1b2e4b]">
                  <div className="h-full w-8/12 rounded-full bg-gradient-to-r from-[#22c55e] to-[#15803d]"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="p-2.5 bg-[#fefce8]  rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                    stroke="#facc15"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M10 16H6"
                    stroke="#facc15"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M14 16H12.5"
                    stroke="#facc15"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M2 10L22 10"
                    stroke="#facc15"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex font-semibold  justify-between text-gray-400 text-normal">
                  <h6>Expenses</h6>
                  <p className="ltr:ml-auto rtl:mr-auto">$55,085</p>
                </div>
                <div className="h-2 rounded-full bg-dark-light shadow dark:bg-[#1b2e4b]">
                  <div className="h-full w-9/12 rounded-full bg-gradient-to-r from-[#fb923c] to-[#d97706]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-6 lg:col-span-4  border shadow-md">
          <div className="mb-3 px-[25px] pt-[25px] flex items-center justify-between">
            <div className=" p-4 bg-[#dcfce7] rounded-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
                  stroke="#16a34a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  opacity="0.5"
                  d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                  stroke="#16a34a"
                  strokeWidth="1.5"
                ></path>
                <path
                  opacity="0.5"
                  d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                  stroke="#16a34a"
                  strokeWidth="1.5"
                ></path>
                <path
                  opacity="0.5"
                  d="M11 9H8"
                  stroke="#16a34a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
                  stroke="#16a34a"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <h5 className="text-2xl font-semibold ">
              3,192
              <span className="block text-sm font-normal">Total Orders</span>
            </h5>
          </div>

          <div className=" w-full">
            <Area
              type="area"
              options={options2}
              series={series2}
              width={"100%"}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-12 gap-5 mt-5">
        <div className=" col-span-12 md:col-span-6 lg:col-span-4 p-[25px] border shadow-md rounded-md">
          <h5 className="mb-5 text-lg font-semibold dark:text-white-light">
            Recent Activities
          </h5>

          <div className=" overflow-y-scroll relative -mr-3 mb-4 h-[290px] pr-3 ">
            <div className=" cursor-pointer text-sm">
              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                <div className="flex-1">Updated Server Logs</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  Just Now
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-blue-600  bg-gray-100 text-blue-600 text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  Pending
                </span>
              </div>

              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2"></div>
                <div className="flex-1">Send Mail to HR and Admin</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  2 mins ago
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-green-600  bg-gray-100 text-green-600 text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  completed
                </span>
              </div>

              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600 mr-2"></div>
                <div className="flex-1">Backup Files EOD</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  Just Now
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-red-600  bg-gray-100 text-red-600 text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  Pending
                </span>
              </div>

              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-black mr-2"></div>
                <div className="flex-1">Collect documents from Sara</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  1 hour ago
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-black  bg-gray-100 text-black text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  completed
                </span>
              </div>

              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                <div className="flex-1">Updated Server Logs</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  Just Now
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-blue-600  bg-gray-100 text-blue-600 text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  Pending
                </span>
              </div>

              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2"></div>
                <div className="flex-1">Send Mail to HR and Admin</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  2 mins ago
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-green-600  bg-gray-100 text-green-600 text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  completed
                </span>
              </div>

              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600 mr-2"></div>
                <div className="flex-1">Backup Files EOD</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  Just Now
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-red-600  bg-gray-100 text-red-600 text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  Pending
                </span>
              </div>

              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600 mr-2"></div>
                <div className="flex-1">Backup Files EOD</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  Just Now
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-red-600  bg-gray-100 text-red-600 text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  Pending
                </span>
              </div>

              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-black mr-2"></div>
                <div className="flex-1">Collect documents from Sara</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  1 hour ago
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-black  bg-gray-100 text-black text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  completed
                </span>
              </div>

              <div className="group relative flex items-center py-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                <div className="flex-1">Updated Server Logs</div>
                <div className=" group-hover:opacity-0 duration-200 text-xs font-semibold  text-gray-400 dark:text-gray-500">
                  Just Now
                </div>

                <span className=" border opacity-0 group-hover:opacity-100 duration-200 absolute right-0 top-1 border-blue-600  bg-gray-100 text-blue-600 text-[15px] font-semibold px-2.5  py-0.5 rounded-md ">
                  Pending
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-white-light dark:border-white/10">
            <a
              href="#"
              className="group group flex items-center justify-center p-4 font-semibold hover:text-blue-500"
            >
              View All
              <svg
                className="h-4 w-4 transition duration-300 group-hover:translate-x-1 ltr:ml-1 rtl:mr-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-6 lg:col-span-4 p-[25px] border shadow-md rounded-md">
          <div className="mb-3 flex items-center dark:text-white-light">
            <h5 className="text-lg font-semibold">Transactions</h5>
            <div className="dropdown ml-auto ">
              <a href="#">
                <svg
                  className="h-5 w-5 text-black/70 hover:!text-primary dark:text-white/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="5"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                  <circle
                    opacity="0.5"
                    cx="12"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                  <circle
                    cx="19"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                </svg>
              </a>
              {/* <ul>
                <li>
                  <a href="#">Weekly</a>
                </li>
                <li>
                  <a href="#">Monthly</a>
                </li>
                <li>
                  <a href="#">Yearly</a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className=" space-y-5">
            <div className="flex">
              <span className="grid h-9 w-9 shrink-0 place-content-center rounded-md bg-green-100 text-base text-green-600 dark:bg-success dark:text-success-light">
                SP
              </span>
              <div className="flex-1 px-3">
                <div>Shaun Park</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  10 Jan 1:00PM
                </div>
              </div>
              <span className="whitespace-pre px-1 text-base text-green-600 ltr:ml-auto rtl:mr-auto">
                +$36.11
              </span>
            </div>

            <div className="flex">
              <span className="grid h-9 w-9 shrink-0 place-content-center rounded-md bg-yellow-100 text-base text-yellow-600 dark:bg-success dark:text-success-light">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M2 10C2 7.17157 2 5.75736 2.87868 4.87868C3.75736 4 5.17157 4 8 4H13C15.8284 4 17.2426 4 18.1213 4.87868C19 5.75736 19 7.17157 19 10C19 12.8284 19 14.2426 18.1213 15.1213C17.2426 16 15.8284 16 13 16H8C5.17157 16 3.75736 16 2.87868 15.1213C2 14.2426 2 12.8284 2 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M19.0003 7.07617C19.9754 7.17208 20.6317 7.38885 21.1216 7.87873C22.0003 8.75741 22.0003 10.1716 22.0003 13.0001C22.0003 15.8285 22.0003 17.2427 21.1216 18.1214C20.2429 19.0001 18.8287 19.0001 16.0003 19.0001H11.0003C8.17187 19.0001 6.75766 19.0001 5.87898 18.1214C5.38909 17.6315 5.17233 16.9751 5.07642 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M13 10C13 11.3807 11.8807 12.5 10.5 12.5C9.11929 12.5 8 11.3807 8 10C8 8.61929 9.11929 7.5 10.5 7.5C11.8807 7.5 13 8.61929 13 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M16 12L16 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M5 12L5 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <div className="flex-1 px-3">
                <div>Shaun Park</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  04 Jan 1:00PM
                </div>
              </div>
              <span className="whitespace-pre px-1 text-base text-yellow-600 ltr:ml-auto rtl:mr-auto">
                -$16.44
              </span>
            </div>

            <div className="flex">
              <span className="grid h-9 w-9 shrink-0 place-content-center rounded-md bg-orange-100 text-base text-orange-600 dark:bg-success dark:text-success-light">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="6"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    opacity="0.5"
                    d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
              <div className="flex-1 px-3">
                <div> Amy Diaz</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  10 Jan 1:00PM
                </div>
              </div>
              <span className="whitespace-pre px-1 text-base text-orange-600 ltr:ml-auto rtl:mr-auto">
                +$66.44
              </span>
            </div>

            <div className="flex">
              <span className="grid h-9 w-9 shrink-0 place-content-center rounded-md bg-purple-100 text-base text-purple-600 dark:bg-success dark:text-success-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596c2.344.058 4.85.398 4.854.398c-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"
                  ></path>
                </svg>
              </span>
              <div className="flex-1 px-3">
                <div> Netflix</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  04 Jan 1:00PM
                </div>
              </div>
              <span className="whitespace-pre px-1 text-base text-purple-600 ltr:ml-auto rtl:mr-auto">
                -$32.00
              </span>
            </div>

            <div className="flex">
              <span className="grid h-9 w-9 shrink-0 place-content-center rounded-md bg-gray-100 text-base text-gray-600 dark:bg-success dark:text-success-light">
                DA
              </span>
              <div className="flex-1 px-3">
                <div> Daisy Anderson</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  10 Jan 1:00PM
                </div>
              </div>
              <span className="whitespace-pre px-1 text-base text-gray-600 ltr:ml-auto rtl:mr-auto">
                +$10.08
              </span>
            </div>

            <div className="flex">
              <span className="grid h-9 w-9 shrink-0 place-content-center rounded-md bg-blue-100 text-base text-blue-600 dark:bg-success dark:text-success-light">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.926 9.70541C13.5474 9.33386 13.5474 8.74151 13.5474 7.55682V7.24712C13.5474 3.96249 13.5474 2.32018 12.6241 2.03721C11.7007 1.75425 10.711 3.09327 8.73167 5.77133L5.66953 9.91436C4.3848 11.6526 3.74244 12.5217 4.09639 13.205C4.10225 13.2164 4.10829 13.2276 4.1145 13.2387C4.48945 13.9117 5.59888 13.9117 7.81775 13.9117C9.05079 13.9117 9.6673 13.9117 10.054 14.2754"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M13.9259 9.70557L13.9459 9.72481C14.3326 10.0885 14.9492 10.0885 16.1822 10.0885C18.4011 10.0885 19.5105 10.0885 19.8854 10.7615C19.8917 10.7726 19.8977 10.7838 19.9036 10.7951C20.2575 11.4785 19.6151 12.3476 18.3304 14.0858L15.2682 18.2288C13.2888 20.9069 12.2991 22.2459 11.3758 21.9629C10.4524 21.68 10.4524 20.0376 10.4525 16.753L10.4525 16.4434C10.4525 15.2587 10.4525 14.6663 10.074 14.2948L10.054 14.2755"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
              <div className="flex-1 px-3">
                <div> Daisy Anderson</div>
                <div className="text-xs text-blue-400 dark:text-gray-500">
                  10 Jan 1:00PM
                </div>
              </div>
              <span className="whitespace-pre px-1 text-base text-gray-600 ltr:ml-auto rtl:mr-auto">
                +$10.08
              </span>
            </div>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-6 lg:col-span-4 border shadow-md rounded-md">
          <div className=" rounded-r-md rounded-t-md p-[30px]  min-h-[190px] bg-gradient-to-r from-[#4361ee] to-[#160f6b] ">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex  gap-2 items-center rounded-full bg-black/50 p-1 font-semibold text-white ltr:pr-3 rtl:pl-3">
                <img
                  className="block h-8 w-8 rounded-full border-2 border-white/50 object-cover ltr:mr-1 rtl:ml-1"
                  src="https://html.vristo.sbthemes.com/assets/images/profile-34.jpeg"
                  alt="image"
                />
                <span className=" text-sm mr-2">Alan Green</span>
              </div>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-between rounded-md bg-black text-white hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <svg
                  className="m-auto h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between text-white">
              <p className="text-xl">Wallet Balance</p>
              <h5 className="text-2xl ltr:ml-auto rtl:mr-auto">
                <span className="text-white-light">$</span>2953
              </h5>
            </div>
          </div>

          <div className="-mt-12 grid grid-cols-2 gap-2 px-8">
            <div className="rounded-md bg-white px-4 py-2.5 shadow dark:bg-[#060818]">
              <span className="mb-4 flex items-center justify-between dark:text-white">
                Received
                <svg
                  className="h-4 w-4 text-success"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 15L12 9L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <div className=" rounded-md text-center w-full border-0 bg-[#ebedf2] py-1 text-base text-[#515365] shadow-none dark:bg-black dark:text-[#bfc9d4]">
                $97.99
              </div>
            </div>
            <div className="rounded-md bg-white px-4 py-2.5 shadow dark:bg-[#060818]">
              <span className="mb-4 flex items-center justify-between dark:text-white">
                Spent
                <svg
                  className="h-4 w-4 text-danger"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9L12 15L5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <div className="rounded-md text-center w-full border-0 bg-[#ebedf2] py-1 text-base text-[#515365] shadow-none dark:bg-black dark:text-[#bfc9d4]">
                $53.00
              </div>
            </div>
          </div>

          <div className=" p-5">
            <div className="mb-5">
              <span className="rounded-full bg-[#1b2e4b] px-4 py-1.5 text-xs text-white before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-white before:mr-2 ">
                Pending
              </span>
            </div>
            <div className="mb-5 space-y-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#515365]">Netflix</p>
                <p className="text-base">
                  <span>$</span> <span className="font-semibold">13.85</span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#515365]">BlueHost VPN</p>
                <p className="text-base">
                  <span>$</span> <span className="font-semibold">15.66</span>
                </p>
              </div>
            </div>

            <div className=" flex  justify-around px-2 text-center">
              <button
                type="button"
                className=" text-white bg-purple-500 border rounded-md px-7 py-1.5 font-semibold "
              >
                View <br /> Details
              </button>
              <button
                type="button"
                className=" text-white bg-green-500 border rounded-md px-7 py-1.5 font-semibold"
              >
                Pay Now <br /> $29.51
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-12 gap-5 mt-5">
        <div className=" col-span-12 lg:col-span-6 p-[25px] border shadow-md">
          <h5 className="mb-5 text-lg font-semibold dark:text-white-light">
            Recent Orders
          </h5>

          <div className="table-responsive w-full">
            <table className=" w-full">
              <thead>
                <tr className=" bg-gray-100">
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Invoice</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/profile-6.jpeg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Luke Ivory
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    Headphone
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#">#46894</a>
                  </td>
                  <td className=" text-normal text-gray-500">$56.07</td>
                  <td className=" text-end">
                    <span className=" border bg-green-600 rounded-md px-2 py-0.5 text-white text-sm shadow-md dark:group-hover:bg-transparent">
                      Paid
                    </span>
                  </td>
                </tr>

                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/profile-7.jpeg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Andy King
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    Nike Sport
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#">#76894</a>
                  </td>
                  <td className=" text-normal text-gray-500"> $126.04</td>
                  <td className=" text-end">
                    <span className=" border bg-purple-600 rounded-md px-2 py-0.5 text-white text-sm shadow-md dark:group-hover:bg-transparent">
                      Shiped
                    </span>
                  </td>
                </tr>

                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/profile-8.jpeg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Luke Ivory
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    Headphone
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#">#46894</a>
                  </td>
                  <td className=" text-normal text-gray-500">$56.07</td>
                  <td className=" text-end">
                    <span className=" border bg-green-600 rounded-md px-2 py-0.5 text-white text-sm shadow-md dark:group-hover:bg-transparent">
                      Paid
                    </span>
                  </td>
                </tr>

                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/profile-9.jpeg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Andy King
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    Nike Sport
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#">#76894</a>
                  </td>
                  <td className=" text-normal text-gray-500"> $126.04</td>
                  <td className=" text-end">
                    <span className=" border bg-purple-600 rounded-md px-2 py-0.5 text-white text-sm shadow-md dark:group-hover:bg-transparent">
                      Shiped
                    </span>
                  </td>
                </tr>

                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/profile-10.jpeg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Luke Ivory
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    Headphone
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#">#46894</a>
                  </td>
                  <td className=" text-normal text-gray-500">$56.07</td>
                  <td className=" text-end">
                    <span className=" border bg-green-600 rounded-md px-2 py-0.5 text-white text-sm shadow-md dark:group-hover:bg-transparent">
                      Paid
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-6 p-[25px] border shadow-md">
          <h5 className="mb-5 text-lg font-semibold dark:text-white-light">
            Recent Orders
          </h5>

          <div className="table-responsive w-full">
            <table className=" w-full">
              <thead>
                <tr className=" bg-gray-100">
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Discount</th>
                  <th className="px-4 py-3">Sold</th>
                  <th className="px-4 py-3">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/product-headphones.jpg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Headphone
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    $168.09
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#">$60.09 </a>
                  </td>
                  <td className=" text-normal text-gray-500">170</td>
                  <td className=" text-end">
                    <a className="flex items-center text-red-500" href="#">
                      <svg
                        className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          opacity="0.5"
                          d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      Google
                    </a>
                  </td>
                </tr>

                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/product-shoes.jpg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Nike Sport
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    $126.04
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#"> $47.09 </a>
                  </td>
                  <td className=" text-normal text-gray-500"> 130</td>
                  <td className=" text-end">
                    <a className="flex items-center text-green-500" href="#">
                      <svg
                        className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          opacity="0.5"
                          d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      Direct
                    </a>
                  </td>
                </tr>

                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/product-watch.jpg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Watch
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    $56.07
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#">$20.00</a>
                  </td>
                  <td className=" text-normal text-gray-500"> 66</td>
                  <td className=" text-end">
                    <a className="flex items-center text-purple-500" href="#">
                      <svg
                        className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          opacity="0.5"
                          d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      Adds
                    </a>
                  </td>
                </tr>

                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/product-laptop.jpg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Laptop
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    $110.00
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#">#76894</a>
                  </td>
                  <td className=" text-normal text-gray-500"> 35</td>
                  <td className=" text-end">
                    <a className="flex items-center text-blue-500" href="#">
                      <svg
                        className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          opacity="0.5"
                          d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      Email
                    </a>
                  </td>
                </tr>

                <tr className="group text-white-dark bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white-light/90">
                  <td className="px-3 py-2 min-w-[150px] text-black dark:text-white">
                    <div className="flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
                        src="https://html.vristo.sbthemes.com/assets/images/product-camera.jpg"
                        alt="avatar"
                      />
                      <span className="whitespace-nowrap text-normal font-semibold">
                        Camera
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-blue-500 text-normal">
                    $56.07
                  </td>
                  <td className=" text-normal text-gray-500">
                    <a href="#">$26.04 </a>
                  </td>
                  <td className=" text-normal text-gray-500"> 30</td>
                  <td className=" text-end">
                    <a className="flex items-center text-orange-500" href="#">
                      <svg
                        className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          opacity="0.5"
                          d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      Referral
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalePage;
