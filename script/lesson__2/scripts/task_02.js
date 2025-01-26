"use strict"

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

/* Позначення
	yearOfBirth - рік народження
	currentYear - поточний рік
	age - кількість років
*/

// Введення данних

const yearOfBirth = parseInt(prompt('Введіть ваш рік народження', '2005'));
const currentYear = 2025;

// Обчислення результатів

const age = currentYear - yearOfBirth;


document.write(`Вітаю, вам ${age} років`)