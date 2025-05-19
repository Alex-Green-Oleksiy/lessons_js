"use strict";

//Задача 6. Дано інформацію про відвідувачів деякого сайту
//  (для кожного відвідувача зберігається логін).
//  Підрахувати для кожного клієнта кількість відвідувань.

function countNumberVisitsEachClient(loginList) {
    const resMap = new Map();
    for (const client of loginList) {
        if (resMap.has(client)) {
            resMap.set(client, resMap.get(client) + 1);
        } else resMap.set(client, 1);
    }
    return resMap;
}

const loginList = [
    "john_doe",
    "mike.smith",
    "user123",
    "john_doe",
    "alice_2023",
    "mike.smith",
    "sarah_1990",
    "user123",
    "john_doe",
    "mike.smith",
    "user123",
    "john_doe",
    "alice_2023",
    "mike.smith",
    "sarah_1990",
    "user123",
    "john_doe",
    "mike.smith",
    "user123",
    "john_doe",
    "alice_2023",
    "mike.smith",
    "sarah_1990"
];

const countNumberVisits = countNumberVisitsEachClient(loginList);
console.log(countNumberVisits);

countNumberVisits.forEach((num, login) => {
    document.write(`<br>${login} - ${num}`);
});
