"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface TeacherType {
  name: string;
  subject: string;
  topic: string;
  initials: string;
  HPC: number;
}

const Context = createContext<any | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [teachers, setTeachers] = useState<TeacherType[] | undefined>([]);
  const [classes, setClasses] = useState(["BS101", "BS102", "BS103", "BS104"]);
  useEffect(() => {
    setTeachers([
      {
        name: "Aakash Bagale",
        subject: "Physcis",
        topic: "Wave Optics",
        initials: "AT",
        HPC: 4,
      },
      {
        name: "Aman Bagale",
        subject: "Physics",
        topic: "AC",
        initials: "ABT",
        HPC: 5,
      },
    ]);
  }, []);

  return (
    <Context.Provider value={{ teachers, setTeachers, classes, setClasses }}>
      {children}
    </Context.Provider>
  );
}

export function useTeacher() {
  const { teachers, setTeachers } = useContext(Context);
  return { teachers, setTeachers };
}
export function useClasses() {
  const { classes, setClasses } = useContext(Context);
  return { classes, setClasses };
}
