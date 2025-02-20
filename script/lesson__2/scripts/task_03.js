"use strict"

// Задача 03. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

/* Позначення
	oneItemPrice - вартість одиниці товару
	quantity - кількість товару
	
	totalCost - загальна вартість
	vatInPercent - % ПДВ
	vat - ПДВ від загальної вартості товару
*/

// Введення данних
const oneItemPrice = parseFloat(prompt('Введіть вартість одиниці товару в гривні', '10'));
const quantity = parseInt(prompt('Введіть кількість товару', '10'));
const vatInPercent = 5;
// Обчислення
const totalCost = oneItemPrice * quantity;
const vat = totalCost * 5 / 100;

document.write(`Загальна вартість товару становить ${totalCost} гривень <br>
					ПДВ (5%) становить ${vat.toFixed(2)} гривень	
	`)