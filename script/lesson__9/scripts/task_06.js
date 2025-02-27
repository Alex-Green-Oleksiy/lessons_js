"use strict";

// Задача 06. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm("Почати тестування?")) {
    function multiplyElementsGreaterThanFirst(arr) {
        if (arr.length === 0) {
            return []; 
        }
        const firstElement = arr[0];
        arr.forEach((element, index) => {
            if (element > firstElement) {
                arr[index] = element * 2;
            }
        });
        return arr;
    }
    const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    document.write(`Звичайний масив = ${array}</br>`);
    
    const result = multiplyElementsGreaterThanFirst(array);

    
    document.write(`Модифікований масив: ${result}`);

}
