"use server";

import { TeacherType } from "@/context/ListProvider";
import { PrismaClient } from "@prisma/client";

export async function getTeachers(subject: string) {
  const client = new PrismaClient();
  const teachers = await client.teacher.findMany({
    where: {
      subject,
    },
  });
  return teachers;
}
export async function getAllTeachers() {
  const client = new PrismaClient();
  const teachers = await client.teacher.findMany();
  return teachers;
}
export async function addTeacher(teacher: TeacherType) {
  const client = new PrismaClient();
  await client.teacher.create({
    data: teacher,
  });
}
