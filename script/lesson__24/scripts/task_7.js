"use strict";

//Задача 7.  Дано масив студентів (піб, курс, факультет).
//  Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

function getNumberDifferentFaculties(studentsList) {
    const listFaculties = studentsList.map((el) => el.faculty);
    const resSet = new Set(listFaculties);
    return resSet.size;
}

function getNumberStudentsEachCourse(studentsList) {
    const resMap = new Map();
    for (const student of studentsList) {
        if (resMap.has(student.course))
            resMap.set(student.course, resMap.get(student.course) + 1);
        else resMap.set(student.course, 1);
    }
    return resMap;
}

const studentsList = [
    { name: "John Smith", course: 1, faculty: "CS" }, // Computer Science
    { name: "Sarah Johnson", course: 2, faculty: "CS" },
    { name: "Michael Brown", course: 3, faculty: "CS" },
    { name: "Emily Wilson", course: 4, faculty: "CS" },

    { name: "David Garcia", course: 1, faculty: "BA" }, // Business Administration
    { name: "Jessica Martinez", course: 2, faculty: "BA" },
    { name: "James Taylor", course: 3, faculty: "BA" },
    { name: "Olivia Rodriguez", course: 4, faculty: "BA" },

    { name: "Robert Anderson", course: 1, faculty: "EN" }, // Engineering
    { name: "Sophia Davis", course: 2, faculty: "EN" }
];

const countFaculties = getNumberDifferentFaculties(studentsList);
document.write(`Kількість різних факультетів: ${countFaculties} шт.`);
console.log(countFaculties);

const numberStudentsCourse = getNumberStudentsEachCourse(studentsList);
console.log(numberStudentsCourse);
numberStudentsCourse.forEach((num, course) => {
    document.write(`<br>на ${course} курсі - ${num} студент(и/ів)`);
});
