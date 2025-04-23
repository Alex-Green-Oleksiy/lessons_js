"use strict"

// Функція повертає об'єкт з новим роком і місяцем через N місяців
const getDateAfterNMonth = ({ year, month, day }, monthNumbers) => {
	const totalMonths = month + monthNumbers - 1; // -1, бо місяці рахуються з 1
	const newYear = year + Math.floor(totalMonths / 12);
	const newMonth = (totalMonths % 12) + 1; // +1, щоб місяці були від 1 до 12
	return { year: newYear, month: newMonth, day };
};

const dateObj = {
	day: 17,
	month: 7,
	year: 1985,
};

console.log(getDateAfterNMonth(dateObj, 22));  // { year: 1987, month: 5, day: 17 }
console.log(getDateAfterNMonth(dateObj, 220)); // { year: 2003, month: 3, day: 17 }
console.log(getDateAfterNMonth(dateObj, 2));   // { year: 1985, month: 9, day: 17 }
console.log(getDateAfterNMonth(dateObj, 87));  // { year: 1992, month: 2, day: 17 }
console.log(getDateAfterNMonth(dateObj, 19));  // { year: 1986, month: 2, day: 17 }
console.log(getDateAfterNMonth(dateObj, 26));  // { year: 1987, month: 9, day: 17 }