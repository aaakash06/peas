// "use client";
import { DialogBox } from "@/components/common/DialogBox";
import { TeacherType, useTeacher } from "../../context/ListProvider";
import TeachersList from "@/components/common/TeachersList";
// import { physicsTeachers } from "@/backend/data/data";

export default function TeachersPage() {
  // const physicsTeachers: Teacher[] = teachers.filter(
  //   (teacher) => teacher.subject == "Physics"
  // );
  // const mathTeachers = teachers.filter((teacher) => teacher.subject == "Math");
  // const chemistryTeachers = teachers.filter(
  //   (teacher) => teacher.subject == "Chemistry"
  // );
  // const englishTeachers = teachers.filter(
  //   (teacher) => teacher.subject == "English"
  // );

  // const [pt, setPt] = useState(physicsTeachers);
  // const [mt, setMt] = useState(mathTeachers);
  // const [chem, setChem] = useState(chemistryTeachers);

  // const [pe, setPe] = useState(false);
  // const [me, setMe] = useState(false);
  // const [ce, setCe] = useState(false);
  // const { teachers, setTeachers } = useTeacher();

  const subjects = ["Physics", "Math", "Chemsitry"];

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
