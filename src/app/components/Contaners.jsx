import React from "react";
import ParentListtTasks from "./ParentListtTasks";
import ContanerCenter from "./ContanerCenter";

export default function Contaners() {
  return (
    <div className=" flex flex-row  ">

      <div className=" bg-gray-100 sm:bg-gray-50 w-[30%]">
      <ParentListtTasks/>
      </div>

   

      <div className="bg-gray-100  w-[90%] ">
      <ContanerCenter/>
      </div>

     
      <div className=" bg-gray-100 sm:bg-gray-50 w-[5%]">left</div>
    </div>
  );
}
