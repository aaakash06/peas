// "use client";
import { DialogBox } from "@/components/common/DialogBox";

import TeachersList from "@/components/common/TeachersList";
// import { physicsTeachers } from "@/backend/data/data";

export default function TeachersPage() {
  const subjects = ["Physics", "Math", "Chemistry"];

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-3xl my-20">Teachers</h1>
      </div>

      <div className="flex flex-col gap-20">
        {subjects.map((subject) => {
          return (
            <div className=" flex flex-col gap-10 px-20" key={subject}>
              <div className="flex justify-between ">
                <h3 className="text-2xl px-3 my-2">{subject}</h3>

                <DialogBox subject={subject}></DialogBox>
              </div>

              <TeachersList subject={subject}></TeachersList>
            </div>
          );
        })}
      </div>
    </>
  );
}
