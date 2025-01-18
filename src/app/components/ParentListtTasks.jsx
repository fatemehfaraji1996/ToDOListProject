import React from "react";

export default function ParentListtTasks() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center pt-5">
        <p className="font-mono ">TO-DO Liast</p>
      </div>
      {/*  */}
      <div className="flex items-center ">
        <button className="bg-purple-500 p-2 w-52  rounded-xl mb-10 ">
          <p>Add new task</p>
        </button>
      </div>
      <div className="flex flex-col">
        <ul>
          <li><button className=" mt-6 "><p className="font-mono ">Today's tasks</p></button></li>
          <li><button className=" mt-6"><p className="font-mono ">Important tasks</p></button></li>
          <li><button className=" mt-6"><p className="font-mono ">Complated tasks</p></button></li>
          <li><button className=" mt-6"><p className="font-mono ">Uncomplated tasks</p></button></li>
         
          
        </ul>
      </div>
    </div>
  );
}
