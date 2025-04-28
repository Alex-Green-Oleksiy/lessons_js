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

let arr = [345, -789, 234, 567, -321, 432, -654, 876, -234, 987,
    -543, 654, -876, 321, -432, 765, -987, 543, -345, 876,
    -654, 234, -876, 765, -234, 321, -543, 9837, -765, 432,
    -321, 876, -432, 543, -987, 654, -234, 345, -876, 765,
    -543, 654, -321, 987, -654, 876, -432, 765, -987, 543];

console.log(Test.countPositiveNumbers(arr));
console.log(Test.countNegativeNumbers(arr));
console.log(Test.countOccurrences(arr, -987));
