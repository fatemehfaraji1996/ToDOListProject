import React from "react";

export default function ParentListtTasks() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center pt-5">
        <p>TO-DO Liast</p>
      </div>
      {/*  */}
      <div className="flex items-center">
        <button className="bg-purple-500 p-2 w-12/12">
          <p>Add new task</p>
        </button>
      </div>
    </div>
  );
}
