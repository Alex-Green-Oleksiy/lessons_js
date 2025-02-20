"use strict";

// Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
if (confirm("Почати тестування?")) {
    let evenCount = 0; // Парних

    let oddCount = 0; // Непарних

    for (let i = 0; i < 100; i++) {
        let randomNumber = Math.floor(Math.random() * 1000);
        if (randomNumber % 2) ++oddCount;
        else evenCount++;
    }

    if (evenCount > oddCount) {
        document.write(`
        <p>Парних : ${evenCount}</p> 
        <p>Непарних : ${oddCount}</p>
        Парних чисел більше на: ${Math.abs(evenCount - oddCount)}`);
    } else if (oddCount > evenCount) {
        document.write(
            `
        <p>Парних : ${evenCount}</p> 
        <p>Непарних : ${oddCount}</p>
        Непарних чисел більше на: ${Math.abs(oddCount - evenCount)}`
        );
    } else {
        document.write("Парних і непарних чисел однакова кількість.");
    }
}
