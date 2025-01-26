"use strict";

// Задача 01. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

/* Позначення
	firstNumber - перше введене дійсне число
	secondNumber - друге введене дійсне число
	summ - їх сума
	multiplication - їх добуток
	division - їх частку
*/

// Введення  данних

const firstNumber = parseFloat(
    prompt("Введіть перше будь-яке дійсне число", "1")
);
const secondNumber = parseFloat(
    prompt("Введіть друге будь-яке дійсне число", "1")
);

// Обчислення результатів

const summ = firstNumber + secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;

// Виведення результатів

document.write(
    `сума = ${summ}, Добуток = ${multiplication},Частка = ${division} `
);
