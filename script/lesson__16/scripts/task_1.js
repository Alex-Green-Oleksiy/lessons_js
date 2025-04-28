"use strict";

// Клас для роботи з датами у форматі "день.місяць.рік"
class TDate {
    #day;
    #month;
    #year;

    constructor(day, month, year) {
        if (year < 1) throw new Error("Такого року не існує");
        if (month < 1 || month > 12) throw new Error("Такого місяця не існує");
        this.#year = year;
        this.#month = month;
        this.#day = day;
        if (day < 1 || day > this.getDaysNumsInMonth())
            throw new Error("Такого дня не існує");
    }

    get Day() {
        return this.#day;
    }
    set Day(newDay) {
        if (newDay > this.getDaysNumsInMonth() || newDay < 1)
            throw new Error("Такого дня не існує");
        this.#day = newDay;
    }

    get Month() {
        return this.#month;
    }
    set Month(newMonth) {
        if (newMonth > 12 || newMonth < 1)
            throw new Error("Такого місяця не існує");
        this.#month = newMonth;
        if (this.#day > this.getDaysNumsInMonth()) {
            this.#day = this.getDaysNumsInMonth();
        }
    }

    get Year() {
        return this.#year;
    }
    set Year(newYear) {
        if (newYear < 1) throw new Error("Такого року не існує");
        this.#year = newYear;
        if (this.#day > this.getDaysNumsInMonth()) {
            this.#day = this.getDaysNumsInMonth();
        }
    }

    // Кількість днів у місяці
    getDaysNumsInMonth() {
        const daysCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (this.isLeapYear() && this.#month === 2) return 29;
        return daysCount[this.#month - 1];
    }

    // Чи рік високосний
    isLeapYear() {
        return (
            this.#year % 4 === 0 &&
            (this.#year % 100 !== 0 || this.#year % 400 === 0)
        );
    }

    // Додавання днів
    addDays(daysNum) {
        if (daysNum < 0)
            throw new Error("Кількість днів не може бути від'ємною");
        let day = this.#day + daysNum;
        let month = this.#month;
        let year = this.#year;

        while (true) {
            let daysInMonth = new TDate(1, month, year).getDaysNumsInMonth();
            if (day <= daysInMonth) break;
            day -= daysInMonth;
            month++;
            if (month > 12) {
                month = 1;
                year++;
            }
        }
        this.#day = day;
        this.#month = month;
        this.#year = year;
        return this.toString();
    }

    // Віднімання днів
    removeDays(daysNum) {
        if (daysNum < 0)
            throw new Error("Кількість днів не може бути від'ємною");
        let day = this.#day - daysNum;
        let month = this.#month;
        let year = this.#year;

        while (day < 1) {
            month--;
            if (month < 1) {
                month = 12;
                year--;
                if (year < 1) throw new Error("Рік не може бути менше 1");
            }
            let daysInMonth = new TDate(1, month, year).getDaysNumsInMonth();
            day += daysInMonth;
        }
        this.#day = day;
        this.#month = month;
        this.#year = year;
        return this.toString();
    }

    // Додавання місяців
    addMonths(monthNum) {
        if (monthNum < 0)
            throw new Error("Кількість місяців не може бути від'ємною");
        let totalMonths = (this.#year - 1) * 12 + (this.#month - 1) + monthNum;
        let year = Math.floor(totalMonths / 12) + 1;
        let month = (totalMonths % 12) + 1;
        let day = this.#day;
        let daysInMonth = new TDate(1, month, year).getDaysNumsInMonth();
        if (day > daysInMonth) day = daysInMonth;
        this.#year = year;
        this.#month = month;
        this.#day = day;
        return this.toString();
    }

    // Віднімання місяців
    removeMonths(monthNum) {
        if (monthNum < 0)
            throw new Error("Кількість місяців не може бути від'ємною");
        let totalMonths = (this.#year - 1) * 12 + (this.#month - 1) - monthNum;
        if (totalMonths < 0) throw new Error("Рік не може бути менше 1");
        let year = Math.floor(totalMonths / 12) + 1;
        let month = (totalMonths % 12) + 1;
        let day = this.#day;
        let daysInMonth = new TDate(1, month, year).getDaysNumsInMonth();
        if (day > daysInMonth) day = daysInMonth;
        this.#year = year;
        this.#month = month;
        this.#day = day;
        return this.toString();
    }

    // Додавання років
    addYears(yearNum) {
        if (yearNum < 0)
            throw new Error("Кількість років не може бути від'ємною");
        let year = this.#year + yearNum;
        let day = this.#day;
        let daysInMonth = new TDate(1, this.#month, year).getDaysNumsInMonth();
        if (day > daysInMonth) day = daysInMonth;
        this.#year = year;
        this.#day = day;
        return this.toString();
    }

    // Віднімання років
    removeYears(yearNum) {
        if (yearNum < 0)
            throw new Error("Кількість років не може бути від'ємною");
        let year = this.#year - yearNum;
        if (year < 1) throw new Error("Рік не може бути менше 1");
        let day = this.#day;
        let daysInMonth = new TDate(1, this.#month, year).getDaysNumsInMonth();
        if (day > daysInMonth) day = daysInMonth;
        this.#year = year;
        this.#day = day;
        return this.toString();
    }

    // Форматування дати
    toString() {
        return `${this.#day.toString().padStart(2, "0")}.${this.#month
            .toString()
            .padStart(2, "0")}.${this.#year}`;
    }
}

// Тестування
function testTDate() {
    try {
        console.log("Початкова дата:", new TDate(15, 5, 2023).toString());
        let date = new TDate(15, 5, 2023);

        date.addDays(10);
        console.log("Після додавання 10 днів:", date.toString());

        date.removeDays(20);
        console.log("Після вилучення 20 днів:", date.toString());

        date.addMonths(1);
        console.log("Після додавання 1 місяця:", date.toString());

        date.removeMonths(2);
        console.log("Після вилучення 2 місяців:", date.toString());

        date.addYears(1);
        console.log("Після додавання 1 року:", date.toString());

        date.removeYears(2);
        console.log("Після вилучення 2 років:", date.toString());

        const leapYear = new TDate(29, 2, 2024);
        console.log("Високосний рік (2024):", leapYear.toString());

        const nonLeapYear = new TDate(28, 2, 2023);
        console.log("Невисокосний рік (2023):", nonLeapYear.toString());

        // Додаткові тести
        let d2 = new TDate(31, 1, 2023);
        d2.addMonths(1);
        console.log("31.01.2023 + 1 місяць:", d2.toString()); // 28.02.2023

        let d3 = new TDate(1, 3, 2023);
        d3.removeMonths(1);
        console.log("01.03.2023 - 1 місяць:", d3.toString()); // 01.02.2023

        let d4 = new TDate(1, 1, 2023);
        d4.removeMonths(1);
        console.log("01.01.2023 - 1 місяць:", d4.toString()); // 01.12.2022

        let d5 = new TDate(29, 2, 2024);
        d5.removeYears(1);
        console.log("29.02.2024 - 1 рік:", d5.toString()); // 28.02.2023
    } catch (error) {
        console.error("Помилка:", error.message);
    }
}

// Запуск тестів
testTDate();
