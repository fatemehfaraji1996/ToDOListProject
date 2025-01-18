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
      </div>
    </div>
  );
}
