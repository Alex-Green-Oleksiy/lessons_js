"use strict";
// Задача 10.Дано масив цін у грн. Податок складає 20%.
//  Сформувати масив, який буде містити величину сплаченого податку у грн.

if (confirm("Почати тестування?")) {
    const pricesInUah = [500, 1500, 800, 2000, 1200, 700, 2500];
    const taxRate = 0.2;

    const taxAmounts = pricesInUah.map((price) => price * taxRate);
    document.write(`Ціна товарів у гривнях  = ${pricesInUah}</br>`);
    document.write(`Величина сплаченого податку: ${taxAmounts}`);
}
