"use strict";

// Задача 5.  Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
//  чи є у масиві ім’я «Olga» і під яким індексом.

let names = [
    "John",
    "Maggy",
    "Sarah",
    "Olga",
    "Jack",
    "Mike",
    "Tom",
    "Lora",
    "Nataly",
    "Terry",
    "Oliver",
    "Olivia",
    "Steven"
];

function getSortArr(namesList) {
    const prevLastEl = namesList.length - 2;
    for (let i = 0; i <= prevLastEl; i++) {
        let minIndex = i;
        for (let j = i + 1; j < namesList.length; j++) {
            if (namesList[j] < namesList[minIndex]) minIndex = j;
        }
        if (minIndex !== i) {
            [namesList[i], namesList[minIndex]] = [
                namesList[minIndex],
                namesList[i]
            ];
        }
    }
    return namesList;
}
const namesList = getSortArr(names);

function isNameInNamesList(namesList, name = "Olga") {
    let startIndex = 0;
    let lastIndex = namesList.length - 1;
    while (startIndex <= lastIndex) {
        const middle = Math.floor((startIndex + lastIndex) / 2);
        if (namesList[middle] === name) return middle;
        if (namesList[middle] < name) startIndex = middle + 1;
        if (namesList[middle] > name) lastIndex = middle - 1;
    }
    return -1;
}
const searchName = prompt(`Введіть ім'я яке шукаєте :`, "");
const isNameInArr = isNameInNamesList(namesList, searchName);
if (isNameInArr !== -1)
    document.write(
        `<p>${names}</p><p>Ім'я ${searchName} знайдено на ${isNameInArr}-му індексі масиву</p>`
    );
else document.write(`Ім'я не знайдено в масиві `);
