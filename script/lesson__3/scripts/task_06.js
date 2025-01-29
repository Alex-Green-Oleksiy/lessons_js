"use strict";
// Задача 06. 6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const dayNumber = parseInt(prompt("Введіть номер дня тижня:1-7"));

switch (dayNumber) {
	case 1:
		document.write(`Ваш день - Понеділок`);
		break;
	case 2:
		document.write(`Ваш день - Вівторок`);
		break;
	case 3:
		document.write(`Ваш день - Середа`);
		break;
	case 4:
		document.write(`Ваш день - Четвер`);
		break;
	case 5:
		document.write(`Ваш день - П'ятниця`);
		break;
	case 6:
		document.write(`Ваш день - Субота`);
		break;
	case 7:
		document.write(`Ваш день - Неділя`);
		break;
	default:
		document.write(`Введіть корректний номер(1 - 7)`);
		break;
}