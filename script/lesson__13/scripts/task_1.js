"use strict";

// Задача 01. Генерація всіх підмножин:
//  Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву.
//  Наприклад, для масиву [1, 2, 3]
//  можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

const generateSubsets = (arr) => {
    // Створюємо змінну для зберігання результату у масив
    let res = [];

    // Створюємо рекурсивну функцію, яка приймає поточну підмножину і індекс
    const buildSubsets = (currentSubset, index) => {
        // Додаємо до результату КОПІЮ підмножини
        res.push([...currentSubset]);

        // Створюємо цикл, який буде перебирати масив
        for (let i = index; i < arr.length; i++) {
            currentSubset.push(arr[i]);

            buildSubsets(currentSubset, i + 1);

            currentSubset.pop();
        }
    };

    buildSubsets([], 0);

    return res;
};

const arr = [1, 2, 3];
const resArr = generateSubsets(arr);

for (let i = 0; i < resArr.length; i++) {
    document.write(`<p>Підмножина №${i + 1} - <span>[${resArr[i]}]</span></p>`);
}
console.log(arr);
