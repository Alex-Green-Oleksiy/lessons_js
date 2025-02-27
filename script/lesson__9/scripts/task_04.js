"use strict";

// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100

if (confirm("Почати тестування?")) {
    const elementsArray = [50, 120, 75, 200, 80, 150, 30, 180, 90, 220];

    function printElementsGreaterThan100(arr) {
        const filteredArray = [];
        for (const element of arr) {
            if (element > 100) {
                filteredArray.push(element);
            }
        }
        document.write(`Елементи, що більші за 100: ${filteredArray}`);
    }
    
    printElementsGreaterThan100(elementsArray);
}
