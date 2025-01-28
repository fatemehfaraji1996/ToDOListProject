import React from "react";

export default function ParentListtTasks() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center pt-5 mb-10">
        <p className="font-mono ">TO-DO Liast</p>
      </div>
      {/*  */}
      <div className="flex items-center ">
        <button className="bg-purple-500 p-2 w-52  rounded-xl mb-10 ">
          <p>Add new task</p>
        </button>
      </div>
      {/*  */}
      <div className="flex flex-col w-full">
        <div className="hover:bg-red-100 w-full   hover:border-r-4 border-red-500 hover:rounded-sm ">
          <button className=" mt-6 hover:bg-red-100 ">
            <p className="font-mono pb-3 pl-2 ">Today's tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full   hover:border-r-4 border-red-500 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2">Important tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full   hover:border-r-4 border-red-500 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2">Complated tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full   hover:border-r-4 border-red-500 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2">Uncomplated tasks</p>
          </button>
        </div>

        {/* <div className="hover:bg-red-100 w-full   hover:border-r-4 border-red-500 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2">Directoreis</p>
          </button>
        </div> */}

        <button
          id="dropdownDelayButton"
          data-dropdown-toggle="dropdownDelay"
          data-dropdown-delay="500"
          data-dropdown-trigger="hover"
          
          className="    focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Directoreis{" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdownDelay"
          className="z-10 hidden bg-white divide-y divide-gray-900 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-100 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
