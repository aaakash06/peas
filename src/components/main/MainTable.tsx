"use client";
import React, { useState } from "react";
import TableComp from "../common/table";

const MainTable = () => {
  const [classes, setClasses] = useState(["BS101", "BS102", "BS103", "BS104"]);
  return <TableComp rows={classes}></TableComp>;
};

export default MainTable;
