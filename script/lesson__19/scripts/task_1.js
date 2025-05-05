"use strict";

function paintAllNextElements(event) {
    let element = event.target;
    let next = element.nextElementSibling;

    while (next) {
        if (next.tagName === "DIV") {
            next.style.color = "red";
        }
        next = next.nextElementSibling;
    }
}

document.querySelectorAll("div").forEach((div) => {
    div.addEventListener("click", paintAllNextElements);
});
