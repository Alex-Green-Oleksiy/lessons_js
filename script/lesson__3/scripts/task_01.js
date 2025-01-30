"use strict";

// Задача 01. З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою,
// або вивести, що кількість однакова.

//1Вводимо дані
const nameFirstChild = prompt("Введіть ім'я першої дитини", "Jak");//імена дітей
const nameSecondChild = prompt("Введіть ім'я другої дитини", "Grase");//імена дітей

const quantityCandyFirst = parseFloat(prompt(`Кількість цукерок у ${nameFirstChild}`, "5"));//кількість цукурок
const quantityCandySecond = parseFloat(prompt(`Кількість цукерок у ${nameSecondChild}`, "7"));//кількість цукурок
//2Порівнюємо перевіряємо на некорректний ввод і виводимо результат
if (isNaN(quantityCandyFirst) || isNaN(quantityCandySecond)) {
    document.write("Помилка введення, введіть число");
} else if (quantityCandyFirst < quantityCandySecond) {
    document.write(`Переможець = ${nameSecondChild}, у неї більше цукерок на ${quantityCandySecond - quantityCandyFirst}`);
} else if (quantityCandyFirst > quantityCandySecond) {
    document.write(`Переможець = ${nameFirstChild}, у нього більше цукерок на ${quantityCandyFirst - quantityCandySecond}`);
} else {
    document.write("Переможець = Обидва друзі, у них однакова кількість цукерок");
}
