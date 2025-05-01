'use strict'

// Константа поточного року
const currentYear = 2025

if (confirm('Почати тестування?')) {
    let container = document.getElementById('myContainer')

    // Створення контейнера для введення року народження
    let div1 = document.createElement('div')
    div1.className = 'flex-container'
    container.append(div1)

    let birthYear = document.createElement('h2')
    birthYear.innerText = 'Введіть свій рік народження'
    div1.append(birthYear)

    let input1 = document.createElement('input')
    input1.id = 'input1'
    div1.append(input1)

    let button = document.createElement('button')
    button.id = 'button'
    button.innerText = 'Визначити кількість років користувача'
    container.append(button)

    // Створення контейнера для результату
    let div2 = document.createElement('div')
    div2.className = 'flex-container'
    container.append(div2)

    let oldYears = document.createElement('h2')
    oldYears.innerText = 'Кількість років користувача'
    div2.append(oldYears)

    let input2 = document.createElement('input')
    input2.id = 'input2'
    div2.append(input2)

    // Функція для розрахунку віку
    function getAge() {
        let yearBirth = parseInt(document.getElementById('input1').value)
        
        if (isNaN(yearBirth)) {
            alert("Будь ласка, введіть коректний рік народження")
            return
        }

        let age = currentYear - yearBirth
        document.getElementById('input2').value = age
    }
    document.getElementById('button').onclick = getAge
}