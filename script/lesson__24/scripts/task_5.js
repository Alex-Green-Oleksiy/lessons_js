"use strict";

//Задача 5. Дано масив книг (назва, рік видання, автор, ціна).
//  Підрахувати загальну вартість книг для кожного із авторів.

function calculatTotalCostBooksEachAuthor(listBooks) {
    const resMap = new Map();
    for (const book of listBooks) {
        if (resMap.has(book.author))
            resMap.set(book.author, resMap.get(book.author) + book.price);
        else resMap.set(book.author, book.price);
    }
    return resMap;
}

const listBooks = [
    {
        title: "Чорний лебідь",
        year: 2014,
        author: "Нассім Талеб",
        price: 499
    },
    {
        title: "Біла гвардія",
        year: 1926,
        author: "Михайло Булгаков",
        price: 299
    },
    {
        title: "Мастер і Маргарита",
        year: 1966,
        author: "Михайло Булгаков",
        price: 399
    },
    {
        title: "48 законів влади",
        year: 2000,
        author: "Роберт Грен",
        price: 599
    }
];

const totalCost = calculatTotalCostBooksEachAuthor(listBooks);
document.write(`Загальна вартість книг для кожного автора:<br>`);

totalCost.forEach((cost, author) => {
    document.write(`<br>${author} - ${cost} грн`);
});
