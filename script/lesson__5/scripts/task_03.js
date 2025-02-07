"use strict";

// Задача 03. Вивести на екран 8 кнопок з написом “Hello”.
if (confirm('Почати тестування?')) {
let result = "";

for (let i = 0; i < 8; i++) result += `<button>Hello</button><br>`;

document.write(`${result}`);
}