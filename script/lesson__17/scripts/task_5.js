"use strict";

// Задача 05. Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів
// Приклад.
// 	testsList = [
// 		{ firstNum: 1, secondNum: 5, opration:’*’, userAnswer: 7, correctAnswer: 5},
// 		{ firstNum: 3, secondNum: 4, opration:’+’, userAnswer: 7, correctAnswer: 7},
// 	]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач(рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування.Результати тестування додаються в об’єкт History.Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.

const checkValue = (value, message) => {
    if (typeof value !== "number" || isNaN(value) || !isFinite(value))
        throw new Error(message);
};

class Multichecker {
    constructor() {
        this.firstNum = this.generateRandomNum();
        this.secondNum = this.generateRandomNum();
    }

    generateRandomNum(min = 1, max = 100) {
        checkValue(
            min,
            "Некоректно вказано мінімальне число для генерації чисел"
        );
        checkValue(
            max,
            "Некоректно вказано максимальне число для генерації чисел"
        );

        if (min > max) [min, max] = [max, min];

        return Math.floor(Math.random() * (max - min) + 1) + min;
    }

    getCorrectAnswer() {
        return this.firstNum * this.secondNum;
    }

    getUserAnswer() {
        const userAnswer = parseInt(
            prompt(`${this.firstNum} * ${this.secondNum} = `)
        );
        checkValue(userAnswer, "Введено некоректну відповідь");
        return userAnswer;
    }
}

class Addchecker {
    constructor() {
        this.firstNum = this.generateRandomNum();
        this.secondNum = this.generateRandomNum();
    }

    generateRandomNum(min = 1, max = 100) {
        checkValue(
            min,
            "Некоректно вказано мінімальне число для генерації чисел"
        );
        checkValue(
            max,
            "Некоректно вказано максимальне число для генерації чисел"
        );

        if (min > max) [min, max] = [max, min];

        return Math.floor(Math.random() * (max - min) + 1) + min;
    }

    getCorrectAnswer() {
        return this.firstNum + this.secondNum;
    }

    getUserAnswer() {
        const userAnswer = parseInt(
            prompt(`${this.firstNum} + ${this.secondNum} = `)
        );
        checkValue(userAnswer, "Введено некоректну відповідь");
        return userAnswer;
    }
}

class History {
    constructor() {
        this.tests = [];
    }

    getResult(testData) {
        this.tests.push(testData);
        return this.tests;
    }

    showResult() {
        let count = 0;
        this.tests.forEach((obj, index) => {
            if (obj.userAnswer === obj.correctAnswer) count++;
            document.write(`
				<h3>Приклад №${index + 1}: <span>${obj.firstNum} ${obj.operation} ${
                obj.secondNum
            } = </span></h3>
				<p>Ваша відповідь: <span>${obj.userAnswer}</span></p>
				<p>Правильна відповідь: <span>${obj.correctAnswer}</span></p>
			`);
        });
        document.write(
            `<p>Кількість правильних відповідей: <span>${count}</span></p>`
        );
    }
}

class TestData {
    constructor({ firstNum, secondNum, operation, userAnswer, correctAnswer }) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        this.operation = operation;
        this.userAnswer = userAnswer;
        this.correctAnswer = correctAnswer;
    }
}

class TestManager {
    constructor() {
        if (TestManager.instance) return TestManager.instance;
        this.history = new History();
        this.maxCount = 5;
        TestManager.instance = this;
    }
    showExample() {
        const timerId = setInterval(() => {
            let checker;
            let operation;

            if (Math.random() > 0.5) {
                checker = new Addchecker();
                operation = "+";
            } else {
                checker = new Multichecker();
                operation = "*";
            }
            const testData = new TestData({
                firstNum: checker.firstNum,
                secondNum: checker.secondNum,
                operation,
                userAnswer: checker.getUserAnswer(),
                correctAnswer: checker.getCorrectAnswer()
            });

            this.history.getResult(testData);

            this.maxCount--;
            if (this.maxCount === 0) {
                clearInterval(timerId);
                this.history.showResult();
            }
        }, 5000);
    }
}

const manager = new TestManager();
manager.showExample();
