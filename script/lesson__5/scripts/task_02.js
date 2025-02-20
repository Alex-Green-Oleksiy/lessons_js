"use strict";

// Задача 2.  Вивести на екран номери місяців весни і літа (від 3 до 8)
if (confirm('Почати тестування?')) {
    
let result = "";

for (let i = 3; i <= 8; i++)
    switch (i) {
        case 3:
            result += `<p>${i}<span>\:Березень</span></p>`;
            break;
        case 4:
            result += `<p>${i}<span>\:Квітень</span></p>`;
            break;
        case 5:
            result += `<p>${i}<span>\:Травень</span></p>`;
            break;
        case 6:
            result += `<p>${i}<span>\:Червень</span></p>`;
            break;
        case 7:
            result += `<p>${i}<span>\:Липень</span></p>`;
            break;
        case 8:
            result += `<p>${i}<span>\:Серпень</span></p>`;
            break;
    }
document.write(`${result}`);

// або так
// let months = {
//     3: "Березень",
//     4: "Квітень",
//     5: "Травень",
//     6: "Червень",
//     7: "Липень",
//     8: "Серпень"
// };
// let result = "";
// for (let i = 3; i <= 8; i++) {
//     result += `${i} : ${months[i]} <br>`;
// }
// document.write(result);
}
