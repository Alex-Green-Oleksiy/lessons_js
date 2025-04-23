"use strict";

// Задача 05. Розробити клас «Керівник танців»
// Поля
// Масив імен хлопців
// Масив імен дівчат

// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців

if (confirm("Почати тестування?")) {
    class DanceDirector {
        constructor(girlsList, boysList) {
            this.girlsList = girlsList;
            this.boysList = boysList;
        }

        chooseRandomGirlIndex() {
            return Math.floor(Math.random() * this.girlsList.length);
        }

        chooseRandomBoyIndex() {
            return Math.floor(Math.random() * this.boysList.length);
        }

        displayTheDancePair() {
            const girl = this.girlsList[this.chooseRandomGirlIndex()];
            const boy = this.boysList[this.chooseRandomBoyIndex()];
            return `
				<p class="dance-pair">Пара для танців: <span>${boy}</span> та <span>${girl}</span></p>
			`;
        }

        run() {
            setInterval(() => {
                document.write(this.displayTheDancePair());
            }, 2000);
        }
    }

    const girlsList = [
        "Olivia",
        "Emma",
        "Sophia",
        "Isabella",
        "Ava",
        "Mia",
        "Charlotte",
        "Amelia",
        "Evelyn",
        "Abigail",
        "Emily",
        "Elizabeth",
        "Mila",
        "Avery",
        "Sofia",
        "Camila",
        "Aria",
        "Scarlett",
        "Victoria",
        "Madison"
    ];
    const boysList = [
        "Liam",
        "Noah",
        "Oliver",
        "Ethan",
        "Lucas",
        "Mason",
        "Logan",
        "Benjamin",
        "Hudson",
        "James",
        "Alexander",
        "Michael",
        "Daniel",
        "Henry",
        "Jackson",
        "Sebastian",
        "Aiden",
        "Matthew",
        "Samuel",
        "David"
    ];

    const res = new DanceDirector(girlsList, boysList);

    res.run();
}
