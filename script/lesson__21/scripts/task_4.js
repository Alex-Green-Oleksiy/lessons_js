"use strict";
// Задача 04.Задача 3. Розробити Класи
// House
// Dog
// Bird
// --- властивості-- -
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи-- -
// генерування елемента розмітки
// оновлення через вказаний інтервал(збільшення або зменшення масштабу(об’єкт не рухається)

// --- властивості-- -
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи-- -
// генерування елемента розмітки
// оновлення через вказаний інтервал(випадкове зміщення по горизонталі(зміна координати Х))

// --- властивості-- -
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення
// --- методи-- -
// генерування елемента розмітки
// оновлення через вказаний інтервал(випадкове переміщення у довільному напрямку)

// Подумайте яким має бути спільний клас предок.

// Клас для валідації
class Validator {
    static validateString(value, message) {
        if (!value || typeof value !== "string") throw new TypeError(message);
    }

    static validateNumber(value, message) {
        if (!isFinite(value) || isNaN(value) || typeof value !== "number")
            throw new Error(message);
    }
}

// Базовий клас для всіх рухомих об'єктів
class MovableObject {
    #coordX;
    #coordY;
    #srcImage;
    #updatingInterval;
    #el;

    constructor(coordX, coordY, srcImage, updatingInterval) {
        this.coordX = coordX;
        this.coordY = coordY;
        this.srcImage = srcImage;
        this.updatingInterval = updatingInterval;
    }

    get coordX() {
        return this.#coordX;
    }
    set coordX(newCoordX) {
        Validator.validateNumber(
            newCoordX,
            "Некоректно вказано значення координати X"
        );
        this.#coordX = newCoordX;
    }

    get coordY() {
        return this.#coordY;
    }
    set coordY(newCoordY) {
        Validator.validateNumber(
            newCoordY,
            "Некоректно вказано значення координати Y"
        );
        this.#coordY = newCoordY;
    }

    get srcImage() {
        return this.#srcImage;
    }
    set srcImage(newSrcImage) {
        Validator.validateString(
            newSrcImage,
            "Некоректно введено шлях до зображення"
        );
        this.#srcImage = newSrcImage;
    }

    get updatingInterval() {
        return this.#updatingInterval;
    }
    set updatingInterval(newUpdatingInterval) {
        Validator.validateNumber(
            newUpdatingInterval,
            "Некоректно вказано значення інтервалу оновлення"
        );
        this.#updatingInterval = newUpdatingInterval;
    }

    get element() {
        return this.#el;
    }

    renderElement() {
        const div = document.createElement("div");
        div.style.width = "100px";
        div.style.aspectRatio = "1";
        div.style.position = "absolute";
        div.style.top = `${this.coordY}%`;
        div.style.left = `${this.coordX}%`;
        div.style.backgroundImage = `url(${this.srcImage})`;
        div.style.backgroundPosition = "center";
        div.style.backgroundSize = "cover";
        div.style.backgroundRepeat = "no-repeat";
        div.style.transition = "all 0.5s ease";

        this.#el = div;
    }

    render(containerSelector) {
        this.renderElement();
        const container = document.querySelector(containerSelector);
        if (!container) {
            throw new Error(`Контейнер ${containerSelector} не знайдено`);
        }
        container.append(this.#el);
    }
}

// Клас для планети 1 (обертання)
class Planet1 extends MovableObject {
    constructor(coordX = 50, coordY = 50, srcImage, updatingInterval) {
        super(coordX, coordY, srcImage, updatingInterval);
    }

    move() {
        let angle = 0;
        setInterval(() => {
            angle += Math.random() * 10 - 5;
            angle = angle % 360;
            if (angle < 10) angle += 360;
            this.element.style.transform = `rotate(${angle}deg)`;
        }, this.updatingInterval);
    }
}

// Клас для планети 2 (горизонтальний рух)
class Planet2 extends MovableObject {
    constructor(coordX = 50, coordY = 50, srcImage, updatingInterval) {
        super(coordX, coordY, srcImage, updatingInterval);
    }

    move() {
        setInterval(() => {
            const deltaX = Math.floor(Math.random() * 40);
            Math.random() > 0.5
                ? (this.coordX += deltaX)
                : (this.coordX -= deltaX);
            this.element.style.left = `${this.coordX}%`;
        }, this.updatingInterval);
    }
}

// Ініціалізація об'єктів
const h = new Planet1(50, 50, "../img/planet1.png", 1000);
h.render(".planet1-container");
h.move();

const d = new Planet2(50, 50, "../img/planet4.png", 1000);
d.render(".planet2-container");
d.move();
