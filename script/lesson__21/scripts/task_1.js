"use strict";

class Validator {
    static validateString(value, message) {
        if (!value || typeof value !== "string") throw new TypeError(message);
    }

    static validateNumber(value, message) {
        if (
            value < 0 ||
            !isFinite(value) ||
            isNaN(value) ||
            typeof value !== "number"
        )
            throw new Error(message);
    }
}

class Person {
    #name;
    #age;
    #address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    get name() {
        return this.#name;
    }
    set name(newName) {
        Validator.validateString(newName, "Некоректно введене ім'я");
        if (newName.trim().length < 2)
            throw new Error("Ім'я повинно містити щонайменше 2 символи");
        this.#name = newName;
    }

    get age() {
        return this.#age;
    }
    set age(newAge) {
        Validator.validateNumber(newAge, "Некоректно введено вік");
        if (newAge <= 0) throw new Error("Вік повинен бути більше 0");
        this.#age = newAge;
    }

    get address() {
        return this.#address;
    }
    set address(newAddress) {
        Validator.validateString(newAddress, "Некоректно введено адресу");
        if (newAddress.trim().length < 2)
            throw new Error("Адреса повинна містити щонайменше 2 символи");
        this.#address = newAddress;
    }

    getBirthdayYear() {
        const presentYear = new Date().getFullYear();
        return presentYear - this.age;
    }

    toString() {
        return `Ви народилися у ${this.getBirthdayYear()} році.`;
    }

    static fromJSON(json) {
        return new Person(json.name, json.age, json.address);
    }
}

class Worker extends Person {
    #position;
    #salary;
    #taxPercent;

    constructor(name, age, address, position, salary, taxPercent) {
        super(name, age, address);
        this.position = position;
        this.salary = salary;
        this.taxPercent = taxPercent;
    }

    get position() {
        return this.#position;
    }
    set position(newPosition) {
        Validator.validateString(newPosition, "Некоректно введено посаду");
        if (newPosition.trim().length < 2)
            throw new Error("Посада повинна містити щонайменше 2 символи");
        this.#position = newPosition;
    }

    get salary() {
        return this.#salary;
    }
    set salary(newSalary) {
        Validator.validateNumber(
            newSalary,
            "Некоректно введене розмір заробітної плати"
        );
        if (newSalary <= 0) throw new Error("Зарплата повинна бути більше 0");
        this.#salary = newSalary;
    }

    get taxPercent() {
        return this.#taxPercent;
    }
    set taxPercent(newTaxPercent) {
        Validator.validateNumber(
            newTaxPercent,
            "Некоректно введено розмір податків"
        );
        if (newTaxPercent < 0 || newTaxPercent > 100)
            throw new Error("Відсоток податку повинен бути від 0 до 100");
        this.#taxPercent = newTaxPercent;
    }

    getYearOutcome() {
        return this.salary * 12 - this.getTaxAmount();
    }

    getTaxAmount() {
        return (this.taxPercent / 100) * this.salary * 12;
    }

    getInfo() {
        return `${this.name}, ${this.age} років, ${this.position}, зарплата: ${this.salary}$, податок: ${this.taxPercent}%`;
    }

    static fromJSON(json) {
        return new Worker(
            json.name,
            json.age,
            json.address,
            json.position,
            json.salary,
            json.taxPercent
        );
    }
}

const person = new Person("Олена", 25, "Київ");
console.log(person.toString());

const worker = new Worker("Микола", 32, "Львів", "Програміст", 120000, 18);
console.log(worker.getInfo()); //  Микола, 32 років, Програміст, зарплата: 120000$, податок: 18%
console.log(worker.getYearOutcome()); //  1224000
console.log(worker.getTaxAmount()); // 259200

// Створення з JSON
const workerFromJSON = Worker.fromJSON({
    name: "Марія",
    age: 28,
    address: "Харків",
    position: "Дизайнер",
    salary: 90000,
    taxPercent: 18
});
console.log(workerFromJSON.getInfo()); // Марія, 28 років, Дизайнер, зарплата: 90000$, податок: 18%

// Функції для тестування
function assert(condition, message) {
    if (condition) {
        console.log(`✅ ${message}`);
    } else {
        console.error(`❌ ${message}`);
    }
}

