"use strict"

// Задача 01.  Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
// Задача 02. Створити функцію, яка за номером місяця повертає його назву.
if (confirm('Почати тестування?')) {
    const getSeasonOfYear = monthNumber => {
        let res
        switch (monthNumber) {
            case 1:
            case 2:
            case 12:
                res = 'зима'
                break
            case 3:
            case 4:
            case 5:
                res = 'весна'
                break
            case 6:
            case 7:
            case 8:
                res = 'літо'
                break
            case 9:
            case 10:
            case 11:
                res = 'осінь'
                break
        }
        return res
    }

    const getMonthName = monthNumber => {
        let monthName
        switch (monthNumber) {
            case 1:
                monthName = 'січень'
                break
            case 2:
                monthName = 'лютий'
                break
            case 3:
                monthName = 'березень'
                break
            case 4:
                monthName = 'квітень'
                break
            case 5:
                monthName = 'травень'
                break
            case 6:
                monthName = 'червень'
                break
            case 7:
                monthName = 'липень'
                break
            case 8:
                monthName = 'серпень'
                break
            case 9:
                monthName = 'вересень'
                break
            case 10:
                monthName = 'жовтень'
                break
            case 11:
                monthName = 'листопад'
                break
            case 12:
                monthName = 'грудень'
                break
        }
        return monthName
    }

    const monthNumber = parseInt(prompt('Введіть номер місяця', '4'))

    document.write(`<p >Місяць під номером ${monthNumber} (${getMonthName(monthNumber)}) відповідає порі року - ${getSeasonOfYear(monthNumber)}</p>`)
}
