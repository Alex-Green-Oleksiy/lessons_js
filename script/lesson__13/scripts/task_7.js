"use strict"

// Задача 07. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.


if (confirm('Почати тестування?')) {
	const getSumGame = (min = 0, max = 20) => {

		setInterval(() => {
			const num1 = Math.floor(Math.random() * (max - min + 1)) + min
			const num2 = Math.floor(Math.random() * (max - min + 1)) + min

			const sum = num1 + num2
			const userAnswer = parseInt(prompt(`Скільки буде ${num1} + ${num2}?`))

			if (userAnswer === sum) alert('Правильно')
			else alert('Не правильно')
		}, 10000)
	}
	getSumGame()
}