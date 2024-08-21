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
import { useValuesArray } from "@/context/ListProvider";
import { TeacherDBType } from "@/types";

export default function Selection({
  row,
  col,
  teachers,
}: {
  row: number;
  col: number;
  teachers: TeacherDBType[][];
}) {
  const { valuesArray, setValuesArray } = useValuesArray();

  return (
    <Select
      // value={valuesArray[col][row] }
      onValueChange={(value: string) => {
        const newValuesArray = [...valuesArray];
        newValuesArray[col][row] = value;
        setValuesArray(newValuesArray);
        // console.log(valuesArray);
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
            )
              return;
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
            )
              return;
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
              valuesArray[col][row] != pt.name &&
              valuesArray[col].includes(pt.name)
            )
              return;
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
