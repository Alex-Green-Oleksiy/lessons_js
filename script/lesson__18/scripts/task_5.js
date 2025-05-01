'use strict'

// Функція для отримання випадкового числа
function getRandomNumber(min = 1, max = 100) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
}

// Функція для створення таблиці з випадковими числами
function createTable(row = 3, col = 4, min = 1, max = 100) {
    let container = document.getElementById('myContainer')
    let table = document.createElement('table')
    container.append(table)

    // Створення заголовків
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    for (let i = 0; i < col; i++) {
        let th = document.createElement('th')
        th.innerText = `Колонка ${i + 1}`
        tr.append(th)
    }
    thead.append(tr)
    table.append(thead)

    // Створення рядків таблиці
    let tbody = document.createElement('tbody')
    for (let rowIndex = 0; rowIndex < row; rowIndex++) {
        let tr = document.createElement('tr')
        for (let colIndex = 0; colIndex < col; colIndex++) {
            let td = document.createElement('td')
            td.innerText = getRandomNumber(min, max)
            tr.append(td)
        }
        tbody.append(tr)
    }
    table.append(tbody)
}

// Підключення обробника завантаження сторінки
window.onload = function () {
    if (confirm('Почати тестування?')) {
        createTable()
    }
}