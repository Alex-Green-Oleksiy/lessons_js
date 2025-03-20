"use strict";

// Задача 01.  Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// 1)номери рядків від 0 до половини, стовпці від 0 до половини
// 2)номери рядків від 0 до половини, стовпці від половини до кінця
// 3)номери рядків(від половини до кінця, стовпці від 0 до половини
// 4) номери рядків від половини до кінця, стовпці від половини до кінця
// 5) Суму парних рядків
// 6) Суму непарних стовпців
// 7) У парних рядках – непарні стовпці, у непарних – парні.

let arr = [
    [13, 2, 13, 5, 15, 3],
    [24, 2, 15, 2, 11, 1],
    [45, 5, 5, 2, 2, 1],
    [45, 2, 51, 4, 5, 1],
    [39, 1, 3, 4, 61, 2],
    [4, 11, 33, 16, 31, 42]
];
document.write(`<p>Масив: ${arr}</p>`);

// 1) номери рядків від 0 до половини, стовпці від 0 до половини
let rowHalf = Math.floor(arr.length / 2);
let sum1 = 0;
for (let row = 0; row < rowHalf; row++) {
    let columnHalf = Math.floor(arr[row].length / 2);
    for (let column = 0; column < columnHalf; column++) {
        sum1 += arr[row][column];
    }
}
document.write(`<p>Сума 1: ${sum1}</p>`);

// 2)номери рядків від 0 до половини, стовпці від половини до кінця
let sum2 = 0;
for (let row = 0; row < rowHalf; row++) {
    let columnHalf = Math.floor(arr[row].length / 2);
    for (let column = columnHalf; column < arr[row].length; column++) {
        sum2 += arr[row][column];
    }
}
document.write(`<p>Сума 2: ${sum2}</p>`);

// 3)номери рядків (від половини до кінця, стовпці від 0 до половини
let sum3 = 0;
for (let row = rowHalf; row < arr.length; row++) {
    let columnHalf = Math.floor(arr[row].length / 2);
    for (let column = 0; column < columnHalf; column++) {
        sum3 += arr[row][column];
    }
}
document.write(`<p>Сума 3: ${sum3}</p>`);

// 4) номери рядків від половини до кінця , стовпці від половини до кінця
let sum4 = 0;
for (let row = rowHalf; row < arr.length; row++) {
    let columnHalf = Math.floor(arr[row].length / 2);
    for (let column = columnHalf; column < arr[row].length; column++) {
        sum4 += arr[row][column];
    }
}
document.write(`<p>Сума 4: ${sum4}</p>`);

// 5) Суму парних рядків
let sum5 = 0;
for (let row = 0; row < arr.length; row += 2) {
    sum5 += arr[row].reduce((prevSum, el) => prevSum + el);
}
document.write(`<p>Сума 5: ${sum5}</p>`);

// 6) Суму непарних стовпців
let sum6 = 0;
for (let row = 1; row < arr.length; row += 2) {
    sum6 += arr[row].reduce((prevSum, el) => prevSum + el);
}
document.write(`<p>Сума 6: ${sum6}</p>`);

// 7) У парних рядках – непарні стовпці, у непарних – парні.
let sum7 = 0;
for (let row = 0; row < arr.length; row++) {
    let startColumn = 0;
    if (row % 2 === 0) startColumn = 1;
    for (let column = startColumn; column < arr[row].length; column += 2) {
        sum7 += arr[row][column];
    }
}
document.write(`<p>Сума 7: ${sum7}</p>`);
