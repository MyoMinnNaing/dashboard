import React, { useEffect, useState } from "react";

const ThemeMode = () => {
  const [showOptions, setShowOption] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const rootElement = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme :dark)");

  const options = [
    {
      mode: "light",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" w-6 h-6 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ),
      css: {
        position: "absolute",
        top: "0.25rem",
        right: 0,
        left: 0,
        margin: "auto",
      },
    },

    {
      mode: "dark",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      ),
      css: {
        position: "absolute",
        left: "0.25rem",
        top: 0,
        bottom: 0,
        margin: "auto",
      },
    },

    {
      mode: "system",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
      css: {
        position: "absolute",
        bottom: "0.25rem",
        right: 0,
        left: 0,
        margin: "auto",
      },
    },
  ];

  const onWindowWatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  };

  onWindowWatch();

  const toggleOptions = () => {
    setShowOption(!showOptions);
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        rootElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        rootElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowWatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        rootElement.classList.add("dark");
      } else {
        rootElement.classList.remove("dark");
      }
    }
  });
  return (
    <div className="parent relative ">
      <div
        id="option-circle"
        className={` relative  w-48 h-48 bg-purple-400 rounded-full duration-300 ${
          showOptions ? " scale-100 rotate-0  " : " scale-0 -rotate-90 "
        }`}
      >
        {options.map((option) => {
          return (
            <div
              onClick={() => setTheme(option.mode)}
              key={option.mode}
              style={option.css}
              className={`w-11 h-11  rounded-full flex justify-center items-center cursor-pointer duration-300 hover:bg-slate-500 hover:text-white  ${
                theme === option.mode
                  ? " bg-slate-500 text-white"
                  : " bg-white "
              }`}
            >
              {option.icon}
            </div>
          );
        })}
      </div>
      <button
        onClick={toggleOptions}
        className=" w-14 h-14  flex items-center justify-center absolute top-0 bottom-0 m-auto left-0 right-0  bg-orange-400 hover:bg-orange-600 duration-300  rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          className={`w-5 h-5  duration-300 ${
            !showOptions ? " rotate-45 " : "rotate-0"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
            clipRule="evenodd"
          />
          <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
          <path
            fillRule="evenodd"
            d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ThemeMode;
