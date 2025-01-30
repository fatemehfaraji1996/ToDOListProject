import React from "react";
import ParentListtTasks from "./ParentListtTasks";
import ContanerCenter from "./ContanerCenter";

export default function Contaners() {
  return (
    <div className=" flex flex-row   ">
      <div className=" w-2/12 bg-gray-50">
      <ParentListtTasks/>
      </div>

      {/* center */}
      <div className="bg-gray-200 w-8/12  ">
      <ContanerCenter/>
      </div>

      {/* end senter */}
      <div className="w-2/12 bg-gray-50">left</div>
    </div>
  );
}
