"use strict"
// Задача 05. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
/*
	timeSeconds - кількість секунд, що пройшла від початку доби
	timeSecondsLeft - кількість секунд для розрахування хвилин
	currentTimeSeconds - скільки секунд наразі показує годинник
	timeHours - яка це година
	timeMinutes - яка це хвилина

	SECONDS_IN_ONE_MINUTE - кількість секунд в 1 хвилині
	SECONDS_IN_ONE_HOUR - кількість секунд в 1 годині
*/
const timeSeconds = parseInt(prompt('Введіть кількість секунд від опівночі', '425'));
const SECONDS_IN_ONE_MINUTE = 60
const SECONDS_IN_ONE_HOUR = 3600

// Обчислення

const timeHours = Math.floor(timeSeconds / SECONDS_IN_ONE_HOUR);
const timeSecondsLeft = timeSeconds - (timeHours * SECONDS_IN_ONE_HOUR);
const timeMinutes = Math.floor(timeSecondsLeft / SECONDS_IN_ONE_MINUTE);
const currentTimeSeconds = timeSecondsLeft - (timeMinutes * SECONDS_IN_ONE_MINUTE)

const formattedHours = String(timeHours).padStart(2, '0');
const formattedMinutes = String(timeMinutes).padStart(2, '0');
const formattedCurrentTimeSeconds = String(currentTimeSeconds).padStart(2, '0');

// Виведення

document.write(`Станом на зараз ${formattedHours}годин : ${formattedMinutes}хвилин : ${formattedCurrentTimeSeconds}секунд`)