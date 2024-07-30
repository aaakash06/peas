import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TeacherType } from "@/context/ListProvider";

export default async function Selection({
  options,
}: {
  options: TeacherType[][];
}) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Teacher" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Physics</SelectLabel>
          {options[0]?.map((pt) => (
            <SelectItem key={pt.name} value={pt.name}>
              {pt.name}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Math</SelectLabel>
          {options[2]?.map((pt) => (
            <SelectItem key={pt.name} value={pt.name}>
              {pt.name}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Chemistry</SelectLabel>
          {options[1]?.map((pt) => (
            <SelectItem key={pt.name} value={pt.name}>
              {pt.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
