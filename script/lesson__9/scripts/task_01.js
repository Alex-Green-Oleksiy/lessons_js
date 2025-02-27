"use strict";

// Користувач вводить кількість елементів.
//  Створити масив, що складається з
//  вказаної кількості елементів заповнених нулями.
if (confirm("Почати тестування?")) {
    function createZeroArray(elementsNumber) {
        const zeroArray = new Array(elementsNumber).fill(0);
        return zeroArray;
    }
    
    const elementsNumber = parseInt(prompt('Введіть кількість елементів'));
    const zeroArray = createZeroArray(elementsNumber);
    document.write(`Створений масив: ${zeroArray}`);
}
