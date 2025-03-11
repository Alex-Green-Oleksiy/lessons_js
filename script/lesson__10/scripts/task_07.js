"use strict";

// Задача 07. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). Визначати, чи усі ціни більше за 1000

if (confirm("Почати тестування?")) {
    const generateArr = (arrLength, min, max) => {
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrElement = Math.floor(Math.random() * (max - min + 1)) + min;

            arr.push(arrElement);
        }

        return arr;
    };

    const isEveryPriceMoreThan1000 = (arr, value) => {
        return arr.every((el) => el > value);
    };

    const arr = generateArr(15, 1, 10000);

    document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Чи усі ціни вищі за 1000? <span>${
            isEveryPriceMoreThan1000(arr, 1000) ? "Так" : "Ні"
        }</span></p>
		`);
}
