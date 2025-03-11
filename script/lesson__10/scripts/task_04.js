"use strict";

// Задача 04. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). 
// Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

if (confirm("Почати тестування?")) {
    const generateArr = (arrLength, min, max) => {
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrElement = Math.floor(Math.random() * (max - min + 1)) + min;

            arr.push(arrElement);
        }

        return arr;
    };

    const getArrInPercentOfMax = (arr) => {
        const maxValue = Math.max(...arr);
        return arr.map((el) => ((el / maxValue) * 100).toFixed(2) + "%");
    };

    const arr = generateArr(15, 1, 10000);
    const arrInPercentOfMax = getArrInPercentOfMax(arr);

    document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Масив, що міститить значення цін у відсотках стосовно максимального - <span>${arrInPercentOfMax}</span></p>
		`);
}
