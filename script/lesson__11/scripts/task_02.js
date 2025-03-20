"use strict";

// Задача 02. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// 2) загальний прибуток усіх магазинів по дням(загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список(одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні(рядки) за спаданням максимального елементи у цьому тижні(рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні(рядки) за спаданням суми елементів у рядку(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

let infProfit = [
    [345, 236, 567, 11, 34, 111, 235],
    [2234, 3467, 8, 45, 11, 22, 11],
    [123, 11, 5, 1, 663, 11, 77]
];

//     // 1) загальний прибуток кожного масиву за тиждень;
let profitEveryStore = [];
for (let numStore of infProfit) {
    let profit = numStore.reduce((prevSumProfit, el) => prevSumProfit + el);
    profitEveryStore.push(profit);
}
document.write(
    `<p>Загальний прибуток кожного масиву за тиждень: ${profitEveryStore.join(
        ", "
    )}</p>`
);

// //     2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
let profitAllStoreOfDay = [0, 0, 0, 0, 0, 0, 0];
for (let numStore = 0; numStore < infProfit.length; numStore++) {
    for (let dayNum = 0; dayNum < 7; dayNum++) {
        profitAllStoreOfDay[dayNum] += infProfit[numStore][dayNum];
    }
}
document.write(
    `<p>Загальний прибуток усіх магазинів по дням: ${profitAllStoreOfDay.join(
        ", "
    )}</p>`
);

function getSumProfitSomeDays(arr, firstDay, lastDay) {
    let sum = 0;
    for (let numStore = 0; numStore < arr.length; numStore++) {
        for (let numDay = firstDay; numDay < lastDay; numDay++) {
            sum += arr[numStore][numDay];
        }
    }
    return sum;
}

//     // 3) загальний прибуток за робочі дні
document.write(
    `<p>Загальний прибуток за робочі дні: ${getSumProfitSomeDays(
        infProfit,
        1,
        5
    )}</p>`
);
//     // 4) загальний прибуток за вихідні дні
document.write(
    `<p>Загальний прибуток за вихідні дні: ${getSumProfitSomeDays(
        infProfit,
        6,
        7
    )}</p>`
);

//     // 5) максимальний прибуток за середу
function getProfitSomeDay(arr, day) {
    let maxProfit = -Infinity;
    for (let numStore = 0; numStore < arr.length; numStore++) {
        if (arr[numStore][day - 1] > maxProfit)
            maxProfit = arr[numStore][day - 1];
    }
    return maxProfit;
}
document.write(
    `<p>Максимальний прибуток за середу: ${getProfitSomeDay(infProfit, 3)}</p>`
);

//     // 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
let generalListBumMore200 = infProfit.flat(Infinity).filter((el) => el > 200);
document.write(
    `<p>Значення більші за 200: ${generalListBumMore200.join(", ")}</p>`
);

//     // 7) відсортувати кожен тиждень за зростанням
let newList = [];
for (const numStore of infProfit) {
    let sortWeek = numStore.sort((a, b) => a - b);
    newList.push(sortWeek);
}
document.write(`<p>Відсортовані тижні за зростанням: ${newList}</p>`);

//     // 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку)
let maxValues = infProfit.map((week) => Math.max(...week));
let sortListMaxProfit = infProfit.sort((a, b) => {
    let maxA = maxValues[infProfit.indexOf(a)];
    let maxB = maxValues[infProfit.indexOf(b)];
    if (maxA > maxB) return -1;
    else if (maxB > maxA) return 1;
    else return 0;
});
document.write(
    `<p>Тижні за спаданням максимального елемента: ${sortListMaxProfit}</p>`
);

//     // 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку
let sumValues = infProfit.map((week) => week.reduce((sum, el) => sum + el, 0));
let sortListMaxSumProfit = infProfit.sort((a, b) => {
    let sumA = sumValues[infProfit.indexOf(a)];
    let sumB = sumValues[infProfit.indexOf(b)];
    if (sumA > sumB) return -1;
    else if (sumA < sumB) return 1;
    else return 0;
});
document.write(
    `<p>Тижні за спаданням суми елементів: ${sortListMaxSumProfit}</p>`
);

function sortStringsByMaxChar(strings) {
    const maxChars = strings.map((str) =>
        Math.max(...str.split("").map((char) => char.charCodeAt(0)))
    );
    return strings
        .map((str, index) => ({ str, maxChar: maxChars[index] }))
        .sort((a, b) => a.maxChar - b.maxChar)
        .map((item) => item.str);
}

const strings = ["apple", "banana", "cherry"];
const sortedStrings = sortStringsByMaxChar(strings);
document.write(
    `<p>Відсортовані рядки за максимальним символом: ${sortedStrings.join(
        ", "
    )}</p>`
);
