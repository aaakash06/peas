"use server";

import { TeacherType } from "@/context/ListProvider";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function getTeachers(subject: string) {
  await client.$connect();
  const teachers = await client.teacher.findMany({
    where: {
      subject,
    },
  });
  client.$disconnect();
  return teachers;
}
export async function getAllTeachers() {
  await client.$connect();
  const teachers = await client.teacher.findMany();
  client.$disconnect();
  return teachers;
}
export async function addTeacher(teacher: TeacherType) {
  await client.$connect();
  await client.teacher.create({
    data: teacher,
  });
  client.$disconnect();
}
