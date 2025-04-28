"use strict";

function checkNaturalNumber(value, message) {
    if (value <= 0 || isNaN(value) || typeof value !== "number")
        throw new Error(message);
}

class Banknote {
    #banknote;
    #amount;

    constructor(banknote, amount) {
        this.banknote = banknote;
        this.amount = amount;
    }

    get banknote() {
        return this.#banknote;
    }

    set banknote(newBanknote) {
        checkNaturalNumber(newBanknote, "Невірно введений номінал банкноти");
        this.#banknote = newBanknote;
    }

    get amount() {
        return this.#amount;
    }

    set amount(newAmount) {
        checkNaturalNumber(newAmount, "Введено некоректну кількість купюр");
        this.#amount = newAmount;
    }
}

class TBankomat {
    constructor(banknotesList) {
        this.banknotesList = banknotesList;
    }

    getMaxAvailableSum() {
        return this.banknotesList.reduce(
            (prevSum, el) => prevSum + el.banknote * el.amount,
            0
        );
    }

    getMinAvailableSum() {
        return Math.min(
            ...this.banknotesList
                .filter((b) => b.amount > 0)
                .map((b) => b.banknote)
        );
    }

    canWithdraw(moneyAmount) {
        try {
            this.withdrawMoney(moneyAmount);
            return true;
        } catch {
            return false;
        }
    }

    addBanknotes(banknote, amount) {
        const existing = this.banknotesList.find(
            (b) => b.banknote === banknote
        );
        if (existing) {
            existing.amount += amount;
        } else {
            this.banknotesList.push(new Banknote(banknote, amount));
        }
    }

    withdrawMoney(moneyAmount) {
        if (moneyAmount <= 0 || moneyAmount % 5 !== 0) {
            throw new Error("Сума повинна бути додатною та кратною 5 гривням");
        }
        if (moneyAmount > this.getMaxAvailableSum()) {
            throw new Error("В банкоматі не вистачає купюр");
        }

        const sortedList = this.banknotesList
            .slice()
            .sort((a, b) => b.banknote - a.banknote);
        const result = {};

        while (moneyAmount > 0) {
            let found = false;
            for (let el of sortedList) {
                if (el.amount > 0) {
                    const banknoteAmountNeed = Math.floor(
                        moneyAmount / el.banknote
                    );
                    const banknoteAmountTake = Math.min(
                        banknoteAmountNeed,
                        el.amount
                    );

                    if (banknoteAmountTake > 0) {
                        moneyAmount -= banknoteAmountTake * el.banknote;
                        result[el.banknote] =
                            (result[el.banknote] || 0) + banknoteAmountTake;
                        el.amount -= banknoteAmountTake;
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                throw new Error(
                    "Неможливо видати вказану суму наявними купюрами"
                );
            }
        }

        return result;
    }

    getCurrentState() {
        return this.banknotesList.map((b) => ({
            banknote: b.banknote,
            amount: b.amount
        }));
    }
}

function runTests() {
    console.log("🔍 Тести для класів TBankomat та Banknote");

    // Створюємо список купюр
    const banknotes = [
        new Banknote(5, 5), // 25
        new Banknote(10, 5), // 50
        new Banknote(20, 5), // 100
        new Banknote(50, 5), // 250
        new Banknote(100, 5), // 500
        new Banknote(200, 5) // 1000
    ];
    const atm = new TBankomat(banknotes);

    // Тест 1: Максимальна сума
    const maxSum = atm.getMaxAvailableSum();
    console.assert(
        maxSum === 1925,
        `❌ Помилка в getMaxAvailableSum. Очікувалося 1925, отримано ${maxSum}`
    );

    // Тест 2: Мінімальна сума
    const minSum = atm.getMinAvailableSum();
    console.assert(
        minSum === 5,
        `❌ Помилка в getMinAvailableSum. Очікувалося 5, отримано ${minSum}`
    );

    // Тест 3: Успішне зняття
    const result = atm.withdrawMoney(385);
    const expected = { 200: 1, 100: 1, 50: 1, 20: 1, 10: 1, 5: 1 };
    console.assert(
        JSON.stringify(result) === JSON.stringify(expected),
        `❌ Помилка при знятті 385. Отримано: ${JSON.stringify(result)}`
    );

    // Тест 4: Помилка при знятті занадто великої суми
    let errorCaught = false;
    try {
        atm.withdrawMoney(9999);
    } catch (err) {
        errorCaught = true;
    }
    console.assert(
        errorCaught,
        "❌ Очікувалася помилка при знятті суми, більшої за наявну"
    );

    // Тест 5: Некоректний номінал
    try {
        new Banknote(-10, 5);
        console.error("❌ Помилка: некоректний номінал не викликав винятку");
    } catch (e) {
        console.log("✅ Тест на некоректний номінал пройдено");
    }

    // Тест 6: Некоректна кількість купюр
    try {
        new Banknote(10, -5);
        console.error(
            "❌ Помилка: некоректна кількість купюр не викликала винятку"
        );
    } catch (e) {
        console.log("✅ Тест на некоректну кількість купюр пройдено");
    }

    // Тест 7: Сума не кратна 5
    try {
        atm.withdrawMoney(387);
        console.error("❌ Помилка: некоректна сума не викликала винятку");
    } catch (e) {
        console.log("✅ Тест на некоректну суму пройдено");
    }

    // Тест 8: Поповнення банкнот
    atm.addBanknotes(200, 2);
    console.assert(
        atm.getCurrentState().find((b) => b.banknote === 200).amount === 7,
        "❌ Помилка при поповненні банкнот"
    );

    // Тест 9: Перевірка можливості зняття
    console.assert(
        atm.canWithdraw(385),
        "❌ Помилка в перевірці можливості зняття"
    );
    console.assert(
        !atm.canWithdraw(9999),
        "❌ Помилка в перевірці можливості зняття"
    );

    console.log("✅ Усі тести завершено");
}

// Приклад використання
try {
    const banknotesList = [
        new Banknote(5, 5),
        new Banknote(10, 5),
        new Banknote(20, 5),
        new Banknote(50, 5),
        new Banknote(100, 5),
        new Banknote(200, 5)
    ];
    const atm = new TBankomat(banknotesList);

    document.write(`
        <h2>Поточний стан банкомата</h2>
        <p>Максимальна сума складає <span>${atm.getMaxAvailableSum()} грн</span></p>
        <p>Мінімальна сума складає <span>${atm.getMinAvailableSum()} грн</span></p>
    `);

    console.log("Зняття 385 грн:");
    console.log(atm.withdrawMoney(385));
    console.log("Поточний стан банкомата:");
    console.log(atm.getCurrentState());
} catch (error) {
    document.write(error);
}

// Запуск тестів
runTests();
