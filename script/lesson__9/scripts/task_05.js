"use strict";

// Задача 05. Дано масив елементів. Знайти добуток додатних елементів

if (confirm("Почати тестування?")) {
    
    function productOfPositiveElements(arr) {
        let product = 1; // Початкове значення добутку

        arr.forEach((element) => {
            if (element > 0) {
                product *= element;
            }
        });
        return product;
    }
    const array = [1, -3, 4, -2, 5, 0, 6];
    const result = productOfPositiveElements(array);
    document.write(`Числа масива = ${array}</br>`);
    document.write(`Добуток додатних елементів: ${result}`);

   
}
