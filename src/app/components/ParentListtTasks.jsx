'use client'
import React from "react";
import { useState } from 'react';
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
        <div className="hover:bg-red-100 w-full   hover:border-r-4 border-blue-600 hover:rounded-sm ">
          <button className=" mt-6 hover:bg-blue-100 ">
            <p className="font-mono pb-3 pl-2 ">Today's tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full   hover:border-r-4 border-purple-600 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2 bg-purple-300">Important tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full   hover:border-r-4 border-red-500 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2 bg-red-500">Complated tasks</p>
          </button>
        </div>

        <div className="hover:bg-red-100 w-full   hover:border-r-4 border-red-500 hover:rounded-sm ">
          <button className=" mt-6">
            <p className="font-mono pb-3 pl-2 bg-green-300 ">Uncomplated tasks</p>
          </button>
        </div>



       




{/* drop down menu */}
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Options
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707 1.707l-3 3a1 1 0 01-1.414 0l-3-3A1 1 0 016 3h8z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
         
              <p>Todos</p>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 2
            </a>
       
          </div>
        </div>
      )}
    </div>










      </div>
    </div>
  );
}
