import React from "react";
import ParentListtTasks from "./ParentListtTasks";

export default function Contaners() {
  return (
    <div className=" flex flex-row   ">
      <div className=" w-2/12 bg-gray-50">
      <ParentListtTasks/>
      </div>
      <div className="bg-gray-100 w-8/12  ">center</div>
      <div className="w-2/12 bg-gray-50">left</div>
    </div>
  );
}
