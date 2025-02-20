"use strict";
// Задача 05.Створити 10 елементів для введення цін продуктів
if (confirm("Почати тестування?")) {
    let result = "";

    for (let i = 1; i <= 10; i++)
        result += `
		<div class="input input-block">
			<span class="input-text">Product # ${i}</span>
			<input type="number" class="form-input">
		</div>
	`;

    document.write(`${result}`);
}
