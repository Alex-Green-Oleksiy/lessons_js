"use strict";

// Задача 05. Створити функцію, яка для 3 заданих чисел знаходить
// одночасно декілька результатів:
//  кількість парних, кількість додатних, кількість більших за 100.

if (confirm("Почати тестування?")) {
    function analyzeNumbers(a, b, c) {
        let evenCount = 0;
        if (a % 2 === 0) evenCount++;
        if (b % 2 === 0) evenCount++;
        if (c % 2 === 0) evenCount++;

        let positiveCount = 0;
        if (a > 0) positiveCount++;
        if (b > 0) positiveCount++;
        if (c > 0) positiveCount++;

        let greaterThan100Count = 0;
        if (a > 100) greaterThan100Count++;
        if (b > 100) greaterThan100Count++;
        if (c > 100) greaterThan100Count++;

        return {
            evenCount,
            positiveCount,
            greaterThan100Count
        };
    }

    const useNumb1 = parseInt(prompt("Введіть перше число", "125"));
    const useNumb2 = parseInt(prompt("Введіть друге число", "12"));
    const useNumb3 = parseInt(prompt("Введіть третє число", "-5"));

    const result = analyzeNumbers(useNumb1, useNumb2, useNumb3);

    document.write(`
      <p class="gilp">Кількість парних чисел: ${result.evenCount}</p>
      <p class="gilp">Кількість позитивних чисел: ${result.positiveCount}</p>
      <p class="gilp">Кількість чисел більше 100: ${result.greaterThan100Count}</p>
    `);
}
