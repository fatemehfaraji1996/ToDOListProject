"use client";
import React, { useState } from "react";

import DrowpDownMenu from "./DrowpDownMenu";
import AddNewTask from "./AddNewTask";
export default function ParentListtTasks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
    <div className="flex flex-col items-center ">
       <div className="sm:hidden  flex justify-end  ">
       <button 
          onClick={() => setIsOpen(!isOpen)} // تغییر وضعیت منو با کلیک روی دکمه
          className="p-2 rounded-md focus:outline-none   "
        >
          <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
       </div>
       <div className={`hidden sm:block ${isOpen ? 'block' :'hidden'}`}>
       {/* <div className='parentlist hidden sm:block '> */}
      <div className="text-center pt-5 mb-10 ">
        <p className="font-mono ">TO-DO Liast</p>
      </div>
      {/*  */}
    <AddNewTask/>
      {/*  */}
      <div className="flex flex-col w-full sm: bg-yellow-300">
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
    </div>
   
  );
}

