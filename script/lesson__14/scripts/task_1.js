"use strict"

// Задача 01. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості------
// назва компанії на час розробки(назву періодично змінюють)
// власник компанії
// споснсори(масив спонсорів)
// 	* прізвище спонсора
// 	* ім’я  спонсора
// 	* сума вкладень спонсора
// рік випуску
// вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

const websitesList = [
	{
		companyName: "QuantumLeap Digital",
		companyOwner: "Kateryna Marchenko",
		sponsorsList: [
			{
				sponsorSecondName: "Ivanov",
				sponsorFirstName: "Serhii",
				amountOfInvestment: 3000,
			},
			{
				sponsorSecondName: "Polishchuk",
				sponsorFirstName: "Andriana",
				amountOfInvestment: 4500,
			},
			{
				sponsorSecondName: "Danylko",
				sponsorFirstName: "Taras",
				amountOfInvestment: 2500,
			}
		],
		yearOfRelease: 2000,
		websitePrice: 12000,
	},
	{
		companyName: "Skyline Webworks",
		companyOwner: "Yevhenii Hlushko",
		sponsorsList: [
			{
				sponsorSecondName: "Koval",
				sponsorFirstName: "Oksana",
				amountOfInvestment: 60000,
			},
			{
				sponsorSecondName: "Mazurenko",
				sponsorFirstName: "Petro",
				amountOfInvestment: 85000,
			}
		],
		yearOfRelease: 2002,
		websitePrice: 9500,
	},
	{
		companyName: "PixelForge Studio",
		companyOwner: "Viktoria Taran",
		sponsorsList: [
			{
				sponsorSecondName: "Klymenko",
				sponsorFirstName: "Dmytro",
				amountOfInvestment: 100000,
			},
			{
				sponsorSecondName: "Romanenko",
				sponsorFirstName: "Ihor",
				amountOfInvestment: 95000,
			},
			{
				sponsorSecondName: "Shapoval",
				sponsorFirstName: "Liliya",
				amountOfInvestment: 40000,
			}
		],
		yearOfRelease: 2015,
		websitePrice: 22000,
	},
	{
		companyName: "NovaCore Tech",
		companyOwner: "Oleksii Bondar",
		sponsorsList: [
			{
				sponsorSecondName: "Zadorozhny",
				sponsorFirstName: "Ruslan",
				amountOfInvestment: 3500,
			},
			{
				sponsorSecondName: "Kuzmenko",
				sponsorFirstName: "Valeriya",
				amountOfInvestment: 4200,
			}
		],
		yearOfRelease: 2017,
		websitePrice: 7000,
	},
	{
		companyName: "ByteWave Solutions",
		companyOwner: "Anastasiya Kravchuk",
		sponsorsList: [
			{
				sponsorSecondName: "Melnychenko",
				sponsorFirstName: "Yurii",
				amountOfInvestment: 25000,
			},
			{
				sponsorSecondName: "Vasylenko",
				sponsorFirstName: "Olena",
				amountOfInvestment: 30000,
			},
			{
				sponsorSecondName: "Havryliuk",
				sponsorFirstName: "Myroslav",
				amountOfInvestment: 12000,
			}
		],
		yearOfRelease: 2020,
		websitePrice: 18000,
	}
];

console.log(websitesList);

//! 1) загальну вартість усіх сайтів
const getTotalWebsitesSum = arr => arr.reduce((prevTotalSum, el) => prevTotalSum + el.websitePrice, 0)
console.log(getTotalWebsitesSum(websitesList))

//! 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const getAmountWebsites2000To2009 = arr => arr.reduce((prevCount, el) => el.yearOfRelease >= 2000 && el.yearOfRelease <= 2009 ? prevCount + 1 : prevCount, 0)
console.log(getAmountWebsites2000To2009(websitesList))

//! 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

const getAmountWithInvestmentOverSomeValue = (arr, value) => {
	let count = 0

	for (let obj of arr) {

		let { sponsorsList } = obj

		let totalSumInvestment = sponsorsList.reduce((prevTotalSum, { amountOfInvestment }) => prevTotalSum + amountOfInvestment, 0)

		if (totalSumInvestment >= value) count++

	}
	return count
}

console.log(getAmountWithInvestmentOverSomeValue(websitesList, 100000))


// 4) створити загальний список усіх спонсорів(поки можуть повторюватись, просто зібрати усі у масив)
const getSponsorsNamesList = arr => {
	let sponsorsNamesList = []

	for (let obj of arr) {

		let { sponsorsList } = obj

		sponsorsList.forEach(sponsorObj => sponsorsNamesList.push(`${sponsorObj.sponsorFirstName} ${sponsorObj.sponsorSecondName}`))
	}

	return sponsorsNamesList
}

console.log(getSponsorsNamesList(websitesList))

//! 5) знайти рік, коли прибуток був найбільшим
const getYearWithMaxProfit = arr => {
	let year
	let max = arr[0].websitePrice

	for (let obj of arr) {

		if (obj.websitePrice > max) {
			max = obj.websitePrice
			year = obj.yearOfRelease
		}
	}

	return year
}

console.log(getYearWithMaxProfit(websitesList))

//! 6) упорядкувати список за спаданням прибутку

const getSortObj = arr => arr.sort((a, b) => b.websitePrice - a.websitePrice)
const copyWebsitesList = JSON.parse(JSON.stringify(websitesList))

console.log(getSortObj(copyWebsitesList))

//! 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
const getListWithCopyObj = (arr, value) => {
	const websitesListWithPriceUnder10000 = JSON.parse(JSON.stringify(arr.filter(obj => obj.websitePrice <= value)))
	const websitesListWithPriceOver10000 = JSON.parse(JSON.stringify(arr.filter(obj => obj.websitePrice > value)))

	return [websitesListWithPriceUnder10000, websitesListWithPriceOver10000]
}
console.log(getListWithCopyObj(websitesList, 10000))

