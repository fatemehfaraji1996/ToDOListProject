import React from "react";
import AddNewTask from "./AddNewTask";
import DateLists from "./DateListe";

export default function ContanerCenter() {
  return (
    <div className=" w-full  ">
      <div className=" parenttopbox  flex">
        {/* serch box */}
        <div className="">

            <input type="text" />
        </div>

        {/* date box */}
        <div>
            <DateLists/>
        </div>

        {/* new task */}
        <AddNewTask></AddNewTask>
      </div>
    </div>
  );
}
