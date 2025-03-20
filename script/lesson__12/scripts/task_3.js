"use strict";
// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

function getRandArr(length = 30, min = 1, max = 100) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        const randNum = min + Math.floor(Math.random() * (max - min + 1));
        arr.push(randNum);
    }
    return arr;
}
const randNumArr = getRandArr();
document.write(`оригінальний масив ${randNumArr}`);
document.write(`<hr>`);

function insertionSort(arr) {
    let swapCount = 0,
        comparisonCount = 0;
    for (let i = 1; i < arr.length; i++) {
        const currentEl = arr[i];
        let prevEl = i - 1;
        while (prevEl >= 0 && arr[prevEl] > currentEl) {
            arr[prevEl + 1] = arr[prevEl];
            prevEl--;
            swapCount++, comparisonCount++;
        }
        comparisonCount++;
        arr[prevEl + 1] = currentEl;
    }
    return { sortedArr: arr, swapCount, comparisonCount };
}
const { sortedArr, swapCount, comparisonCount } = insertionSort(randNumArr);
document.write(`
										<div>Відсортований масив: ${sortedArr};</div>
										<div>Кількість обмінів: ${swapCount};</div>
										<div>Кількість порівнянь: ${comparisonCount}.</div>
									`);
