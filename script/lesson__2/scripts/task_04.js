"use strict";

// Задача 04. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

/* Позначення довжини
	lengthInCm -  у сантиметрах
	lengthInM -  у метрах
	lengthInKm -  у кілометрах
*/

// Введення данних
const lengthInCm = parseFloat(prompt("Введіть довжину у сантиметрах", "10"));
// Обчислення
const lengthInM = lengthInCm / 100;
const lengthInKm = lengthInM / 1000;

document.write(`В ${lengthInCm} сантиметрах - ${lengthInM} метрів <br>
					В ${lengthInCm} сантиметрах - ${lengthInKm} кілометрів	
	`);
