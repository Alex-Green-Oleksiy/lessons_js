"use strict";

// Задача 05. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

if (confirm("Почати тестування?")) {
    const studentGrades = [2, 5, 3, 9, 10, 7, 8, 2, 6, 11, 4, 5];

    function countGrades(grades) {
        let countTwos = 0;
        let countGood = 0;
        let countBelowAverage = 0;
        const average =
            grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

        for (let i = 0; i < grades.length; i++) {
            if (grades[i] === 2) countTwos++;
            if (grades[i] >= 7) countGood++;
            if (grades[i] < average) countBelowAverage++;
        }

        return {
            countTwos,
            countGood,
            countBelowAverage
        };
    }
    const result = countGrades(studentGrades);
document.write(` <p> Кількість двійок: ${result.countTwos}</p> `);
document.write(` <p> Кількість хороших оцінок: ${result.countGood}</p>`);
document.write(` <p> Кількість оцінок, які нижче середнього: ${result.countBelowAverage}</p>`);
}
