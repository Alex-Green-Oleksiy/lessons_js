"use strict";

//Задача 2. Дано Shop  -- клас, що містить список товарів
//  (масив об’єктів класу Product (назва, ціна, кількість одиниць).
//  Додати можливість ітератора до класу Shop, щоб при ітеруванні для
//  кожного елемента виводився рядок «товар-загальна вартість»

// Клас Product
class Product {
    // Конструктор приймає назву, ціну та кількість товару
    constructor(name, price, quantity) {
        // Перевірка валідності введених даних
        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("Назва товару повинна бути непорожнім рядком");
        }
        if (typeof price !== "number" || price <= 0) {
            throw new Error("Ціна повинна бути додатнім числом");
        }
        if (typeof quantity !== "number" || quantity <= 0) {
            throw new Error("Кількість повинна бути додатнім числом");
        }

        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Метод для конвертації об'єкта в примітивний тип
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case "number": // При конвертації в число повертає загальну вартість
                return this.price * this.quantity;
            case "string": // При конвертації в рядок повертає назву
                return this.name;
            default:
                return this.name;
        }
    }
}

// Клас Shop представляє магазин зі списком товарів
class Shop {
    // Конструктор приймає масив товарів
    constructor(products) {
        this.products = products;
    }

    // Метод для створення ітератора
    [Symbol.iterator]() {
        this.startInd = 0;
        return this;
    }

    // Метод для отримання наступного елемента
    next() {
        if (this.startInd < this.products.length) {
            const product = this.products[this.startInd++];
            // Повертає рядок у форматі "назва товару - загальна вартість"
            return {
                done: false,
                value: `${product} - ${+product}`
            };
        } else {
            return { done: true };
        }
    }

    // Метод для підрахунку загальної кількості товарів
    getTotalQuantity() {
        return this.products.reduce(
            (total, product) => total + product.quantity,
            0
        );
    }

    // Метод для підрахунку загальної вартості всіх товарів
    getTotalValue() {
        return this.products.reduce((total, product) => total + +product, 0);
    }
}

const products = [
    new Product("Косметичка для макіяжу", 150, 20),
    new Product("Зеркало з підсвіткою", 250, 15),
    new Product("Набір кисток для макіяжу", 120, 30),
    new Product("Макіяжна підстава", 80, 40),
    new Product("Туш для вій", 60, 50),
    new Product("Консилер", 70, 35),
    new Product("Рум'яна", 50, 60),
    new Product("Пудра", 90, 45),
    new Product("Палітка тінів", 180, 25)
];

const shop = new Shop(products);

for (const product of shop) {
    document.write(`${product}<br>`);
}

document.write(
    `<br>Загальна кількість товарів: ${shop.getTotalQuantity()}<br>`
);
document.write(`Загальна вартість товарів: ${shop.getTotalValue()}<br>`);
