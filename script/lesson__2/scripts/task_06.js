"use strict";
// Задача 06. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
/*
	firstItemPrice - вартість першого товару
	secondItemPrice - вартість другого товару
	thirdItemPrice - вартість третього товару

	firstItemQuantity - кількість одиниць першого товару
	secondItemQuantity - кількість одиниць другого товару
	thirdItemQuantity - кількість одиниць третього товару

	firstItemTotalPrice - вартість першого товару
	secondItemTotalPrice - вартість другого товару
	thirdItemTotalPrice - вартість третього товару

	totalPrice - загальна сума усіх товарів
*/
const firstItemPrice = parseFloat(
    prompt("Введіть вартість першого товару в гривні", "15.4")
);
const secondItemPrice = parseFloat(
    prompt("Введіть вартість другого товару в гривні", "65.4")
);
const thirdItemPrice = parseFloat(
    prompt("Введіть вартість третього товару в гривні", "45.99")
);

const firstItemQuantity = parseInt(
    prompt("Введіть кількість першого товару", "1")
);
const secondItemQuantity = parseInt(
    prompt("Введіть кількість другого товару", "1")
);
const thirdItemQuantity = parseInt(
    prompt("Введіть кількість третього товару", "1")
);
// Обчислення результатів
const firstItemTotalPrice = (firstItemPrice * firstItemQuantity).toFixed(2);
const secondItemTotalPrice = (secondItemPrice * secondItemQuantity).toFixed(2);
const thirdItemTotalPrice = (thirdItemPrice * thirdItemQuantity).toFixed(2);

const totalPrice = (
    parseFloat(firstItemTotalPrice) +
    parseFloat(secondItemTotalPrice) +
    parseFloat(thirdItemTotalPrice)
).toFixed(2);

document.write(`
	<table>
		<tr>
			<th>Товар</th>
			<th>Кількість</th>
			<th>Ціна одиниці, грн</th>
			<th>Загальна вартість, грн</th>
		</tr>
		<tr>
			<td>Товар №1</td>
			<td>${firstItemQuantity}</td>
			<td>${firstItemPrice}</td>
			<td>${firstItemTotalPrice}</td>
		</tr>
		<tr>
			<td>Товар №2</td>
			<td>${secondItemQuantity}</td>
			<td>${secondItemPrice}</td>
			<td>${secondItemTotalPrice}</td>
		</tr>
		<tr>
			<td>Товар №3</td>
			<td>${thirdItemQuantity}</td>
			<td>${thirdItemPrice}</td>
			<td>${thirdItemTotalPrice}</td>
		</tr>
	
		<tr>
			<td >Загальна сума, грн:</td>
			<td >${totalPrice}</td>
		</tr>
	</table>
	`);
