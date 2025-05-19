"use strict";

//Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string,
// при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

class PhoneNumber {
    constructor(numberPhone) {
        this.numberPhone = numberPhone;
    }

    getNameOperator() {
        const num = this.numberPhone.replace(/\s|-/g, "");
        let res;

        if (/^\+?3?8?\(?(?:050|066|095|099|075)\)?\d{7}$/.test(num))
            res = "Vodafone";
        else if (/^\+?3?8?\(?(?:067|068|096|097|098)\)?\d{7}$/.test(num))
            res = "Kyivstar";
        else if (/^\+?3?8?\(?(?:063|073|093|077)\)?\d{7}$/.test(num))
            res = "lifecell";
        else res = "Оператор невідомий";

        return res;
    }

    [Symbol.toPrimitive](hint) {
        return hint === "string" ? this.getNameOperator() : this.numberPhone;
    }
}

// Тести
const numberPhone1 = new PhoneNumber("050-123-45-67");
const numberPhone2 = new PhoneNumber("+38(067)123-45-67");
const numberPhone3 = new PhoneNumber("063 123 45 67");
const numberPhone4 = new PhoneNumber("0121234567");

console.log(numberPhone1);
console.log(numberPhone2);
console.log(numberPhone3);
console.log(numberPhone4);
