"use strict";

// Задача 03.  Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm("Почати тестування?")) {
    const studentsNames = [
        "Іван",
        "Марія",
        "Петро",
        "Іван",
        "Ольга",
        "Іван",
        "Катерина"
    ];

    function countNameOccurrences(arr, name) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === name) count++;
        }
        return count;
    }

    const countIvan = countNameOccurrences(studentsNames, "Іван");
    console.log(`Ім'я "Іван" зустрічається ${countIvan} разів.`);
    document.write(`Ім'я "Іван" зустрічається ${countIvan} разів.`);
}
