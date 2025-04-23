"use strict";

// Задача 00. Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, 
// а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
//  Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

const obj1 = {
    numList: [2, 5, 45, 89, 54, 32, 3],
    sum() {
        return this.numList.reduce((prevSum, el) => prevSum + el, 0);
    }
};
const obj2 = {
    numList: [43, 9, 3, 58, 94, 36, 87],
    product(min, max) {
        return this.numList.reduce(
            (prevRes, el) => (el >= min && el <= max ? prevRes * el : prevRes),
            1
        );
    }
};
const sum1 = obj1.sum();
const sum2 = obj1.sum.call(obj2);

document.write(`
	<p>Сума чисел із першого об'єкту складає <span>${sum1}</span></p>
	<p>Сума чисел із другого об'єкту складає <span>${sum2}</span></p>
	`);

const prod1 = obj2.product.apply(obj1, [2, 45]);
const prod2 = obj2.product(3, 58);
document.write(`
	<p>Добуток чисел із першого об'єкту складає <span>${prod1}</span></p>
	<p>Добуток чисел із другого об'єкту складає <span>${prod2}</span></p>
	`);
