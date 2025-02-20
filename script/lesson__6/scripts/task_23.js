"use strict";

// 23. Розпочавши тренування, спортсмен першого дня пробіг 10 км.
//  Щодня він збільшував денну норму на 10% від норми попереднього дня.
//  Який сумарний шлях пробіжить спортсмен за 7 днів?
//  Якого дня вперше спортсмен пробіжить понад 20 км? 
// Якого дня вперше сумарний шлях перевищить 60 км?

const  dailyIncrease = 0.1
let distance = 0
let milestoneOne = 0,
  milestoneTwo = 0

for (
  let day = 1, dailyRange = 10;
  day <= 7;
  day++, dailyRange *= 1 + dailyIncrease
) {
  distance += dailyRange

  if (!milestoneOne && distance >= 20) milestoneOne = day
  if (!milestoneTwo && distance >= 60) milestoneTwo = day
}

document.write(`<p>Спортсмен пробіг ${distance.toFixed(2)} км. за 7 діб.`)
document.write(`<p>20 км. було подолано на ${milestoneOne} день`)
document.write(`<p>60 км. було подолано на ${milestoneTwo} день`)
