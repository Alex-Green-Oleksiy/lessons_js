'use strict'
// Зробити конвертер валют (курси валют – константи у скрипті)
const dollarExchangeRate = 41
const euroExchangeRate = 46

if (confirm('Почати тестування?')) {
    let container = document.getElementById('myContainer')

    // Створення контейнера для введення гривень
    let div1 = document.createElement('div')
    div1.className = 'flex-container'
    container.append(div1)

    let uah = document.createElement('h2')
    uah.innerText = 'Сума у гривнях'
    div1.append(uah)

    let input1 = document.createElement('input')
    input1.id = 'input1'
    div1.append(input1)

    // Створення кнопки конвертації
    let button = document.createElement('button')
    button.id = 'button'
    button.innerText = 'Конвертувати'
    container.append(button)

    // Створення контейнера для євро
    let div2 = document.createElement('div')
    div2.className = 'flex-container'
    container.append(div2)

    let euro = document.createElement('h2')
    euro.innerText = 'Сума у євро'
    div2.append(euro)

    let input2 = document.createElement('input')
    input2.id = 'input2'
    div2.append(input2)

    // Створення контейнера для доларів
    let div3 = document.createElement('div')
    div3.className = 'flex-container'
    container.append(div3)

    let usd = document.createElement('h2')
    usd.innerText = 'Сума у доларах'
    div3.append(usd)

    let input3 = document.createElement('input')
    input3.id = 'input3'
    div3.append(input3)

    // Функція конвертації валют
    function convertCurrency() {
        let amountInHryvnia = parseFloat(document.getElementById('input1').value)
        
        // Перевірка на коректність введення
        if (isNaN(amountInHryvnia)) {
            alert("Будь ласка, введіть коректну суму у гривнях.")
            return
        }

        let convertInDollar = amountInHryvnia / dollarExchangeRate
        let convertInEuro = amountInHryvnia / euroExchangeRate

        document.getElementById('input2').value = convertInEuro.toFixed(2)
        document.getElementById('input3').value = convertInDollar.toFixed(2)
    }

    document.getElementById('button').onclick = convertCurrency
}