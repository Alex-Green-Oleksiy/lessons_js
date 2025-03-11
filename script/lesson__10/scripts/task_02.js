"use strict";

// Задача 02. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000). Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

if (confirm("Почати тестування?")) {
    const generateArr = (arrLength, min, max) => {
        let arr = [];

        for (let i = 0; i < arrLength; i++) {
            let arrElement = Math.floor(Math.random() * (max - min + 1)) + min;

            arr.push(arrElement);
        }

        return arr;
    };

    const getArrWithIndexOfElementMore1000 = (arr, value) => {
        return arr.reduce((accum, el, index) => {
            if (el > value) accum.push(index);
            return accum;
        }, []);
    };

    const arr = generateArr(15, 1, 10000);
    const arrWithIndexOfElementMore1000 = getArrWithIndexOfElementMore1000(
        arr,
        1000
    );
    document.write(`
		<p>Згенерований масив - <span>${arr}</span></p>
		<p>Масив з номерів елементів - <span>${
            arrWithIndexOfElementMore1000.length > 0
                ? arrWithIndexOfElementMore1000
                : "Нема цін, що менші за 1000"
        }</span></p>
		`);
}
