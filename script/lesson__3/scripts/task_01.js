"use strict";

// Задача 01. З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою,
// або вивести, що кількість однакова.



//1Вводимо дані
const nameFirstChild = prompt("name1", "Jak");//імена дітей
const nameSecondChild = prompt("name2", "Grase");//імена дітей

const quantityCandyFirst = parseFloat(
    prompt(`Кількість цукерок у ${nameFirstChild}`, "5")
);//кількість цукурок
const quantityCandySecond = parseFloat(
    prompt(`Кількість цукерок у ${nameSecondChild}`, "7")
);//кількість цукурок
//2Порівнюємо і виводимо результат
if (quantityCandyFirst > quantityCandySecond) {
    document.write(`Winner = ${nameFirstChild}`);
} else if (quantityCandyFirst < quantityCandySecond) {
    document.write(`Winner = ${nameSecondChild}`);
} else {
    document.write(`Winner = Friends`);
}
