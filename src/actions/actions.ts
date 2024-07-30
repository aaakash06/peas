"use server";

import { TeacherType } from "@/context/ListProvider";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

let num = 1;

export async function getTeachers(subject: string) {
  await client.$connect();
  const teachers = await client.teacher.findMany({
    where: {
      subject,
    },
  });
  client.$disconnect();
  return teachers;
  // return [
  //   {
  //     name: "Aakash Bagale",
  //     subject: "Physcis",
  //     topic: "Wave Optics",
  //     initials: "AT",
  //     HPC: 4,
  //   },
  //   {
  //     name: "Aman Bagale",
  //     subject: "Physics",
  //     topic: "AC",
  //     initials: "ABT",
  //     HPC: 5,
  //   },
  // ];
}
export async function getAllTeachers() {
  const teachers = await client.teacher.findMany();
  return teachers;
}
export async function addTeacher(teacher: TeacherType) {
  await client.$connect();
  await client.teacher.create({
    data: teacher,
  });
  client.$disconnect();
}
