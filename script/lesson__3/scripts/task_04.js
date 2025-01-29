"use strict";

// Задача 04.  З клавіатури вводиться вік людини. Вивести на екран ким він є
// (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

// Введення данних
const userAge = parseInt(prompt("Ваш вік"));
let result;

if (userAge < 1 || userAge > 150) {
    result = "Некоректний вік";
} else if (userAge <= 7) {
    result = "Дитина у садочку";
} else if (userAge <= 17) {
    result = "Дитина у школі";
} else if (userAge <= 22) {
    result = "Студент";
} else if (userAge <= 65) {
    result = "Працівник";
} else {
    result = "Пенсіонер";
}

document.write(result);
