"use strict";

// Клас для валідації даних
class Validator {
    static validateString(value, message) {
        if (!value || typeof value !== "string") throw new TypeError(message);
    }

    static validateNumber(value, message) {
        if (!isFinite(value) || isNaN(value) || typeof value !== "number")
            throw new Error(message);
    }
}

// Базовий клас для клієнта
class Client {
    #id;
    #fullName;
    #balance;

    constructor(id, fullName, balance) {
        this.id = id;
        this.fullName = fullName;
        this.balance = balance;
    }

    get id() {
        return this.#id;
    }
    set id(newId) {
        Validator.validateNumber(newId, "Некоректно введене значення id");
        this.#id = newId;
    }

    get fullName() {
        return this.#fullName;
    }
    set fullName(newFullName) {
        Validator.validateString(newFullName, "Некоректно введено ПІБ");
        this.#fullName = newFullName;
    }

    get balance() {
        return this.#balance;
    }
    set balance(newBalance) {
        Validator.validateNumber(
            newBalance,
            "Некоректно введено баланс рахунку"
        );
        this.#balance = newBalance;
    }

    addMoney(moneyAmount) {
        return (this.balance += moneyAmount);
    }

    removeMoney(moneyAmount) {
        return (this.balance -= moneyAmount);
    }

    toString() {
        return `На балансі у вас - ${this.balance} грн`;
    }
}

// Клас для золотого клієнта, що наслідує базовий клас Client
class GoldenClient extends Client {
    #creditLimit;
    #creditPercent;

    constructor(id, fullName, balance, creditLimit, creditPercent) {
        super(id, fullName, balance);
        this.creditLimit = creditLimit;
        this.creditPercent = creditPercent;
    }

    get creditLimit() {
        return this.#creditLimit;
    }
    set creditLimit(newCreditLimit) {
        Validator.validateNumber(
            newCreditLimit,
            "Некоректно введено кредитний ліміт"
        );
        this.#creditLimit = newCreditLimit;
    }

    get creditPercent() {
        return this.#creditPercent;
    }
    set creditPercent(newCreditPercent) {
        Validator.validateNumber(
            newCreditPercent,
            "Некоректно введено відсоток кредиту"
        );
        this.#creditPercent = newCreditPercent;
    }

    removeMoney(moneyAmount) {
        const newBalance = this.balance - moneyAmount;
        if (newBalance >= -this.creditLimit) {
            this.balance = newBalance;
            return this.balance;
        } else {
            throw new Error(
                "Неможливо зняти більше ніж дозволено кредитним лімітом."
            );
        }
    }

    getCreditPenalty() {
        let penalty = 0;
        if (this.balance < 0) {
            const userCredit = Math.abs(this.balance);
            penalty = userCredit * (this.#creditPercent / 100);
        }
        return penalty;
    }
}

// Приклад використання
try {
    const c = new Client(1, "Сидоренко Олена", 25000);
    console.log(c.toString()); // Виведе: "На балансі у вас - 25000 грн"

    c.addMoney(7500);
    console.log(c.toString()); // Виведе: "На балансі у вас - 32500 грн"

    c.removeMoney(15000);
    console.log(c.toString()); // Виведе: "На балансі у вас - 17500 грн"

    const c1 = new GoldenClient(2, "Сидоренко Олена", 25000, 5000, 4);
    console.log(c1.toString()); // Виведе: "На балансі у вас - 25000 грн"

    c1.removeMoney(30000); // Знімаємо 30000, з яких 5000 - кредит
    console.log(c1.toString()); // Виведе: "На балансі у вас - -5000 грн"
    console.log(c1.getCreditPenalty()); // Виведе: 200 (4% від 5000)

    c1.removeMoney(3000); // Це повинно викликати помилку
    console.log(c1.getCreditPenalty());
} catch (error) {
    console.log(error); // Виведе помилку: "Неможливо зняти більше ніж дозволено кредитним лімітом."
}
