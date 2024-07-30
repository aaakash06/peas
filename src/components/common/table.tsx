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
import { getAllTeachers, getTeachers } from "@/actions/actions";

export default async function TableComp({ rows }: { rows: string[] }) {
  const physicsTeachers = await getTeachers("Physics");
  const chemsitryTeachers = await getTeachers("Chemistry");
  const mathTeachers = await getTeachers("Math");
  const teachers = [physicsTeachers, chemsitryTeachers, mathTeachers];
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
