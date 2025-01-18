import React from "react";

export default function ParentListtTasks() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center pt-5">
        <p>TO-DO Liast</p>
      </div>
      {/*  */}
      <div className="flex items-center ">
        <button className="bg-purple-500 p-2 w-52  rounded-2xl ">
          <p>Add new task</p>
        </button>
      </div>
      <div className="flex flex-col">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
