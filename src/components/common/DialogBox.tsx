"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";
import { LegacyRef, useRef } from "react";

import { addTeacher } from "@/actions/actions";

export function DialogBox({ subject }: { subject: string }) {
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const initialsRef = useRef<HTMLInputElement>(null);
  const hpcRef = useRef<HTMLInputElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Teacher</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Teacher</DialogTitle>
          <DialogDescription>
            Add a teacher in {subject} category.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Aakash Bagale"
              defaultValue=""
              className="col-span-3"
              ref={nameRef}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="topic" className="text-right">
              Topic
            </Label>
            <Input
              id="topic"
              placeholder="Wave Optics"
              defaultValue=""
              className="col-span-3"
              ref={topicRef}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="initials" className="text-right">
              Initials
            </Label>
            <Input
              id="intials"
              placeholder="AT"
              defaultValue=""
              className="col-span-3"
              ref={initialsRef}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="HPC" className="text-right">
              HPC
            </Label>
            <Input
              type="number"
              id="HPC"
              placeholder="4"
              defaultValue=""
              className="col-span-3"
              ref={hpcRef}
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="picture" className="text-right">
              Pic
            </Label>
            <Input
              type="file"
              id="picture"
              className="col-span-3"
              ref={picRef}
            />
          </div> */}
        </div>
        <DialogFooter>
          <Button
            onClick={async (e) => {
              const name = nameRef.current?.value!;
              const topic = topicRef.current?.value!;
              const initials = initialsRef.current?.value!;
              const hpc = hpcRef.current?.value!;
              // const teacher = new Teacher(
              //   name!,
              //   subject,
              //   topic!,
              //   initials!,
              //   +hpc!
              // );
              // setTeachers((t: TeacherType[]) => [
              //   ...t,
              //   {
              //     name,
              //     subject: "Physics",
              //     topic,
              //     initials,
              //     HPC: hpc,
              //   },
              // ]);
              const newTeacher = {
                name,
                subject,
                topic,
                initials,
                HPC: +hpc,
              };
              await addTeacher(newTeacher);
              router.push("/teachers");
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
