"use strict";

// Задача 02. Дано масив, який зберігає кількість
// відвідувачів магазину протягом тижня.
// Вивести на екран:
if (confirm("Почати тестування?")) {
    const weeklyVisitors = [10, 85, 30, 14, 0, 15, 95];

    // Кількість днів, протягом яких кількість відвідувачів була меншою за 20
    function getDaysNumberLess20(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 20) count++;
        }
        return count;
    }

    // Номери днів, протягом яких кількість відвідувачів була меншою за 20
    function getDaysNumbersListLess20(arr) {
        let daysNumbers = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 20) daysNumbers.push(i + 1);
        }
        return daysNumbers;
    }

    // Номери днів, коли кількість відвідувачів була мінімальною
    function getMinVisitorDays(arr) {
        const minVisitors = Math.min(...arr);
        let minDays = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === minVisitors) minDays.push(i + 1);
        }
        return minDays;
    }

    // Загальна кількість клієнтів у робочі дні (понеділок-п'ятниця) та на вихідних (субота-неділя)
    function getTotalVisitorsWeekdaysAndWeekends(arr) {
        let weekdaysTotal = 0;
        let weekendsTotal = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i < 5) {
                // Понеділок - п'ятниця
                weekdaysTotal += arr[i];
            } else {
                // Субота і неділя
                weekendsTotal += arr[i];
            }
        }
        return { weekdaysTotal, weekendsTotal };
    }

    const count20 = getDaysNumberLess20(weeklyVisitors);
    const daysNumbersLess20 = getDaysNumbersListLess20(weeklyVisitors);
    const minVisitorDays = getMinVisitorDays(weeklyVisitors);
    const { weekdaysTotal, weekendsTotal } =
        getTotalVisitorsWeekdaysAndWeekends(weeklyVisitors);

    document.write(
        `Кількість днів з відвідувачами менш ніж 20: ${count20}</br>`
    );
    document.write(
        `Номери днів, коли кількість відвідувачів була меншою за 20: ${daysNumbersLess20}</br>`
    );
    document.write(
        `Номери днів, коли кількість відвідувачів була мінімальною: ${minVisitorDays}</br>`
    );
    document.write(
        `Загальна кількість клієнтів у робочі дні: ${weekdaysTotal}</br>`
    );
    document.write(
        `Загальна кількість клієнтів у вихідні дні: ${weekendsTotal}</br>`
    );
}
