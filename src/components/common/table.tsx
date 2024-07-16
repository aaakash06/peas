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
import { Fragment } from "react";

const teachers = ["T1", "T2", "T3", "T4", "T5", "T6", "T7"];

export default function TableComp({ rows }: { rows: string[] }) {
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
          {rows?.map((row) => {
            return (
              <Fragment key={row}>
                <TableRow>
                  <TableCell className="font-medium">{row}</TableCell>
                  <TableCell className="">
                    <Selection options={teachers}></Selection>
                  </TableCell>
                  <TableCell>
                    <Selection options={teachers}></Selection>
                  </TableCell>
                  <TableCell>
                    <Selection options={teachers}></Selection>
                  </TableCell>
                  <TableCell>
                    <Selection options={teachers}></Selection>
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
