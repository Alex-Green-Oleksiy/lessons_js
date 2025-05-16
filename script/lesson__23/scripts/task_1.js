"use strict";
// Задача 1.
//Користувач може змінювати колір фону, що вибирає користувач з використанням
//<input type="color">.
//Зберігати цей колір і відновлювати при наступному відкритті.
// Також зберігати і відображати кількість змін протягом одного сеансу.

function setInitialBackground(body, colorKey = "userBackgroundColor") {
    const savedColor = localStorage.getItem(colorKey);
    if (savedColor) {
        body.style.backgroundColor = savedColor;
    }
}

function initializeChangeCounter(counterKey = "changeCount") {
    let count = parseInt(sessionStorage.getItem(counterKey), 10);
    if (isNaN(count)) {
        count = 0;
        sessionStorage.setItem(counterKey, count);
    }
    return count;
}

function updateCounterDisplay(displayElement, count) {
    if (displayElement) {
        displayElement.innerText = count;
    }
}

function setupColorChangeListener(
    input,
    body,
    displayElement,
    counterKey = "changeCount",
    colorKey = "userBackgroundColor"
) {
    input.addEventListener("input", (event) => {
        const selectedColor = event.target.value;
        if (selectedColor) {
            body.style.backgroundColor = selectedColor;
            localStorage.setItem(colorKey, selectedColor);

            let count = parseInt(sessionStorage.getItem(counterKey));
            count++;
            sessionStorage.setItem(counterKey, count);
            updateCounterDisplay(displayElement, count);
        }
    });
}

function initializeBackgroundColorChanger(colorInputId, counterDisplayId) {
    const body = document.body;
    const colorInput = document.getElementById(colorInputId);
    const counterDisplay = document.getElementById(counterDisplayId);

    setInitialBackground(body);
    const initialCount = initializeChangeCounter();
    updateCounterDisplay(counterDisplay, initialCount);

    if (colorInput) {
        setupColorChangeListener(colorInput, body, counterDisplay);
    }
}

initializeBackgroundColorChanger("color", "resultColor");
