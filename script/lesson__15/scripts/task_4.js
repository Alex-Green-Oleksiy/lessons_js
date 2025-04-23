"use strict";

// Задача 04. Розробити клас Baner
// Поля
// Масив об’єктів(графічних зображень та посилань на сайти)

// методи
// Метод випадкового вибору об’єкта(графічного зображення та посилання)
// Метод виведення випадкового банера

if (confirm("Почати тестування?")) {
    class Baner {
        constructor(arr) {
            this.arr = arr;
        }

        chooseRandomBanerIndex() {
            return Math.floor(Math.random() * this.arr.length);
        }

        displayRandomBaner() {
            const randomNum = this.chooseRandomBanerIndex();
            const selectedBaner = this.arr[randomNum];

            return `
		<img src="${selectedBaner.image}" alt="Baner">
		<a href="${selectedBaner.link}" target="_blank">Visit Baner Website</a>
		`;
        }
    }

    const arr = [
        {
            image: "https://img.freepik.com/free-vector/abstract-background-with-geometric-shapes_23-2148826952.jpg",
            link: "https://www.example1.com"
        },
        {
            image: "https://img.freepik.com/free-vector/gradient-geometric-shapes-banner_23-2148826960.jpg",
            link: "https://www.example2.com"
        },
        {
            image: "https://img.freepik.com/free-vector/abstract-curved-shapes-banner_23-2148826956.jpg",
            link: "https://www.example3.com"
        },
        {
            image: "https://img.freepik.com/free-vector/abstract-banner-with-geometric-shapes_23-2148826958.jpg",
            link: "https://www.example4.com"
        },
        {
            image: "https://img.freepik.com/free-vector/abstract-banner-with-geometric-shapes_23-2148826954.jpg",
            link: "https://www.example5.com"
        }
    ];

    const res = new Baner(arr);
    document.write(res.displayRandomBaner());
    document.write(res.displayRandomBaner());
    document.write(res.displayRandomBaner());
}
