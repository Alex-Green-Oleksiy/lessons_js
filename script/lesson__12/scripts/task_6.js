"use strict";

// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
//  чи є у масиві ім’я довжиною 5 символів і під яким індексом.

let names = [
    "Jackie",
    "Jimm",
    "Mary",
    "Dooley",
    "Dollyn",
    "Telly",
    "Nally",
    "Ollie",
    "Molly",
    "Mark"
];

function getSortArr(namesList) {
    for (let i = 1; i < namesList.length; i++) {
        const currentEl = namesList[i];
        let prevIndex = i - 1;
        while (prevIndex >= 0 && namesList[prevIndex] > currentEl) {
            namesList[prevIndex + 1] = namesList[prevIndex];
            prevIndex--;
        }
        namesList[prevIndex + 1] = currentEl;
    }
    return namesList;
}

const namesList = getSortArr(names);

function isNameLengthInNamesList(namesList, nameLength = 5) {
    let startIndex = 0;
    let lastIndex = namesList.length - 1;
    while (startIndex <= lastIndex) {
        const middle = Math.floor((startIndex + lastIndex) / 2);
        if (namesList[middle].length === nameLength) return middle;
        if (namesList[middle].length < nameLength) startIndex = middle + 1;
        if (namesList[middle].length > nameLength) lastIndex = middle - 1;
    }
    return -1;
}
const isNameLength5SymbolsInArr = isNameLengthInNamesList(namesList);
if (isNameLength5SymbolsInArr !== -1)
    document.write(
        `<p>${names}</p> </br> <p>Перше ім'я довжиною 5 символів знайдено під ${isNameLength5SymbolsInArr}-м індексом масиву</p>`
    );
else document.write(`Ім'я довжиною 5 символів в масиві не знайдено `);
