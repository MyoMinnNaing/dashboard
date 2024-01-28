import React from "react";

const TodoList = ({
  task: { id, title, assignee, tag, priority, description },
}) => {
  return (
    <tr className="group cursor-pointer border  rounded-md  ">
      <td className=" px-3 py-2 border-r ">
        <input
          type="checkbox"
          value=""
          className="w-4 h-4 cursor-pointer text-green-600 bg-gray-100 border-gray-300 rounded  focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </td>
      <td className=" border-r px-3 py-2 ">
        <div>
          <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap ">
            {title}
          </div>
          <div className=" text-light-gray text-sm  overflow-hidden line-clamp-1 ">
            {description}
          </div>
        </div>
      </td>
      <td className="border-r px-3 py-2">
        <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
          <div className="dropdown">
            <button type="button" className="align-middle">
              {priority === "low" && (
                <span
                  className={` px-3 py-1 border border-yellow-500 text-[14px] text-yellow-500 rounded-full capitalize hover:bg-yellow-500 hover:text-white duration-200 `}
                >
                  {priority}
                </span>
              )}

              {priority === "medium" && (
                <span
                  className={` px-3 py-1 border border-blue-500 text-[14px] text-blue-500 rounded-full capitalize hover:bg-blue-500 hover:text-white duration-200 `}
                >
                  {priority}
                </span>
              )}

              {priority === "high" && (
                <span
                  className={` px-3 py-1 border border-red-500 text-[14px] text-red-500 rounded-full capitalize hover:bg-red-500 hover:text-white duration-200 `}
                >
                  {priority}
                </span>
              )}
            </button>
          </div>
          <div className="dropdown">
            <button type="button" className="align-middle">
              {tag === "team" && (
                <span className="px-3 py-1 border border-green-500 text-[14px] text-green-500 rounded-full capitalize  hover:bg-green-500 hover:text-white duration-200  ">
                  {tag}
                </span>
              )}

              {tag === "update" && (
                <span className="px-3 py-1 border border-blue-500 text-[14px] text-blue-500 rounded-full capitalize  hover:bg-blue-500 hover:text-white duration-200  ">
                  {tag}
                </span>
              )}
            </button>
          </div>
        </div>
      </td>
      <td className=" px-3 py-2 border-r">
        <p className="whitespace-nowrap text-light-gray text-normal font-medium ">
          Sept 12
        </p>
      </td>
      <td className=" px-3 py-2 border-r ">
        <div className="flex gap-3 items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
          <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
            <div>
              <img
                src="https://react.vristo.sbthemes.com/assets/images/profile-25.jpeg"
                className="h-8 w-8 rounded-full object-cover"
                alt="avatar"
              />
            </div>
          </div>
          <div className="dropdown">
            <button type="button" className="align-middle">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-90 opacity-70"
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
            </button>
            <div
              className="z-50"
              // style="position: absolute; left: 0px; top: 0px;"
            ></div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TodoList;
