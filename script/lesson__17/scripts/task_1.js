"use strict";

// Задача 01. Створити клас, що дозволяє виконувати такі операції над масивами:
// знаходження кількості додатних, кількості від’ємних,
// кількість входжень деякого числа (статичні методи)

class Test {
    static countPositiveNumbers(arr) {
        return arr.reduce(
            (prevCount, el) => (el > 0 ? prevCount + 1 : prevCount),
            0
        );
    }
    static countNegativeNumbers(arr) {
        return arr.reduce(
            (prevCount, el) => (el < 0 ? prevCount + 1 : prevCount),
            0
        );
    }
    static countOccurrences(arr, someNumber) {
        return arr.reduce(
            (prevCount, el) => (el === someNumber ? prevCount + 1 : prevCount),
            0
        );
    }
}

let arr = [4, -5, -39, 3, -98, -45, 34, 23, 12, 89843, -5, 6, -5];

console.log(Test.countPositiveNumbers(arr));
console.log(Test.countNegativeNumbers(arr));
console.log(Test.countOccurrences(arr, -5));
