"use strict";

// Задача 9. Дано два списки прізвищ студентів,
// що відвідують гуртки з математики і історії.
// Підрахувати скільки студентів з гуртка з історії також
// відвідують гурток з математики. Також підрахувати скільки всього студентів
// відвідують хоча б один гурток.

// Функція для підрахунку студентів, які відвідують хоча б один гурток
function getNumStudentsleastOneClub(list1, list2) {
    // Об'єднуємо два списки та видаляємо дублікати
    const resSet = new Set([...list1, ...list2]);
    return resSet.size;
}

// Функція для підрахунку студентів, які відвідують обидва гуртки
function getNumStudentsFromSomeClubAlsoAttendOtherClub(list1, list2) {
    // Конвертуємо списки в Set для швидкого пошуку
    const set1 = new Set(list1);
    const set2 = new Set(list2);
    // Повертаємо кількість студентів, які є в обох списках
    return [...set1].filter((student) => set2.has(student)).length;
}

// Функція для підрахунку студентів у кожному гуртку окремо
function getNumStudentsEachClub(list1, list2) {
    return {
        history: new Set(list1).size,
        math: new Set(list2).size
    };
}

// Список студентів гуртка з історії
const studentsListHist = [
    "Коваленко Марія",
    "Дубасова Анна",
    "Сергієнко Олександр",
    "Ткаченко Ольга",
    "Василенко Олександр",
    "Павлюк Іван",
    "Кузьменко Наталія",
    "Мельник Володимир",
    "Кравченко Ірина",
    "Сидорова Марія"
];

// Список студентів гуртка з математики
const studentsListMath = [
    "Іванов Іван",
    "Петров Петро",
    "Сидорова Анна",
    "Коваленко Марія",
    "Бондаренко Олег",
    "Іванов Іван",
    "Петров Петро",
    "Сидорова Анна",
    "Коваленко Марія",
    "Бондаренко Олег"
];

// Виводимо результати
document.write("<h2>Статистика гуртків</h2>");
document.write("<h3>Результати обробки:</h3>");

// Підрахунок студентів у кожному гуртку
const numStudentsEachClub = getNumStudentsEachClub(
    studentsListHist,
    studentsListMath
);
document.write(
    "<p>Кількість студентів у гуртку з історії: " +
        `${numStudentsEachClub.history}</p>`
);
document.write(
    "<p>Кількість студентів у гуртку з математики: " +
        `${numStudentsEachClub.math}</p>`
);

// Підрахунок студентів, які відвідують хоча б один гурток
const numStudentsleastOneClub = getNumStudentsleastOneClub(
    studentsListHist,
    studentsListMath
);
document.write(
    "<p>Загальна кількість унікальних студентів: " +
        `${numStudentsleastOneClub}</p>`
);
console.log(numStudentsleastOneClub);

// Підрахунок студентів з гуртка з історії, які також відвідують гурток з математики
const numStudentsFromHistClubAlsoAttendMathClub =
    getNumStudentsFromSomeClubAlsoAttendOtherClub(
        studentsListHist,
        studentsListMath
    );
document.write(
    "<p>Кількість студентів з гуртка з історії, які також відвідують гурток з математики: " +
        `${numStudentsFromHistClubAlsoAttendMathClub}</p>`
);
console.log(numStudentsFromHistClubAlsoAttendMathClub);
