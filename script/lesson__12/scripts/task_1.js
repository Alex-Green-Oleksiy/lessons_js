"use strict";

// Задача 1. Дано масив 30 випадкових цілих чисел. 
// Підрахувати скільки було обмінів та порівнянь чисел
//  під час сортування бульбашкою

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

function bubbleSort(arr) {
    let changed;
    let swapCount = 0;
    let comparisonCount = 0;
    do {
        changed = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                let tmp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = tmp;
                changed = true;
                swapCount++;
            }
            comparisonCount++;
        }
    } while (changed);
    return { sortedArr: arr, swapCount, comparisonCount };
}
const { sortedArr, swapCount, comparisonCount } = bubbleSort(randNumArr);
document.write(`
									<div>Відсортований масив: ${sortedArr};</div>
									<div>Кількість обмінів: ${swapCount};</div>
									<div>Кількість порівнянь: ${comparisonCount}.</div>
								`);
