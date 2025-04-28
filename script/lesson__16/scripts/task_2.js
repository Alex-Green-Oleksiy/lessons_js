"use strict";

// Задача 02.Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді
//  доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях,
//  та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

class TMoney {
    #sumInDol;
    #dolExchangeRate;

    constructor(sumInDol, dolExchangeRate) {
        this.DolExchangeRate = dolExchangeRate;
        this.SumInDol = sumInDol;
    }

    checkValues(value, message) {
        if (value <= 0 || isNaN(value) || typeof value !== "number")
            throw new Error(message);
    }

    get SumInDol() {
        return this.#sumInDol;
    }
    set SumInDol(newSum) {
        this.checkValues(newSum, "Введена некоректна сума");
        this.#sumInDol = newSum;
    }

    get DolExchangeRate() {
        return this.#dolExchangeRate;
    }
    set DolExchangeRate(newValue) {
        this.checkValues(newValue, "Введено некоректний курс долара");
        this.#dolExchangeRate = newValue;
    }

    get SumInGrn() {
        return this.#sumInDol * this.#dolExchangeRate;
    }
    set SumInGrn(grnValue) {
        this.SumInDol = grnValue / this.DolExchangeRate;
    }

    addGrn(grnValue) {
        this.checkValues(grnValue, "Введена некоректна сума");

        this.SumInGrn += grnValue;
        return this.toString();
    }

    removeGrn(grnValue) {
        this.checkValues(grnValue, "Введена некоректна сума");

        if (grnValue > this.SumInGrn)
            throw new Error("Недостатньо коштів для вилучення");
        this.SumInGrn -= grnValue;

        return this.toString();
    }

    getNewRateAfterAddingGrn(moneyValue = 100) {
        return (this.SumInGrn + moneyValue) / this.SumInDol;
    }

    toString() {
        return `
		<p>Долари: ${this.SumInDol}</p>
		<p>Гривні: ${this.SumInGrn}</p>
		<p>Курс долара: ${this.DolExchangeRate}</p>
		`;
    }
}

try {
    const money = new TMoney(200, 5);
    money.addGrn(1000);
    document.write(`
	<h2>Додано 1000грн</h2>
	${money.toString()}
	`);
    money.removeGrn(1000);
    document.write(`
	<h2>Видалено 1000грн</h2>
	${money.toString()}
	`);
    document.write(`
	<h2>Щоб я отримав на 100грн більше курс долара має бути:</h2>
	${money.getNewRateAfterAddingGrn()}
	`);
} catch (error) {
    document.write(error);
}

// Ці тести згенерував чатGPT
function testTMoney() {
    const logResult = (condition, message) => {
        console.log(`${condition ? "✅" : "❌"} ${message}`);
    };

    try {
        const money = new TMoney(100, 40);

        logResult(
            money.SumInDol === 100,
            "Сума в доларах ініціалізована правильно"
        );
        logResult(
            money.DolExchangeRate === 40,
            "Курс долара ініціалізований правильно"
        );
        logResult(
            money.SumInGrn === 4000,
            "Сума в гривнях розрахована правильно"
        );

        money.addGrn(2000);
        logResult(
            Math.round(money.SumInGrn) === 6000,
            "Додавання гривень працює правильно"
        );

        money.removeGrn(1000);
        logResult(
            Math.round(money.SumInGrn) === 5000,
            "Вилучення гривень працює правильно"
        );

        const newRate = money.getNewRateAfterAddingGrn(100);
        logResult(
            Math.abs(newRate - (money.SumInGrn + 100) / money.SumInDol) < 0.001,
            "Обчислення нового курсу після додавання 100 грн правильне"
        );

        // Тест на неправильну суму
        try {
            money.addGrn(-100);
            logResult(false, "Негативна сума не повинна додаватися");
        } catch (e) {
            logResult(true, "Помилка при додаванні негативної суми спрацювала");
        }

        // Тест на перевищення доступної суми при вилученні
        try {
            money.removeGrn(999999);
            logResult(false, "Не повинно бути можливості зняти більше, ніж є");
        } catch (e) {
            logResult(true, "Помилка при вилученні забагато коштів спрацювала");
        }

        // Тест на неправильний курс
        try {
            const invalid = new TMoney(100, -5);
            logResult(false, "Неможливо створити обʼєкт з негативним курсом");
        } catch (e) {
            logResult(
                true,
                "Помилка при створенні з некоректним курсом спрацювала"
            );
        }
    } catch (e) {
        console.error("❌ Несподівана помилка під час тестів:", e.message);
    }
}
testTMoney();
