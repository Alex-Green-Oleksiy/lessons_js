"use strict";

//Задача 4.  Дано список URL адрес. Підрахувати кількість адрес,
// що відносяться до кожного із доменів (edu, com, org,...).

"use strict";

// Функція для отримання доменів зі списку URL
function getDomains(siteList) {
    // Для кожного URL знаходимо останнє входження символу "."
    // та отримуємо домен
    return siteList.map((site) => {
        const ind = site.lastIndexOf(".");
        return site.slice(ind + 1);
    });
}

// Функція для підрахунку кількості адрес для кожного домену
function countNumberAddresses(siteList) {
    // Отримуємо список всіх доменів
    const domainsList = getDomains(siteList);

    // Створюємо Map для зберігання результатів
    const res = new Map();

    // Для кожного домену збільшуємо його лічильник
    for (const domain of domainsList) {
        if (res.has(domain)) {
            res.set(domain, res.get(domain) + 1);
        } else {
            res.set(domain, 1);
        }
    }

    return res;
}

// Приклад списку URL адрес
const siteList = [
    "https://google.com",
    "https://ukr.net",
    "https://facebook.com",
    "https://instagram.com",
    "https://youtube.com",
    "https://github.com",
    "https://wikipedia.org",
    "https://twitter.com",
    "https://linkedin.com",
    "https://microsoft.com",
    "https://apple.com",
    "https://amazon.com",
    "https://openai.com",
    "https://github.io",
    "https://edu.ua",
    "https://edu.com",
    "https://edu.org",
    "https://vk.com",
    "https://telegram.org",
    "https://tiktok.com",
    "https://pinterest.com",
    "https://adobe.com",
    "https://oracle.com",
    "https://ibm.com",
    "https://ibm.org",
    "https://ibm.edu",
    "https://ibm.ua",
    "https://ibm.io",
    "https://ibm.com.ua",
    "https://ibm.org.ua",
    "https://ibm.edu.ua",
    "https://ibm.ru.ua",
    "https://ibm.io.ua"
];

// Виводимо список адрес
document.write(`Список URL адрес:<br>${siteList.join("<br>")}`);

// Підраховуємо кількість адрес для кожного домену
const resCountDomains = countNumberAddresses(siteList);

resCountDomains.forEach((num, domain) => {
    document.write(`<br>${domain} - ${num} шт`);
});
