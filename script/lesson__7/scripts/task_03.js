"use strict"

// Задача 03.  Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
//Вихідні дні
if (confirm('Почати тестування?')) {
function isWeekday(dayNumber) {
    return dayNumber !== 6 && dayNumber !== 7
}
//назви днів
function getDayName(dayNumber) {
    let dayName
    switch (dayNumber) {
        case 1:
            dayName = 'понеділок'
            break
        case 2:
            dayName = 'вівторок'
            break
        case 3:
            dayName = 'середа'
            break
        case 4:
            dayName = 'четвер'
            break
        case 5:
            dayName = 'п’ятниця'
            break
        case 6:
            dayName = 'субота'
            break
        case 7:
            dayName = 'неділя'
            break
        default:
            dayName = 'невідомий день'
    }
    return dayName
}
//отримання данних
const userDayNumber = parseInt(prompt('Введіть номер дня тижня (1-7)', '5'))
//нормалізація некоректно введеного номеру
const normalizedUserDayNumber = ((userDayNumber - 1) % 7) + 1
//порівнюємо номер результату із вихідними днями
let dayType
if (isWeekday(normalizedUserDayNumber)) {
    dayType = 'робочий'
} else {
    dayType = 'вихідний'
}

const dayName = getDayName(normalizedUserDayNumber)
//ресультат
document.write(`День №${userDayNumber} (${dayName}) – це ${dayType} день.`)
}
