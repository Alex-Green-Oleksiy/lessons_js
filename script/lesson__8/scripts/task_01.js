"use strict";

// Дано масив, який містить оцінки з К предметів.
// ... з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку),
// хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка))
if (confirm("Почати тестування?")) {
    function inputMarks(marksNumber) {
        const marksList = [];
        for (let i = 0; i < marksNumber; i++) {
            const mark = parseInt(prompt("введіть оцінку", "7"));
            marksList.push(mark);
        }
        return marksList;
    }
    //знайти мінімальну оцінку
    function getMinMark(marksList) {
        let min = marksList[0];
        for (let i = 1; i < marksList.length; i++) {
            if (marksList[i] < min) min = marksList[i];
        }
        return min;
    }
    //знайти категорію
    function getCategory(minMark) {
        if (minMark < 0 || minMark > 12) throw new Error("оцінка не коректна");
        let categoryTitle;
        if (minMark <= 3) categoryTitle = "двієчник";
        else if (minMark <= 6) categoryTitle = "трієчник";
        else if (minMark <= 9) categoryTitle = "хорошист";
        else categoryTitle = "відмінник";
        return categoryTitle;
    }
    const marksNumber = parseInt(prompt("введіть кількість оцінок вводу"));
    const pupilMarks = inputMarks(marksNumber);
    const minMark = getMinMark(pupilMarks);
    const categoryTitle = getCategory(minMark);
    document.write(`Категорія успішності:${categoryTitle}`);
}
