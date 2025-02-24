"use strict"

// Задача 04. Створити окремі функції, які для 4 чисел знаходять:
// 1) суму;
// 2) добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

if (confirm('Почати тестування?')) {

//Сума:
function sumOfFourNumbers(a, b, c, d) {
    return a + b + c + d
}
//Добуток:
function productOfFourNumbers(a, b, c, d) {
    return a * b * c * d
}
//Середнє арифметичне:
function averageOfFourNumbers(a, b, c, d) {
    return (a + b + c + d) / 4
}
//Мінімальне значення:
function minOfFourNumbers(a, b, c, d) {
    return Math.min(a, b, c, d)
}

const num1 = parseInt(prompt('Введіть ваше перше число', '2'));
const num2 = parseInt(prompt('Введіть ваше друге число', '7'));
const num3 = parseInt(prompt('Введіть ваше третє число', '12'));
const num4 = parseInt(prompt('Введіть ваше четверте число', '22'));

document.write(`
<p>Ваші числа:Перше = ${num1 }, Друге = ${num2}, Третє = ${num3}, Четверте = ${num4}</з>
<p>Сума чисел - ${sumOfFourNumbers(num1,num2,num3,num4)} </p>
<p>Добуток чисел - ${productOfFourNumbers(num1,num2,num3,num4)} </p>
<p>Середнє арифметичне - ${averageOfFourNumbers(num1,num2,num3,num4)} </p>
<p> Мінімальне значення - ${minOfFourNumbers(num1,num2,num3,num4)}</p>
`);
}