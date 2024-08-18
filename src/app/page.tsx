import MainTable from "@/components/main/MainTable";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="">
        <h1 className="text-center font-spaceGrotesk text-3xl font-bold my-10">
          Date: {new Date().toISOString().slice(0, 10)}
        </h1>
      </div>

      <div className="font-poppins">
        <MainTable></MainTable>
      </div>

      <div className="mt-20 flex gap-20 justify-center">
        <Link href={"/teachers"}>
          {" "}
          <Button>Teachers</Button>
        </Link>
      </div>
    </>
  );
}
