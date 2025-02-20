"use strict";
// Задача 07. З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

const monthNumber = parseInt(prompt("Введіть номер місяця (1-12):"));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        document.write("Це зима.");
        break;
    case 3:
    case 4:
    case 5:
        document.write("Це весна.");
        break;
    case 6:
    case 7:
    case 8:
        document.write("Це літо.");
        break;
    case 9:
    case 10:
    case 11:
        document.write("Це осінь.");
        break;
    default:
        document.write(
            "Невідомий номер. Будь ласка, введіть число від 1 до 12."
        );
}
