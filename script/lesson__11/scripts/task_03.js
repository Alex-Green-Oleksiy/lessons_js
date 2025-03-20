"use strict";

// Задача 03. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

if (confirm(`Почати тестування`)) {
    function getGameSpace(numbersPosition) {
        let arr = [];
        for (let rowNum = 0; rowNum < numbersPosition; rowNum++) {
            let row = [];
            for (let columnNum = 0; columnNum < numbersPosition; columnNum++) {
                row.push(0);
            }
            arr.push(row);
        }
        return arr;
    }

    function getRandomPosition(numbersRow) {
        return 0 + Math.floor(Math.random() * numbersRow);
    }
    function getFreePosition(gameSpace) {
        let freePositions;
        let findPosition = false;
        while (findPosition === false) {
            let randomRow = getRandomPosition(gameSpace.length - 1);
            let randomColumn = getRandomPosition(gameSpace.length - 1);
            if (gameSpace[randomRow][randomColumn] === 0) {
                freePositions = [randomRow, randomColumn];
                findPosition = true;
            }
        }
        return freePositions;
    }
    function isShipOnPosition(gameSpace, numbersShip) {
        let shipOnPosition = 0;
        do {
            let freePosition = getFreePosition(gameSpace);
            gameSpace[freePosition[0]][freePosition[1]] = 1;
            shipOnPosition++;
        } while (shipOnPosition !== numbersShip);
        return gameSpace;
    }

    function gameShip(sizeGameSpace = 6, numbersShip = 5) {
        let gameSpace = isShipOnPosition(
            getGameSpace(sizeGameSpace),
            numbersShip
        );
        let numbersShots = numbersShip * 2;
        let allShips = numbersShip;
        let result = "";

        do {
            let userRow =
                parseInt(
                    prompt(`Введіть номер рядка від 1 до ${gameSpace.length}`)
                ) - 1;
            let userColumn =
                parseInt(
                    prompt(
                        `Введіть номер стовпця  від 1 до ${gameSpace.length}`
                    )
                ) - 1;
            if (isNaN(userRow) || isNaN(userColumn)) {
                alert(`Ви ввели неправильні координати`);
                continue;
            } else if (gameSpace[userRow][userColumn] === 1) {
                allShips--;
                gameSpace[userRow][userColumn] = 0;
                alert(`Ви влучили,залишилось ${allShips} кораблів`);
            } else {
                alert(`Ви не влучили,залишилось ${allShips} кораблів`);
            }
            numbersShots--;
            alert(`Ви маєте ${numbersShots} пострілів`);
        } while (allShips > 0 && numbersShots > 0);

        alert(`Ви знищили ${numbersShip}/${numbersShip - allShips}кораблів`);
        if (allShips > 0) {
            result = "Ви програли";
        } else {
            result = "Перемога";
        }
        return result;
    }
    console.log(gameShip());
}
