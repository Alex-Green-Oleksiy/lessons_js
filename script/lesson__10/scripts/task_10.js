"use strict";

// Задача 10. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). Знайти першу ціну, що більше за 1000

if (confirm("Почати тестування?")) {
    const generateArr = (arrLength, min, max) => {
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrElement = Math.floor(Math.random() * (max - min + 1)) + min;

            arr.push(arrElement);
        }

        return arr;
    };

    const getFirstPriceMore1000 = (arr, value) => {
        return arr.find((el) => el > value);
    };

    const arr = generateArr(15, 1, 10000);
    const firstPriceMore1000 = getFirstPriceMore1000(arr, 1000);

    document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Перша ціна, що більша за 1000 - <span>${
            firstPriceMore1000 !== undefined ? firstPriceMore1000 : "Нема такої"
        }</span></p>
		`);
}
