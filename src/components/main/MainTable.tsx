// "use client";
// import React, { useState } from "react";
import { getTeachers } from "@/actions/actions";
import TableComp from "../common/table";
import { useClasses } from "@/context/ListProvider";

const MainTable = async () => {
  const physicsTeachers = await getTeachers("Physics");
  const chemsitryTeachers = await getTeachers("Chemistry");
  const mathTeachers = await getTeachers("Math");
  const teachers = [physicsTeachers, chemsitryTeachers, mathTeachers];

  return <TableComp teachers={teachers}></TableComp>;
};

export default MainTable;
