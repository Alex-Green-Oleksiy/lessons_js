"use strict";
//20. Дано два двоцифрові числа А і В.
// З цих чисел утворили два чотирицифрові числа:
// перше число отримали шляхом запису спочатку числа А, потім В,
//  друге – шляхом запису спочатку В, потім А. Знайти числа А і В,
// якщо відомо, що перше чотиризначне число націло ділиться на 99, а друге на 49.

for (let a = 10; a <= 99; a++) {
    for (let b = 10; b <= 99; b++) {
        const ab = a * 100 + b;

        if (ab % 99) continue;

        const ba = b * 100 + a;

        if (ba % 49) continue;

        document.write(`A = ${a}; B = ${b}.`);
    }
}
