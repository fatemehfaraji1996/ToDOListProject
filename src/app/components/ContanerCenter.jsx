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
        <div className="ml-auto">
         
          <AddNewTask></AddNewTask>
        </div>
      </div>
    </div>
  );
}
