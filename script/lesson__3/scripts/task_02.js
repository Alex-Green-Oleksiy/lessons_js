"use strict";

// Задача 2. З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці,
            //  інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.


// Введення данних

const productPrice = parseFloat(prompt("Введіть вартість товару:"));
const userMoney = parseFloat(prompt("Введіть кількість грошей:"));

if (userMoney < productPrice) {
    document.write("Недостатньо коштів");
} else if (userMoney - productPrice >= 4) {
    document.write("Вітаю з покупкою. Рекомендуємо купити лотерею");
} else {
    document.write("Вітаю з покупкою");
}

