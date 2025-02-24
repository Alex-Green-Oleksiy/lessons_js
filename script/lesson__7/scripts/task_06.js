"use strict";

// Задача 06. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

if (confirm("Почати тестування?")) {
    // Функція для переведення сантиметрів у дюйми
    function centimetersToInches(cm) {
        let inches = cm / 2.54;
        return inches;
    }

    // Функція для переведення кілограмів у фунти
    function kilogramsToPounds(kg) {
        let pounds = kg * 2.20462;
        return pounds;
    }

    // Функція для переведення кілометрів у милі
    function kilometersToMiles(km) {
        let miles = km * 0.621371;
        return miles;
    }

    const value = parseFloat(prompt("Введіть число", "100"));

    document.write(
        `<p class="gilp">${value} сантиметри(ів) у дюйми = ${centimetersToInches(
            value
        ).toFixed(2)}</p>`
    );
    document.write(
        `<p class="gilp">${value} кілограми(ів) у фунти = ${kilogramsToPounds(
            value
        ).toFixed(2)}</p>`
    );
    document.write(
        `<p class="gilp">${value} кілометри(ів) у милі = ${kilometersToMiles(
            value
        ).toFixed(2)}</p>`
    );
}
