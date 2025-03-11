"use strict";

// Задача 03. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). Сформувати список з тих цін, які більші за попереднє значення

if (confirm("Почати тестування?")) {
    const generateArr = (arrLength, min, max) => {
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrElement = Math.floor(Math.random() * (max - min + 1)) + min;
            arr.push(arrElement);
        }

        return arr;
    };

    const getListOfValuesMoreThanPrev = (arr) => {
        return arr
            .filter((el, index, arr) => index > 0 && el > arr[index - 1])
            .join(", ");
    };

    const arr = generateArr(15, 1, 10000);
    const listOfValuesMoreThanPrev = getListOfValuesMoreThanPrev(arr);
    document.write(`
        <p>Згенерований масив - <span>${arr.join(", ")}</span></p>
        <p>Cписок з тих цін, які більші за попереднє значення - <span>${listOfValuesMoreThanPrev}</span></p>
    `);
}
