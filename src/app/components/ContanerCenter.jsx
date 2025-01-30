import React from "react";
import AddNewTask from "./AddNewTask";
import DateLists from "./DateListe";

export default function ContanerCenter() {
  return (
    <div className=" w-full  ">
      <div className=" parenttopbox  flex  mt-5 m-4">
        {/* serch box */}
        <div className=" relative  mr-auto">
          <input
            className="p-3 w-52  rounded-lg border-gray-300 focus:outline-none "
            type="text"
            placeholder="search task"
          />
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute top-5  right-2"
            // ariaHidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        {/* date box */}
        <div className="mr-auto ml-auto">
          <DateLists />
        </div>
        {/* new task */}
        <div className="ml-auto relative ">
          <AddNewTask></AddNewTask>
          <svg
            className="w-6 h-6 text-purple-800 dark:text-white absolute top-2 right-50"
            // ariaHidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 14 20"
          >
            <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