function assertThrows(fn, message) {
    try {
        fn();
        console.error(`❌ ${message} (Очікувався виняток)`);
    } catch (e) {
        console.log(`✅ ${message} (Очікуваний виняток: ${e.message})`);
    }
}

function runTests() {
    console.log("\n=== Тестування Validator ===");
    assertThrows(
        () => Validator.validateString("", "тестове поле"),
        "Порожній рядок має спричинити виняток"
    );
    assertThrows(
        () => Validator.validateString(123, "тестове поле"),
        "Число замість рядка має спричинити виняток"
    );
    assert(() => {
        Validator.validateString("Олена", "name");
        return true;
    }, "Рядок має пройти валідацію");

    assertThrows(
        () => Validator.validateNumber("abc", "тестове поле"),
        "Рядок замість числа має спричинити виняток"
    );
    assertThrows(
        () => Validator.validateNumber(NaN, "тестове поле"),
        "NaN має спричинити виняток"
    );
    assert(() => {
        Validator.validateNumber(42, "age");
        return true;
    }, "Число має пройти валідацію");

    console.log("\n=== Тестування Person ===");
    const person = new Person("Іван", 45, "Одеса");
    assert(person.name === "Іван", "Геттер name повертає правильне значення");
    assert(person.age === 45, "Геттер age повертає правильне значення");
    assert(
        person.address === "Одеса",
        "Геттер address повертає правильне значення"
    );

    assert(
        person.toString().includes(person.getBirthdayYear()),
        "toString містить рік народження"
    );

    assertThrows(
        () => new Person("", 30, "Київ"),
        "Порожнє ім'я має спричинити виняток"
    );
    assertThrows(
        () => new Person("І", 30, "Київ"),
        "Коротке ім'я (1 символ) має спричинити виняток"
    );
    assertThrows(
        () => new Person("Іван", "not-a-number", "Київ"),
        "Некоректний вік має спричинити виняток"
    );
    assertThrows(
        () => new Person("Іван", -5, "Київ"),
        "Від'ємний вік має спричинити виняток"
    );
    assertThrows(
        () => new Person("Іван", 30, ""),
        "Порожня адреса має спричинити виняток"
    );
    assertThrows(
        () => new Person("Іван", 30, "К"),
        "Коротка адреса (1 символ) має спричинити виняток"
    );

    console.log("\n=== Тестування Worker ===");
    const worker = new Worker(
        "Олександр",
        35,
        "Дніпро",
        "Менеджер",
        150000,
        20
    );

    assert(worker.position === "Менеджер", "Геттер position працює");
    assert(worker.salary === 150000, "Геттер salary працює");
    assert(worker.taxPercent === 20, "Геттер taxPercent працює");

    assert(
        worker.getTaxAmount() === 360000,
        "getTaxAmount повертає правильну суму"
    );
    assert(
        worker.getYearOutcome() === 1440000,
        "getYearOutcome повертає правильну суму"
    );

    assertThrows(
        () => new Worker("Павло", 25, "Запоріжжя", "", 50000, 10),
        "Порожня посада має спричинити виняток"
    );
    assertThrows(
        () => new Worker("Павло", 25, "Запоріжжя", "D", 50000, 10),
        "Коротка посада (1 символ) має спричинити виняток"
    );
    assertThrows(
        () =>
            new Worker(
                "Павло",
                25,
                "Запоріжжя",
                "Продавець",
                "not-a-number",
                10
            ),
        "Некоректна зарплата має спричинити виняток"
    );
    assertThrows(
        () => new Worker("Павло", 25, "Запоріжжя", "Продавець", -5000, 10),
        "Від'ємна зарплата має спричинити виняток"
    );
    assertThrows(
        () =>
            new Worker("Павло", 25, "Запоріжжя", "Продавець", 50000, "bad-tax"),
        "Некоректний податок має спричинити виняток"
    );
    assertThrows(
        () => new Worker("Павло", 25, "Запоріжжя", "Продавець", 50000, -1),
        "Від'ємний податок має спричинити виняток"
    );
    assertThrows(
        () => new Worker("Павло", 25, "Запоріжжя", "Продавець", 50000, 101),
        "Податок більше 100% має спричинити виняток"
    );
}

// Запуск тестів
runTests();
