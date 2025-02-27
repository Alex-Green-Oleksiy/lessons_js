"use strict";

// Задача 07.Дано масив цін. Змінити цей масив так, що на ціни товарів,
//  які більші за 1000 грн. дати 30% знижки.

if (confirm("Почати тестування?")) {
    function applyDiscount(prices) {
        const discountedPrices = Array.from(prices, (price) =>
            price > 1000 ? price * 0.7 : price
        );
        return discountedPrices;
    }
    const pricesArray = [500, 1500, 2000, 750, 1200];
    const discountedPrices = applyDiscount(pricesArray);

    document.write(`Початковий масив цін: ${pricesArray}<br>`);
    document.write(`Масив зі знижкою: ${discountedPrices}`);
}
