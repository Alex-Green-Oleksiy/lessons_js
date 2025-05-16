// Завдання 3.

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

// Завдання 3.

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
function getElement(id) {
    return document.getElementById(id);
}

function getStringsWithDigits(arr, idData, idResult) {
    const regex = /\d/;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = arr.join(", ");
    result.innerText = arr.filter((item) => regex.test(item)).join(", ");
}

const strTest1 = [
    "Kyiv",
    "Lviv2023",
    "Kharkiv",
    "Dnipro1991",
    "Odessa",
    "Zaporizhzhia"
];

getStringsWithDigits(strTest1, "data1", "result1");

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
function getStringsWithoutDigits(arr, idData, idResult) {
    const regex = /\d/;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = arr.join(", ");
    result.innerText = arr.filter((item) => !regex.test(item)).join(", ");
}

const strTest2 = [
    "Kyiv",
    "Lviv2023",
    "Kharkiv",
    "Dnipro1991",
    "Odessa",
    "Zaporizhzhia"
];

getStringsWithoutDigits(strTest2, "data2", "result2");

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
function getStringsWithVowels(arr, idData, idResult) {
    const regex = /[aeiou]/i;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = arr.join(", ");
    result.innerText = arr.filter((item) => regex.test(item)).join(", ");
}

const strTest3 = [
    "Lviv",
    "Kharkiv",
    "Dnipro",
    "Zaporizhzhia",
    "Kyiv",
    "Tsktsk",
    "Aya",
    "Ou"
];

getStringsWithVowels(strTest3, "data3", "result3");

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
function getStringsWithoutVowels(arr, idData, idResult) {
    const regex = /[aeiou]/i;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = arr.join(", ");
    result.innerText = arr.filter((item) => !regex.test(item)).join(", ");
}

getStringsWithoutVowels(strTest3, "data4", "result4");

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
function getStringsWith1or3(arr, idData, idResult) {
    const regex = /[13]/;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = arr.join(", ");
    result.innerText = arr.filter((item) => regex.test(item)).join(", ");
}

const strTest5 = [
    "Lviv1",
    "Kharkiv3",
    "Dnipro13",
    "Zaporizhzhia31",
    "Kyiv",
    "2023"
];

getStringsWith1or3(strTest5, "data5", "result5");

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
function extractNumbersFromText(str, idData, idResult) {
    const regex = /\d+/g;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = str.match(regex)?.join(", ");
}

const strTest6 = "У 2025 році я відвідав 5 міст України і подорожував 1000 км.";

extractNumbersFromText(strTest6, "data6", "result6");

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
function extractPunctuationFromText(str, idData, idResult) {
    const regex = /\p{P}/gu;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = str.match(regex)?.join(" ");
}

const strTest7 = "Привіт! Я відвідав Київ, Львів, Харків. Добре, дякую.";

extractPunctuationFromText(strTest7, "data7", "result7");

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
function getTextComponents(str, idData, idResult) {
    const regex = /\p{P}\s+/gu;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = str.split(regex)?.join("-");
}

getTextComponents(strTest7, "data8", "result8");

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
function isContainsDate(str, idData, idResult) {
    const regex = /\b\d{2}\.\d{2}\.\d{4}\b/g;
    const data = getElement(idData);
    const result = getElement(idResult);

    const date = str.match(regex);

    data.innerText = str;
    result.innerText = regex.test(str)
        ? `Так, текст містить дату у форматі dd.mm.yyyy - ${date}`
        : "Ні, текст не містить дату у форматі dd.mm.yyyy";
}

const strTest9 = "Подорож відбудеться 15.05.2025 о 10:00.";

isContainsDate(strTest9, "data9", "result9");

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
function countTwoDigitNumbers(str, idData, idResult) {
    const regex = /\b\d{2}\b/g;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText =
        str.match(regex)?.length === undefined
            ? `В рядку немає двоцифрових чисел`
            : ` В рядку є ${str.match(regex)?.length} двоцифрових числа - ${str
                  .match(regex)
                  ?.join(", ")}`;
}

const strTest10 =
    "У 2025 році я відвідав 5 міст України і подорожував 1000 км.";

countTwoDigitNumbers(strTest10, "data10", "result10");

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4532-0151-1283-0367»).
// Знайти усі такі номери.
function findCardNumbers(str, idData, idResult) {
    const regex = /\b\d{4}-\d{4}-\d{4}-\d{4}\b/g;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = str.match(regex)?.join(" ");
}

const strTest11 =
    "Ось номер картки: 4532-0151-1283-0367, а ось ще один: 1234567812345678, ";

findCardNumbers(strTest11, "data11", "result11");

// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
function isGovernmentSite(str, idData, idResult) {
    const regex = /\.gov\b/;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = regex.test(str)
        ? `Так, сайт є урядовим`
        : "Ні, сайт не є урядовим";
}

const strTest12 = "https://president.gov.ua/";

isGovernmentSite(strTest12, "data12", "result12");

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
function getYearsAfter2021(str, idData, idResult) {
    const regex = /\b(202[2-9]|20[3-9]\d|2[1-9]\d{2}|[3-9]\d{3})\b/g;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = str.match(regex)?.join(", ");
}

const strTest13 = "Подорожі відбулися у 2017, 2021, 2022 та 2025 роках.";

getYearsAfter2021(strTest13, "data13", "result13");

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
function isUkrainianPhoneNumber(str, idData, idResult) {
    const regex = /^\+38/;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = regex.test(str)
        ? `Так, телефон є українським`
        : "Ні, телефон не є українським";
}

const strTest14 = "+380501236767";

isUkrainianPhoneNumber(strTest14, "data14", "result14");

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
function replaceSpaceWithDash(str, idData, idResult) {
    const regex = /\s/g;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = str.replace(regex, "-");
}

const strTest15 = "Shevchenko Taras";

replaceSpaceWithDash(strTest15, "data15", "result15");

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
function convertDateToSlashFormat(str, idData, idResult) {
    const regex = /\./g;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = str.replace(regex, "/");
}

const strTest16 = "15.05.2025";

convertDateToSlashFormat(strTest16, "data16", "result16");

// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
function isWeekend(str, idData, idResult) {
    const regex = /^(0|6|sun|sat)$/i;
    const data = getElement(idData);
    const result = getElement(idResult);

    data.innerText = str;
    result.innerText = regex.test(str)
        ? `Так, цей день є вихідним`
        : "Ні, цей день не є вихідним";
}

const strTest17 = "tue";

isWeekend(strTest17, "data17", "result17");
