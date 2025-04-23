"use strict";

// Задача 03. Розробити клас MultChecker для перевірки таблиці множення
// Поля
// Число, яке перевіряємо(наприклад, перевірка частини таблиці множення на 5)
// Кількість правильних відповідей
// Кількість неправильних відповідей

// Методи
// Генерування прикладу(метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран

if (confirm("Почати тестування?")) {
    class Multichecker {
        constructor(number) {
            this.number = number;
            this.correctAnswersNum = 0;
            this.incorrectAnswersNum = 0;
        }

        generateSecondNum(min = 1, max = 10) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        generateExample() {
            const secondNum = this.generateSecondNum();
            const res = this.number * secondNum;

            const userAnswer = parseInt(
                prompt(`Вкажіть скільки буде ${this.number} * ${secondNum}`)
            );

            return { res, userAnswer };
        }

        isCorrect() {
            const { res, userAnswer } = this.generateExample();

            if (userAnswer === res) {
                this.correctAnswersNum++;
                return true;
            } else {
                this.incorrectAnswersNum++;
                return false;
            }
        }

        displayResult() {
            const res = this.isCorrect();
            return `
		<p>Ваша відповідь ${res ? "правильна" : "неправильна"}</p>
		<p>Кількість правильних відповідей ${this.correctAnswersNum}</p>
		<p>Кількість неправильних відповідей ${this.incorrectAnswersNum}</p>
		`;
        }
    }

    let res = new Multichecker(5);

    document.write(res.displayResult());
    document.write(res.displayResult());

    document.write(res.displayResult());
}
