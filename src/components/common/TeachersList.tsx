// "use server";
import { getTeachers } from "@/actions/actions";
import { TeacherType } from "@/context/ListProvider";
import React from "react";

const TeachersList = async ({ subject }: { subject: string }) => {
  const teachers = await getTeachers(subject);

  return (
    <div>
      <ul>
        {teachers.map((t: TeacherType) => (
          <li key={t.name} className="text-xl font-bold">
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersList;
