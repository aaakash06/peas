import { Class, Teacher } from "../classes/classes";

export const teachers: Teacher[] = [
  new Teacher("John Doe", "Math", "Trignometry", 4),
  new Teacher("Jane Smith", "Physics", "Wave Optics", 5),
  new Teacher("Alice Johnson", "Chemistry", "Hydro carbon", 6),
  new Teacher("Bob Brown", "English", "speech", 3),
  new Teacher("Mathew", "Physics", "Heat", 3),
];
export const classes: Class[] = [new Class("A1"), new Class("A2")];

const date = "2024-07-12"; // Example date

// const schedules = generateSchedule(classes, teachers, date);

// for (let classInstance of classes) {
//   console.log(`Class ${classInstance.id} Schedule on ${date}:`);
//   console.table(classInstance.schedule[date]);
// }
