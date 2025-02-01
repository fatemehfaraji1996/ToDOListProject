"use client";
import React, { useState } from "react";

import DrowpDownMenu from "./DrowpDownMenu";
import AddNewTask from "./AddNewTask";
export default function ParentListtTasks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
    // <div className=" ">
    <div className={`${isOpen ? 'w[50%]' : 'w[0%]'}  bg-blue-300`}>
      {/* start hamberger menu */}
       {/* <div className="sm:hidden p-2 mr-auto bg-orange-400"> */}
       <div className={`${isOpen ? 'hidden' : 'block'}`}>
       <button 
          onClick={() => setIsOpen(!isOpen)} // تغییر وضعیت منو با کلیک روی دکمه
          className="  rounded-md focus:outline-none   "
        >
          <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
       </div>
       {/* end hamberger menu */}
       <div className={` sm:block ${isOpen ? 'block' :'hidden'} z-20  bg-gray-300 flex flex-col items-center `}>
      <div className="hidden sm:text-center sm:pt-5 sm:mb-10 ">
        <p className="font-mono ">TO-DO Liast</p>
      </div>
      {/*  */}
    <AddNewTask/>
      {/*  */}
      <div className="flex flex-col w-full sm: ">
        <div className="flex justify-center hover:bg-red-100  border-orange-700  hover:border-r-4 hover:rounded-sm  ">
          <button className=" sm:mt-6 ">
            <p className="font-mono pb-3  color-orange-600  ">Today's tasks</p>
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
    </div>
   
  );
}



