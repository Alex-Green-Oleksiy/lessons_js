"use strict";

// Задача 07.  Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
//     1) за весь рік;
//     2) у першій половині року;
//     3) у другій половині року;
//     4) за літо;
//     5) за ІІ квартал;
//     6) за парні місяці (з парними номерами);
//     7) за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

if (confirm("Почати тестування?")) {
    const payments = [
        500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600
    ]; // Масив платіжок за кожен місяць

    function getSum(arr, startIndex, endIndex) {
        let sum = 0;
        for (let i = startIndex; i <= endIndex; i++) {
            sum += arr[i];
        }
        return sum;
    }

    const totalYearSum = getSum(payments, 0, 11);
    document.write(
        `Сумарна кількість грошей за весь рік: ${totalYearSum}</br>`
    );

    const firstHalfYearSum = getSum(payments, 0, 5);
    document.write(
        `Сумарна кількість грошей за першу половину року: ${firstHalfYearSum}</br>`
    );

    const secondHalfYearSum = getSum(payments, 6, 11);
    document.write(
        `Сумарна кількість грошей за другу половину року: ${secondHalfYearSum}</br>`
    );

    const summerSum = getSum(payments, 5, 7);
    document.write(`Сумарна кількість грошей за літо: ${summerSum}</br>`);

    const secondQuarterSum = getSum(payments, 3, 5);
    document.write(
        `Сумарна кількість грошей за ІІ квартал: ${secondQuarterSum}</br>`
    );

    function getEvenMonthsSum(arr) {
        let sum = 0;
        for (let i = 1; i < arr.length; i += 2) {
            // Парні місяці (2, 4, 6, ...)
            sum += arr[i];
        }
        return sum;
    }

    const evenMonthsSum = getEvenMonthsSum(payments);
    document.write(
        `Сумарна кількість грошей за парні місяці: ${evenMonthsSum}</br>`
    );

    const seasonStartMonthsSum =
        payments[2] + payments[5] + payments[8] + payments[11]; // Місяці, що починаються з сезону (березень, червень, вересень, грудень)
    document.write(
        `Сумарна кількість грошей за місяці, що починаються з сезону: ${seasonStartMonthsSum}`
    );
}
