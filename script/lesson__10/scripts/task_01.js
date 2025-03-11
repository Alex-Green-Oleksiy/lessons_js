"use strict";

// Задача 01. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

if (confirm("Почати тестування?")) {
    const generateArr = (arrLength, min, max) => {
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrElement = Math.floor(Math.random() * (max - min + 1)) + min;

            arr.push(arrElement);
        }

        return arr;
    };

    const getArrWithElementMore1000 = (arr, value) => {
        return arr.filter((el) => el > value);
    };

    const arr = generateArr(15, 1, 10000);
    const arrWithElementMore1000 = getArrWithElementMore1000(arr, 1000);
    document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Масив, у якому є тільки ті ціни, що вище за 1000 - <span>${
            arrWithElementMore1000.length > 0
                ? arrWithElementMore1000
                : "Нема цін, що менші за 1000"
        }</span></p>
		`);
}
