import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Selection({ options }: { options: string[] }) {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Teacher" />
        </SelectTrigger>
        <SelectContent className="">
          {options?.map((option) => (
            <SelectItem value="option">{option}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
