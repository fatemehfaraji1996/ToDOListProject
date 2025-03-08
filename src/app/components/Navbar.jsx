"use client";
// import React from "react";
import React, { useState } from "react";
import DrowpDownMenu from "./DrowpDownMenu";
import AddNewTask from "./AddNewTask";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen , setMenuOpen] = useState(false) 
  const handlerNave = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div
      className={` sm:block z-20  bg-green-200 p-3 flex flex-col items-center w-[] `}
    >

<div onClick={handlerNave} className="md:hidden curesor-pointer pr-24">
        <AiOutlineMenu size={25} />
      </div>

      <div className="hidden sm:block sm:text-center sm:pt-5 sm:mb-10 ">
        <p className="font-mono ">TO-DO Liast</p>
      </div>

      <AddNewTask />

      <div className="flex flex-col w-full sm: ">
        <div className=" hover:bg-red-100  border-orange-700  hover:border-r-4 hover:rounded-sm  ">
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

        <DrowpDownMenu />
      </div>
      
    </div>
  );
}
