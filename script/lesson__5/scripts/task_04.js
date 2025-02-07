"use strict";

// Задача 04. Вивести з використанням циклів маркований список з випадковими числами (1-100).

if (confirm("Почати тестування?")) {
    let totalNum = parseFloat(prompt("Кількість випадкових чисел:", 20));
    let result = "";

    for (let i = 0; i < totalNum; i++) {
        result += `
			<li class="list-group-item">
				${Math.floor(Math.random() * 100)}
			</li>
		`;
    }
    document.write(`${result}`);
}
