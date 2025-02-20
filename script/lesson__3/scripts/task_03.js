"use strict";

// Задача 03. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// Введення данних
// Створюємо випадкове число від 1 до 5 за допомогою Math.random()
const randomNumber = Math.floor(Math.random() * 5) + 1;
//Отримуємо першу спробу користувача через prompt.
let guess1 = parseInt(prompt("Спробуйте вгадати число від 1 до 5 (спроба 1):"));

if (guess1 === randomNumber) {
    document.write("Вітаємо! Ви вгадали число з першої спроби.");
} else {
    let guess2 = parseInt(prompt("Неправильно. Спробуйте ще раз (спроба 2):"));
    if (guess2 === randomNumber) {
        document.write("Вітаємо! Ви вгадали число з другої спроби.");
    } else {
        document.write(`Ви програли. Правильне число було ${randomNumber}.`);
    }
}
