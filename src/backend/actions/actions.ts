function canAssignTeacher(teacher, classId, date, schedules) {
  // Check if the teacher has already been assigned a period for the given class on the given day
  const classSchedule = schedules[classId] && schedules[classId][date];
  if (!classSchedule) return true;

  return !classSchedule.some(period => period.teacher === teacher);
}
function assignTeachersToClass(classId, date, teachers, schedules) {
  const periods = [];
  const subjects = ['Math', 'Physics', 'Chemistry', 'English'];
  const subjectToTeacher = {};

  // Assign mandatory subjects
  for (let subject of ['Math', 'Physics']) {
    const teacher = teachers.find(t => t.subject === subject && canAssignTeacher(t, classId, date, schedules));
    if (teacher) {
      periods.push(new Period(subject, teacher));
      teacher.periods[classId] = (teacher.periods[classId] || 0) + 1;
      subjectToTeacher[subject] = teacher;
    }
  }

  // Assign remaining subjects with constraints
  for (let subject of subjects) {
    if (subject === 'Math' || subject === 'Physics') continue;

    const teacher = teachers.find(t => t.subject === subject && canAssignTeacher(t, classId, date, schedules));
    if (teacher && !subjectToTeacher[subject]) {
      if (subject === 'Chemistry' && periods.some(p => p.subject === 'Chemistry')) continue;
      if (subject === 'English' && periods.some(p => p.subject === 'English')) continue;

      periods.push(new Period(subject, teacher));
      teacher.periods[classId] = (teacher.periods[classId] || 0) + 1;
      subjectToTeacher[subject] = teacher;
    }
  }

  // Fill remaining periods with any available teachers
  while (periods.length < 4) {
    const remainingSubjects = subjects.filter(subject => !subjectToTeacher[subject]);
    const randomSubject = remainingSubjects[Math.floor(Math.random() * remainingSubjects.length)];
    const teacher = teachers.find(t => t.subject === randomSubject && canAssignTeacher(t, classId, date, schedules));
    if (teacher) {
      periods.push(new Period(randomSubject, teacher));
      teacher.periods[classId] = (teacher.periods[classId] || 0) + 1;
      subjectToTeacher[randomSubject] = teacher;
    }
  }

  return periods;
}

function generateSchedule(classes, teachers, date) {
  const schedules = {};

  for (let classInstance of classes) {
    const periods = assignTeachersToClass(classInstance.id, date, teachers, schedules);
    classInstance.assignSchedule(date, periods);
    schedules[classInstance.id] = schedules[classInstance.id] || {};
    schedules[classInstance.id][date] = periods;
  }

  return schedules;
}


const teachers = [
  new Teacher('John Doe', 'Math'),
  new Teacher('Jane Smith', 'Physics'),
  new Teacher('Alice Johnson', 'Chemistry'),
  new Teacher('Bob Brown', 'English'),
  // Add more teachers as needed
];

const classes = [
  new Class(1),
  new Class(2),
  // Add more classes as needed
];

const date = '2024-07-12'; // Example date

const schedules = generateSchedule(classes, teachers, date);

console.log('Schedules:', schedules);
for (let classInstance of classes) {
  console.log(`Class ${classInstance.id} Schedule on ${date}:`);
  console.table(classInstance.schedule[date]);
}