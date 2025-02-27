"use strict";

// Задача 03.  Користувач вводить кількість елементів.
//  Створити масив, у якому перші 5 елементів заповнені 1-цями,
//  а інші до кінця масиву заповнені 7-ками.

if (confirm("Почати тестування?")) {
function createCustomArray(elementsNumber) {
    const customArray = new Array(elementsNumber);
    // Заповнюємо перші 5 елементів 1-цями
    customArray.fill(1, 0, 5);
    // Заповнюємо інші елементи до кінця масиву 7-ками
    customArray.fill(7, 5, elementsNumber);
    return customArray;
}
const elementsNumber = parseInt(prompt("Введіть кількість елементів"));
const customArray = createCustomArray(elementsNumber);
document.write(`Створений масив: ${customArray}`);

}
