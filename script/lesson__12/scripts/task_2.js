"use strict";

// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.

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

function coctailSort(arr) {
    let swapCount = 0,
        comparisonCount = 0,
        leftIndex = 0,
        rightIndex = arr.length - 1,
        changed = false;

    while (leftIndex < rightIndex) {
        for (let i = leftIndex + 1; i <= rightIndex; i++) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                changed = true;
                swapCount++;
            }
            comparisonCount++;
        }
        rightIndex--;
        if (!changed) break;

        for (let i = rightIndex; i > leftIndex; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                changed = true;
                swapCount++;
            }
            comparisonCount++;
        }
        leftIndex++;
        if (!changed) break;
    }
    return { sortedArr: arr, swapCount, comparisonCount };
}
const { sortedArr, swapCount, comparisonCount } = coctailSort(randNumArr);
document.write(`
										<div>Відсортований масив: ${sortedArr};</div>
										<div>Кількість обмінів: ${swapCount};</div>
										<div>Кількість порівнянь: ${comparisonCount}.</div>
									`);
