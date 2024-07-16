"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Selection from "@/components/common/select";
import TableComp from "@/components/common/table";
import { teachers } from "@/backend/data/data";
import { Teacher } from "@/backend/classes/classes";
import { useState } from "react";

export default function TeachersPage() {
  const physicsTeachers: Teacher[] = teachers.filter(
    (teacher) => teacher.subject == "Physics"
  );
  const mathTeachers = teachers.filter((teacher) => teacher.subject == "Math");
  const chemistryTeachers = teachers.filter(
    (teacher) => teacher.subject == "Chemistry"
  );
  const englishTeachers = teachers.filter(
    (teacher) => teacher.subject == "English"
  );

  const [pt, setPt] = useState(physicsTeachers);
  const [mt, setMt] = useState(mathTeachers);
  const [chem, setChem] = useState(chemistryTeachers);

  const [pe, setPe] = useState(false);
  const [me, setMe] = useState(false);
  const [ce, setCe] = useState(false);

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-3xl my-20">Teachers</h1>
      </div>

      <div className="flex flex-col gap-20">
        <div className=" flex flex-col gap-10 px-20">
          <div className="flex justify-between ">
            <h3 className="text-2xl px-3 my-2">Physics</h3>
            <button
              onClick={() => {
                setPe(true);
              }}
              className="bg-sky-400 px-10 h-7 rounded-2xl text-white   flex items-center"
            >
              Add
            </button>
          </div>
          {pe && (
            <div className="absolute z-10 w-full h-fullflex justify-center items-center">
              <div className="w-[500px] h-[500px] bg-yellow-200"></div>
            </div>
          )}
          <div className="physicsModal "></div>
          <div>
            <ul>
              {physicsTeachers.map((t) => (
                <li key={t.name} className="text-xl font-bold">
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
