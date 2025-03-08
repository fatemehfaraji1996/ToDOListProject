import React from "react";
// import ParentListtTasks from "./ParentListtTasks";
import ContanerCenter from "./ContanerCenter";
// import Po from "./Po";
import Navbar from "./Navbar";

export default function Contaners() {
  return (
    <div className=" flex flex-row  ">
      <div className=" bg-pink-500 sm:bg-gray-50 ">
        {/* <ParentListtTasks /> */}
        <Navbar/>
      </div>
        

      <div className="bg-gray-100  w-[90%] ">
        <ContanerCenter />
      </div>

      <div className=" bg-gray-900 sm:bg-gray-50 w-[5%]">left</div>
    </div>

    // <Po></Po>
  );
}
