"use strict";

// Задача 08.Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

if (confirm("Почати тестування?")) {
   
function filterCarPlatesUsingForOf(carPlates) {
    const result = [];
    for (const plate of carPlates) {
        if (plate.startsWith('А')) {
            result.push(plate);
        }
    }
    return result;
}

const carPlatesArray = ['А123BC', 'B456CD', 'А789DE', 'C321AB', 'А654FG'];
const filteredPlatesForOf = filterCarPlatesUsingForOf(carPlatesArray);
document.write(`Масив номерів автомобілей: ${carPlatesArray}</br>`);
document.write(`Номери, що починаються на "А": ${filteredPlatesForOf}`);

}
