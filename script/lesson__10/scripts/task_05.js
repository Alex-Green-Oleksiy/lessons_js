"use strict";

// Задача 05. Дано історію цін на цінні папери за деякий період
//  (згенерувати від 1 до 10000). Підрахувати кількість змін цін

if (confirm("Почати тестування?")) {
    const generateArr = (arrLength, min, max) => {
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrElement = Math.floor(Math.random() * (max - min + 1)) + min;

            arr.push(arrElement);
        }

        return arr;
    };

    const getChangePriceCount = (arr) => {
        return arr.reduce((accum, el, index, arr) => {
            if (index > 0 && el !== arr[index - 1]) accum++;
            return accum;
        }, 0);
    };

    const arr = generateArr(15, 1, 10000);
    const countOfChangePrice = getChangePriceCount(arr);

    document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Кількість змін цін - <span>${countOfChangePrice}</span></p>
		`);
}
