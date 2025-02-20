"use strict";

// 22. Є шматок тканини довжиною M метрів. Від нього послідовно відрізають шматки різної довжини.
// Усі дані щодо використання тканини вводяться до комп'ютера.
// Комп'ютер повинен вивести повідомлення про те,
//  що матеріалу не вистачає, якщо буде потрібен шматок тканини,
//  довжина якого перевищує довжину шматка, що залишився.
if (confirm("Почати тестування?")) {
    let textileLength = parseFloat(
        prompt("Введіть довжину тканини у метрах", "156")
    );

    document.write(`<p>Було ${textileLength} м. тканини`);

    do {
        const toCut = parseFloat(
            prompt(`Є ${textileLength} м.\nСкільки відрізати?`, "50")
        );

        if (toCut > textileLength) {
            alert(`Матеріалу не вистачає!`);
            continue;
        }

        textileLength -= toCut;
        document.write(`<p>Ви відрізали ${toCut} м.`);
    } while (textileLength > 0);
}
