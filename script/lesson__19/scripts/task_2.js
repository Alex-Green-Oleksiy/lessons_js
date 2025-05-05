"use strict";
function updateValues(event) {
    const input = event.target;
    const value = parseInt(input.value);
    if (isNaN(value)) return;

    let currentDiv = input.parentElement;

    let prevDiv = currentDiv.previousElementSibling;
    let tempValue = value;
    while (prevDiv) {
        tempValue -= 1;
        const prevInput = prevDiv.querySelector("input");
        prevInput.value = tempValue;
        prevDiv = prevDiv.previousElementSibling;
    }

    let nextDiv = currentDiv.nextElementSibling;
    tempValue = value;
    while (nextDiv) {
        tempValue += 1;
        const nextInput = nextDiv.querySelector("input");
        nextInput.value = tempValue;
        nextDiv = nextDiv.nextElementSibling;
    }
}

const inputs = document.querySelectorAll("input");
for (const input of inputs) {
    input.addEventListener("input", updateValues);
}
