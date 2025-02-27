"use strict";

// Задача 09.Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm("Почати тестування?")) {
    const namesArray = ["Іван", "Марія", "Петро", "Ольга", "Катерина"];

    const firstLetters = namesArray.map((name) => name[0]);
    document.write(`Імена = ${namesArray}</br>`);
    document.write(`Перші літери імен: ${firstLetters}`);
}
