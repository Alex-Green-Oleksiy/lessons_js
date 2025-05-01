'use strict'

// Перевірка на початок тестування
if (confirm('Почати тестування?')) {
   
    let container = document.getElementById('myContainer')

    // Створення контейнера для першого числа
    let div1 = document.createElement('div')
    div1.className = 'flex-container'
    container.append(div1)

    // Створення заголовка для першого числа
    let firstNum = document.createElement('h2')
    firstNum.innerText = 'Перше число'
    div1.append(firstNum)

    // Створення інпута для першого числа
    let input1 = document.createElement('input')
    input1.id = 'input1'
    div1.append(input1)

    // Створення контейнера для другого числа
    let div2 = document.createElement('div')
    div2.className = 'flex-container'
    container.append(div2)

    // Створення заголовка для другого числа
    let secondNum = document.createElement('h2')
    secondNum.innerText = 'Друге число'
    div2.append(secondNum)

    // Створення інпута для другого числа
    let input2 = document.createElement('input')
    input2.id = 'input2'
    div2.append(input2)

    // Створення контейнера для кнопок
    let div3 = document.createElement('div')
    div3.id = 'div3'
    container.append(div3)

    // Створення кнопок калькулятора
    // Кнопка додавання
    let btn1 = document.createElement('button')
    btn1.id = 'add'
    btn1.innerText = 'Додати'
    div3.append(btn1)

    // Кнопка віднімання
    let btn2 = document.createElement('button')
    btn2.id = 'remove'
    btn2.innerText = 'Відняти'
    div3.append(btn2)

    // Кнопка множення
    let btn3 = document.createElement('button')
    btn3.id = 'multiply'
    btn3.innerText = 'Помножити'
    div3.append(btn3)

    // Кнопка ділення
    let btn4 = document.createElement('button')
    btn4.id = 'divide'
    btn4.innerText = 'Поділити'
    div3.append(btn4)

    // Створення контейнера для результату
    let div4 = document.createElement('div')
    div4.className = 'flex-container'
    container.append(div4)

    // Створення заголовка результату
    let finishRes = document.createElement('h2')
    finishRes.innerText = 'Результат'
    div4.append(finishRes)

    // Створення інпута для результату
    let input3 = document.createElement('input')
    input3.id = 'input3'
    div4.append(input3)

    // Функції для обчислення
    // Функція додавання
    function getSum() {
        const num1 = parseFloat(document.getElementById('input1').value)
        const num2 = parseFloat(document.getElementById('input2').value)
        const sum = num1 + num2
        document.getElementById('input3').value = sum
    }

    // Функція віднімання
    function getDifference() {
        const num1 = parseFloat(document.getElementById('input1').value)
        const num2 = parseFloat(document.getElementById('input2').value)
        const diff = num1 - num2
        document.getElementById('input3').value = diff
    }

    // Функція множення
    function getProduct() {
        const num1 = parseFloat(document.getElementById('input1').value)
        const num2 = parseFloat(document.getElementById('input2').value)
        const product = num1 * num2
        document.getElementById('input3').value = product
    }

    // Функція ділення
    function getQuotient() {
        const num1 = parseFloat(document.getElementById('input1').value)
        const num2 = parseFloat(document.getElementById('input2').value)
        // Перевірка на ділення на нуль
        const quotient = num2 !== 0 ? (num1 / num2) : "Ділення на 0"
        document.getElementById('input3').value = quotient
    }

    // Підключення обробників подій до кнопок
    document.getElementById('add').onclick = getSum
    document.getElementById('remove').onclick = getDifference
    document.getElementById('multiply').onclick = getProduct
    document.getElementById('divide').onclick = getQuotient
}