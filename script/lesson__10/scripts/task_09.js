"use strict";

// Задача 09. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). Підрахувати суму цін, що більше за 1000

if (confirm("Почати тестування?")) {
    const generateArr = (arrLength, min, max) => {
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrElement = Math.floor(Math.random() * (max - min + 1)) + min;

            arr.push(arrElement);
        }

        return arr;
    };

    const sumPriceMoreThan1000 = (arr, value) => {
        return arr.reduce((accum, el) => {
            if (el > value) accum += el;
            return accum;
        }, 0);
    };

    const arr = generateArr(15, 1, 10000);
    const priceMoreThan1000Sum = sumPriceMoreThan1000(arr, 1000);

    document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Сума цін, що більші за 1000 - <span>${
            priceMoreThan1000Sum > 0 ? priceMoreThan1000Sum : "Нема таких"
        }</span></p>
		`);
}
