// import {
//   chemistryTeachers,
//   mathTeachers,
//   physicsTeachers,
// } from "@/backend/data/data";
// "use server";
import {
  physicsTeachers,
  mathTeachers,
  chemistryTeachers,
} from "@/backend/data/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default function Selection({ options }: { options?: string[] }) {
  // const physicsTeachers = await client.teacher.findMany({
  //   where: {
  //     subject: "Physics",
  //   },
  // });
  // const chemistryTeachers = await client.teacher.findMany({
  //   where: {
  //     subject: "Chemistry",
  //   },
  // });
  // const mathTeachers = await client.teacher.findMany({
  //   where: {
  //     subject: "Math",
  //   },
  // });

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Teacher" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Physics</SelectLabel>
          {physicsTeachers?.map((pt) => (
            <SelectItem key={pt.name} value={pt.name}>
              {pt.name}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Math</SelectLabel>
          {mathTeachers?.map((pt) => (
            <SelectItem key={pt.name} value={pt.name}>
              {pt.name}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Chemistry</SelectLabel>
          {chemistryTeachers?.map((pt) => (
            <SelectItem key={pt.name} value={pt.name}>
              {pt.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
