"use strict";

// Задача 02. Користувач вводить кількість елементів.
//  Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
if (confirm("Почати тестування?")) {
function createCustomArray(elementsNumber) {
    // Створюємо масив довжиною elementsNumber
    const half = Math.floor(elementsNumber / 2);
    const customArray = new Array(elementsNumber);
    // Заповнюємо першу половину масиву 1-цями
    customArray.fill(1, 0, half);
    // Заповнюємо другу половину масиву 7-ками
    customArray.fill(7, half, elementsNumber);
    return customArray;
}
const elementsNumber = parseInt(prompt("Введіть кількість елементів"));
const customArray = createCustomArray(elementsNumber);
document.write(`Створений масив: ${customArray}`);
}
