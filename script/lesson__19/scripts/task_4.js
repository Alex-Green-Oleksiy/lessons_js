"use strict";

class Table {
    constructor(
        maxNum = 100,
        minNum = 1,
        colNum = 3,
        rowNum = 3,
        title = "",
        subtitle = ""
    ) {
        this.maxNum = maxNum;
        this.minNum = minNum;
        this.colNum = colNum;
        this.rowNum = rowNum;
        this.title = title;
        this.subtitle = subtitle;
        this.counter = 0;
    }

    getRandomNumber() {
        return (
            Math.floor(Math.random() * (this.maxNum - this.minNum + 1)) +
            this.minNum
        );
    }
    createTable() {
        const divTable = document.createElement("div");
        const table = document.createElement("table");
        divTable.classList.add("table");

        const title = document.createElement("h2");
        title.innerText = this.title;
        divTable.append(title);
        const subtitle = document.createElement("p");
        subtitle.innerText = `${this.subtitle} ${this.counter}`;
        divTable.append(subtitle);

        table.addEventListener("click", (event) => {
            if (event.target.tagName === "TD") {
                this.counter++;
                subtitle.innerText = `${this.subtitle} ${this.counter}`;

                document.querySelectorAll(".table").forEach((div) => {
                    div.classList.remove("active");
                });

                divTable.classList.add("active");
            }
        });

        for (let index = 0; index < this.rowNum; index++) {
            const row = document.createElement("tr");

            for (let index = 0; index < this.colNum; index++) {
                const col = document.createElement("td");
                col.innerText = this.getRandomNumber();
                row.append(col);
            }
            table.append(row);
        }
        divTable.append(table);
        return divTable;
    }
}

const container = document.querySelector("#myContainer");
for (let index = 0; index < 3; index++) {
    const table = new Table(
        100,
        1,
        3,
        3,
        `Таблиця № ${index + 1}`,
        "кількості кліків:"
    );
    container.append(table.createTable());
}
