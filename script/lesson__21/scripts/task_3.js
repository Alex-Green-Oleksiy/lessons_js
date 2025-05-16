"use strict";

// Задача 03. Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
// Вивести всіх простих клієнтів;
// Вивести всіх клієнтів GoldenClient;
// Знайти сумарну кількість грошей на рахунку;

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

    static validateArray(arr, message) {
        if (!Array.isArray(arr) || !arr.length) throw new Error(message);
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
        this.balance += moneyAmount;
        return this.balance;
    }

    removeMoney(moneyAmount) {
        this.balance -= moneyAmount;
        return this.balance;
    }

    toString() {
        return `На балансі у вас - ${this.balance} грн`;
    }
}

// Клас для золотого клієнта
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
        }
        throw new Error(
            "Неможливо зняти більше ніж дозволено кредитним лімітом."
        );
    }

    getCreditPenalty() {
        if (this.balance < 0) {
            return Math.abs(this.balance) * (this.creditPercent / 100);
        }
        return 0;
    }
}

// Клас для банку
class Bank {
    #clientData;

    constructor(clientData) {
        this.clientData = clientData;
    }

    get clientData() {
        return this.#clientData;
    }

    set clientData(newClientData) {
        Validator.validateArray(newClientData, "Введенні дані не є масивом");
        this.#clientData = newClientData;
    }

    // Метод для отримання всіх простих клієнтів
    getSimpleClients() {
        return this.clientData.filter(
            (client) =>
                client instanceof Client && !(client instanceof GoldenClient)
        );
    }

    // Метод для отримання всіх золотих клієнтів
    getGoldenClients() {
        return this.clientData.filter(
            (client) => client instanceof GoldenClient
        );
    }

    // Метод для розрахунку загальної суми грошей
    sumTotalMoney() {
        return this.clientData.reduce((sum, client) => sum + client.balance, 0);
    }

    // Метод для виведення інформації про клієнтів
    printClientInfo() {
        console.log("\nПрості клієнти:");
        this.getSimpleClients().forEach((client) =>
            console.log(
                `ID: ${client.id}, ПІБ: ${client.fullName}, Баланс: ${client.balance} грн`
            )
        );

        console.log("\nЗолоті клієнти:");
        this.getGoldenClients().forEach((client) =>
            console.log(
                `ID: ${client.id}, ПІБ: ${client.fullName}, Баланс: ${client.balance} грн, Кредитний ліміт: ${client.creditLimit} грн`
            )
        );

        console.log(`\nЗагальна сума грошей: ${this.sumTotalMoney()} грн`);
    }
}

// Приклад використання
try {
    const bankClients = [
        new Client(1, "Сидоренко Олена", 25000),
        new GoldenClient(2, "Коваленко Михайло", 30000, 5000, 4),
        new Client(3, "Іваненко Марія", 10000),
        new GoldenClient(4, "Петренко Ігор", 15000, 3000, 5),
        new Client(5, "Семененко Олександр", 12000),
        new GoldenClient(6, "Кравченко Наталія", 20000, 4000, 6),
        new Client(7, "Ткаченко Віктор", 8000),
        new GoldenClient(8, "Шевченко Олена", 25000, 6000, 7)
    ];

    const bank = new Bank(bankClients);
    bank.printClientInfo();

    // Додаткові операції
    console.log("\nДодавання грошей простому клієнту:");
    bankClients[0].addMoney(5000);
    console.log(bankClients[0]);

    console.log("\nЗняття грошей золотому клієнту:");
    bankClients[1].removeMoney(35000);
    console.log(bankClients[1]);
    console.log(`Пені за кредит: ${bankClients[1].getCreditPenalty()} грн`);
} catch (error) {
    console.error(error);
}
