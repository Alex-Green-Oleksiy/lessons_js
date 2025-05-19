"use strict";

//Задача 3.  Створити генератор, який би випадковим чином поступово генерував
//  вказану кількість парних чисел.

"use strict";

function getRandomEvenNum(min, max) {
    // Якщо max менше min, міняємо їх місцями
    if (max < min) {
        [max, min] = [min, max];
    }

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNum % 2 === 0) {
        return randomNum;
    }
    // Якщо число не парне і не є краєвим значенням
    else if ((randomNum > min && randomNum < max) || randomNum === min) {
        return randomNum + 1; // Робимо його парним додаванням 1
    }
    // Якщо число дорівнює max
    else if (randomNum === max) {
        return randomNum - 1; // Робимо його парним відніманням 1
    }
}

// Генератор для створення послідовності парних чисел
function* generatorEvenNumbers(count, min = 0, max = 100) {
    // Генеруємо вказану кількість парних чисел
    for (let index = 0; index < count; index++) {
        yield getRandomEvenNum(min, max);
    }
}

const evenNumbers = generatorEvenNumbers(10);

for (const num of evenNumbers) {
    document.write(`${num}<br>`);
}
