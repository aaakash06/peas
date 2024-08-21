"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Selection from "./select";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { TeacherDBType } from "@/types";
import {
  useClasses,
  useTeachersArray,
  useValuesArray,
} from "@/context/ListProvider";
import { Button } from "../ui/button";

function arrayToCSV(twoDiArray: string[][]) {
  let csvRows = [];
  for (let i = 0; i < twoDiArray.length; ++i) {
    for (let j = 0; j < twoDiArray[i].length; ++j) {
      twoDiArray[i][j] = '"' + twoDiArray[i][j] + '"'; // Handle elements that contain commas
    }
    csvRows.push(twoDiArray[i].join(","));
  }

  let csvString = csvRows.join("\r\n");
  let a = document.createElement("a");
  a.href = "data:attachment/csv," + csvString;
  a.target = "_blank";
  a.download = "myFile.csv";

  document.body.appendChild(a);
  a.click();
  // Optional: Remove <a> from <body> after done
}

export default function TableComp({
  teachers,
}: {
  teachers: TeacherDBType[][];
}) {
  const { classes: rows }: { classes: string[] } = useClasses();
  const { transposeArray } = useTeachersArray();
  const handleCSV = useCallback(() => {
    // console.log(transposeArray());
    const teachersArray = transposeArray();
    arrayToCSV(teachersArray);
  }, []);

  return (
    <>
      <div className="px-20 my-20">
        <Table>
          {/* <TableCaption className="mt-20">
          A list of your recent invoices.
        </TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Class</TableHead>
              <TableHead className="max-w-[300px]">Period1</TableHead>
              <TableHead className="max-w-[300px]">Period2</TableHead>
              <TableHead className="max-w-[300px]">Period3</TableHead>
              <TableHead className="">Period4</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {rows?.map((row, idx) => {
              return (
                <Fragment key={row}>
                  <TableRow>
                    <TableCell className="font-medium">{row}</TableCell>
                    <TableCell className="">
                      <Selection
                        row={idx}
                        col={0}
                        teachers={teachers}
                      ></Selection>
                    </TableCell>
                    <TableCell>
                      <Selection
                        row={idx}
                        col={1}
                        teachers={teachers}
                      ></Selection>
                    </TableCell>
                    <TableCell>
                      <Selection
                        row={idx}
                        col={2}
                        teachers={teachers}
                      ></Selection>
                    </TableCell>
                    <TableCell>
                      <Selection
                        row={idx}
                        col={3}
                        teachers={teachers}
                      ></Selection>
                    </TableCell>
                  </TableRow>
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center">
        <Button onClick={handleCSV}>Download CSV</Button>
      </div>
    </>
  );
}
