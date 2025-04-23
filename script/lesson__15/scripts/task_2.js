"use strict";

// Задача 02.
// Задача 2. Створити об’єкт «Авто».
// Авто
// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи(дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

if (confirm("Почати тестування?")) {
    const autoObj = {
        brand: "Jeep",
        tankCapacity: 30,
        availableLiters: 10,
        seatsNumbers: 4,
        passengersNumbers: 2,

        refuelWithSomeAmoutLiters: function (liters) {
            if (this.availableLiters + liters > this.tankCapacity)
                this.availableLiters = this.tankCapacity;
            else this.availableLiters += liters;
        },

        displayPassengersNumbers: function () {
            document.write(
                `Кількість пасажирів складає: ${this.passengersNumbers}`
            );
        },

        addPassengers: function (passengersCount) {
            if (this.passengersNumbers + passengersCount > this.seatsNumbers) {
                alert(`Машина заповнена`);
                this.passengersNumbers = this.seatsNumbers;
            } else this.passengersNumbers += passengersCount;
        },

        removePassengers: function (passengersCount) {
            if (this.passengersNumbers - passengersCount < 0) {
                alert(`Нема кого висаджувати`);
                this.passengersNumbers = 0;
            } else this.passengersNumbers -= passengersCount;
        }
    };
    document.write('<h2>Тестування об`єкта "Авто"</h2>');

    // Заправка
    autoObj.refuelWithSomeAmoutLiters(20);
    document.write(
        `<p>Після заправки 20 літрів: ${autoObj.availableLiters} літрів</p>`
    );

    // Додавання пасажирів
    autoObj.addPassengers(1);
    document.write(
        `<p>Після додавання 1 пасажира: ${autoObj.passengersNumbers} пасажирів</p>`
    );

    // Висадка пасажирів
    autoObj.removePassengers(2);
    document.write(
        `<p>Після висадки 2 пасажирів: ${autoObj.passengersNumbers} пасажирів</p>`
    );

    // Виведення кількості пасажирів
    autoObj.displayPassengersNumbers();
}
