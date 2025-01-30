"use client";
import React from "react";
import { useState } from "react";
export default function ParentListtTasks() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="hover:bg-red-100 w-full border-orange-700  hover:border-r-4 hover:rounded-sm ">
          <button className=" mt-6 hover:bg-blue-100 ">
            <p className="font-mono pb-3 pl-2 orange-600 ">Today's tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full bg-pink-500  hover:border-r-4  hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2">Important tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full   hover:border-r-4  hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2 ">Complated tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full   hover:border-r-4 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2">
              Uncomplated tasks
            </p>
          </button>
        </div>

        {/* drop down menu */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex  w-full p-3  font-mono  "
          >
            <svg
              className="  h-5 w-5 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              width={16}
              height={16}
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707 1.707l-3 3a1 1 0 01-1.414 0l-3-3A1 1 0 016 3h8z"
                clipRule="evenodd"
              />
            </svg>
         
            <p className="ml-0 ">Directories</p>
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 ">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 ">
                  <p className=" font-mono">Main</p>
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 ">
                  <div className="border-2 border-dashed rounded-md w-24"> <p className="font-mono p-4"> + New</p></div>
                 
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
