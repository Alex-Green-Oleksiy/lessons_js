"use strict";

// Задача 07.Дано масив цін. Змінити цей масив так, що на ціни товарів,
//  які більші за 1000 грн. дати 30% знижки.

if (confirm("Почати тестування?")) {
    function applyDiscount(prices) {
        prices.forEach((el, ind, arr) => {
            if (el > 1000) arr[ind] *= 0.7;
        });
        return prices;
    }
    let prices = [100, 90, 5000, 13000, 17, 16, 18];
    
    const discountedPrices1 = applyDiscount([...prices]);
    document.write(`Початковий масив цін (приклад 1): ${prices}<br>`);
    document.write(`Масив зі знижкою (приклад 1): ${discountedPrices1}<br>`);
}
