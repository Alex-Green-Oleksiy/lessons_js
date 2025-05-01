"use strict";

// Масив зі списком бажань
const wishList = [
    "Відвідати всі континенти",
    "Опублікувати наукову роботу, яка вплине на світ",
    "Започаткувати благодійний фонд",
    "Стати частиною міжнародної миротворчої ініціативи",
    "Заснувати компанію, яка змінить індустрію",
    "Створити винахід, що покращить життя мільйонів",
    "Виступити на TED Talks з надихаючою промовою",
    "Написати книгу, що стане бестселером",
    "Допомогти врятувати рідкісні види тварин",
    "Залишити після себе спадщину, що вплине на майбутні покоління"
];
// Функція для отримання випадкового бажання
function getRandomWish(arr) {
    let randomWishInd = Math.floor(Math.random() * arr.length);
    return arr[randomWishInd];
}

// Функція для створення контейнера з бажанням
function createWishContainer(wish) {
    let div = document.createElement("div");
    div.className = "wish-container";

    let h2 = document.createElement("h2");
    h2.innerText = wish;
    div.append(h2);

    return div;
}

// Основна функція для відображення випадкових бажань
function getRandomWishList(repetition = 3) {
    let container = document.getElementById("myContainer");
    for (let index = 0; index < repetition; index++) {
        let wish = getRandomWish(wishList);
        let wishContainer = createWishContainer(wish);
        container.append(wishContainer);
    }
}

// Підключення обробника завантаження сторінки
window.onload = function () {
    if (confirm("Почати тестування?")) {
        getRandomWishList();
    }
};
