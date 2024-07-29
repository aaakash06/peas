import { DialogBox } from "@/components/common/DialogBox";
import MainTable from "@/components/main/MainTable";
import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function Home() {
  const client = new PrismaClient();
  // await client.teacher.create({
  //   data: {
  //     name: "Aakash Bagale",
  //     initials: "AT",
  //     HPC: 4,
  //     subject: "Physics",
  //     topic: "wave",
  //   },
  // });

  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl font-bold my-10">
          Date: something
        </h1>
      </div>

      <div>
        <MainTable></MainTable>
      </div>
      <Button>Add</Button>
      <div className="mt-20">
        <Link href={"/teachers"}>Teachers</Link>
      </div>
    </>
  );
}
