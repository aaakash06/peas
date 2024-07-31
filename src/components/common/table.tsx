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

export default function TableComp({
  rows,
  teachers,
}: {
  rows: string[];
  teachers: TeacherDBType[][];
}) {
  const refreash = useCallback(() => {
    setRefresh((r) => !r);
  }, []);
  const fillArray = useCallback(() => {
    let array = [];
    for (let row = 0; row < rows.length; row++) {
      array.push(["TEACHER", "TEACHER", "TEACHER", "TEACHER"]);
    }
    return array;
  }, []);

  const valuesArray = useRef<string[][]>(fillArray());

  const [refresh, setRefresh] = useState(false);
  return (
    <div className="px-20 my-20">
      <Table>
        <TableCaption className="mt-20">
          A list of your recent invoices.
        </TableCaption>
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
                      valuesArray={valuesArray.current}
                      refreash={refreash}
                    ></Selection>
                  </TableCell>
                  <TableCell>
                    <Selection
                      row={idx}
                      col={1}
                      teachers={teachers}
                      valuesArray={valuesArray.current}
                      refreash={refreash}
                    ></Selection>
                  </TableCell>
                  <TableCell>
                    <Selection
                      row={idx}
                      col={2}
                      teachers={teachers}
                      valuesArray={valuesArray.current}
                      refreash={refreash}
                    ></Selection>
                  </TableCell>
                  <TableCell>
                    <Selection
                      row={idx}
                      col={3}
                      teachers={teachers}
                      valuesArray={valuesArray.current}
                      refreash={refreash}
                    ></Selection>
                  </TableCell>
                </TableRow>
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
