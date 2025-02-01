import React from "react";
import ParentListtTasks from "./ParentListtTasks";
import ContanerCenter from "./ContanerCenter";

export default function Contaners() {
  return (
    <div className=" flex flex-row   ">
      <div className=" bg-gray-100 sm:bg-gray-50">
      <ParentListtTasks/>
      </div>

      {/* center */}
      <div className="bg-gray-100 w-full  ">
      <ContanerCenter/>
      </div>

      {/* end senter */}
      <div className=" bg-gray-100 sm:bg-gray-50">left</div>
    </div>
  );
}
