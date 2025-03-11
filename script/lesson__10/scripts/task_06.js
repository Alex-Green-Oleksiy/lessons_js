"use strict";

// Задача 06. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). Визначити, чи є ціна, що менше 1000

if (confirm("Почати тестування?")) {
    const generateArr = (arrLength, min, max) => {
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrElement = Math.floor(Math.random() * (max - min + 1)) + min;

            arr.push(arrElement);
        }

        return arr;
    };

    const isPriceLessThan1000 = (arr, value) => {
        return arr.some((el) => el < value);
        //! Або
        //return arr.find(el => el < value)
    };

    const arr = generateArr(15, 1, 10000);
    const priceLessThan1000 = isPriceLessThan1000(arr, 1000);

    document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Чи є ціна, що нижча за 1000? <span>${
            priceLessThan1000 ? "Так" : "Ні"
        }</span></p>
		`);
}
