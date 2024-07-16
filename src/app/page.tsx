import { Button } from "@/components/ui/button";
import Image from "next/image";
import Selection from "@/components/common/select";
import TableComp from "@/components/common/table";

export default function Home() {
  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl font-bold my-10">
          Date: something
        </h1>
      </div>

      <div>
        <TableComp rows={["BS101", "BS102", "BS103", "BS104"]}></TableComp>
      </div>
    </>
  );
}
