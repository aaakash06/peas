// "use client";
// import React, { useState } from "react";
import { getTeachers } from "@/actions/actions";
import TableComp from "../common/table";

const MainTable = async () => {
  const physicsTeachers = await getTeachers("Physics");
  const chemsitryTeachers = await getTeachers("Chemistry");
  const mathTeachers = await getTeachers("Math");
  const teachers = [physicsTeachers, chemsitryTeachers, mathTeachers];
  // const [classes, setClasses] = useState(["BS101", "BS102", "BS103", "BS104"]);
  return (
    <TableComp
      teachers={teachers}
      rows={["BS101", "BS102", "BS103", "BS104"]}
    ></TableComp>
  );
};

export default MainTable;
