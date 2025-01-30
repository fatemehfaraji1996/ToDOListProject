"use client";
import React from "react";

import DrowpDownMenu from "./DrowpDownMenu";
import AddNewTask from "./AddNewTask";
export default function ParentListtTasks() {
  

  return (
    <div className="flex flex-col items-center">
      <div className="text-center pt-5 mb-10">
        <p className="font-mono ">TO-DO Liast</p>
      </div>
      {/*  */}
    <AddNewTask/>
      {/*  */}
      <div className="flex flex-col w-full">
        <div className="hover:bg-red-100 w-full border-orange-700  hover:border-r-4 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2 color-orange-600  ">Today's tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full border-orange-700 hover:border-r-4  hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2">Important tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full border-orange-700  hover:border-r-4  hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2 ">Complated tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full border-orange-700  hover:border-r-4 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2">Uncomplated tasks</p>
          </button>
        </div>

        {/* drop down menu */}
    <DrowpDownMenu/>
      </div>
    </div>
  );
}
