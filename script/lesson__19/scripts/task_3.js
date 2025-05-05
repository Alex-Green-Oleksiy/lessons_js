"use strict";

function getRandomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getList(
    quantity = 5,
    elNumMax = 10,
    elNumMin = 1,
    elMax = 100,
    elMin = 1
) {
    let container = document.getElementById("myContainer");
    container.style.cssText =
        "display: flex; gap: 2.5rem; padding: 0.625rem; margin: 0 auto; width: fit-content;";
    for (let i = 0; i < quantity; i++) {
        let ol = document.createElement("ol");
        ol.style.cssText =
            "border: 1px solid gray; padding: 10px 10px 10px 10px;";
        container.append(ol);
        const elNum = getRandomNum(elNumMax, elNumMin);
        for (let j = 0; j < elNum; j++) {
            let li = document.createElement("li");
            li.innerText = getRandomNum(elMax, elMin);
            ol.append(li);
        }
    }
}

getList();

function colorLists() {
    const olLists = document.querySelectorAll("#myContainer ol");
    for (const ol of olLists) {
        if (ol.children.length % 2 === 0) {
            ol.style.backgroundColor = "green";
            ol.style.transition = "0.5s";
        } else {
            ol.style.backgroundColor = "red";
            ol.style.transition = "0.5s";
        }
    }
}

document.querySelector(".button19-3").addEventListener("click", colorLists);
