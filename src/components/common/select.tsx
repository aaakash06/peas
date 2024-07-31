"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TeacherDBType } from "@/types";

export default function Selection({
  row,
  col,
  teachers,
  refreash,
  valuesArray,
}: {
  row: number;
  col: number;
  teachers: TeacherDBType[][];
  refreash: () => void;
  valuesArray: string[][];
}) {
  // console.log(valuesArray.length);
  // if (valuesArray.length > 0 && col == 0) {
  //   console.log(valuesArray[0].includes("Aakash Bagale Thapa"));
  // } else {

  // }

  return (
    <Select
      onValueChange={(value: string) => {
        // const newOptions1 = options[0].filter((option) => option.name != value);
        // const newOptions2 = options[2].filter((option) => option.name != value);
        // const newOptions3 = options[1].filter((option) => option.name != value);
        // const newOptions = [newOptions1, newOptions2, newOptions3];
        // setOptions(newOptions);
        valuesArray[col][row] = value;
        refreash();
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Teacher" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Physics</SelectLabel>
          {teachers[0]?.map((pt) => {
            if (
              valuesArray[col].includes(pt.name) &&
              valuesArray[col][row] != pt.name
            ) {
              return;
            }
            return (
              <SelectItem key={pt.name} value={pt.name}>
                {pt.name}
              </SelectItem>
            );
          })}
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>Chemistry</SelectLabel>
          {teachers[1]?.map((pt) => {
            if (
              valuesArray[col].includes(pt.name) &&
              valuesArray[col][row] != pt.name
            ) {
              return;
            }
            return (
              <SelectItem key={pt.name} value={pt.name}>
                {pt.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Math</SelectLabel>
          {teachers[2]?.map((pt) => {
            if (
              valuesArray[col].includes(pt.name) &&
              valuesArray[col][row] != pt.name
            ) {
              return;
            }
            return (
              <SelectItem key={pt.name} value={pt.name}>
                {pt.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
