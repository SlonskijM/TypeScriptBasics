"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_readline_1 = __importDefault(require("node:readline"));
const node_process_1 = require("node:process");
// j)
const readOnlyArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
readOnlyArray.forEach((e) => console.log(e.join(" "))); // forEach - пробегает по массиву. join - преобразует массив в строку
// k)
const stringsArray = ["яблоко", "банан", "вишня", "дыня", "ежевика"];
console.log("\nСодержимое массива:", stringsArray, "\nДлинна массива:", stringsArray.length);
// k)
function spl(num, str) {
    stringsArray.splice(num - 1, 1, str); // splice – это метод, выполняющий вставку или удаление элементов массива
    return stringsArray;
}
console.log(spl(2, "персик"));
// k)
const [first, second, ...others] = stringsArray; // Остаточные параметры (...) - т.е Rest оператор!
console.log(first);
console.log(second);
console.log(others);
// l)
const rl = node_readline_1.default.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
const exampleMass = [2, 3, 4];
const finalMass = [];
let currentRow = 0;
const inputMass = (num) => {
    if (num >= exampleMass.length) {
        rl.close();
        console.log(finalMass);
        return;
    }
    const temporaryMass = [];
    const askQuestion = (col) => {
        if (col >= exampleMass[num]) {
            finalMass.push(temporaryMass); // push - добовляет элемент в конец массива
            inputMass(num + 1);
            return;
        }
        rl.question(`Введите число для ${num + 1} строки массива и для ${col + 1} вещественного числа: `, (answer) => {
            temporaryMass.push(Number(answer));
            askQuestion(col + 1);
        });
    };
    askQuestion(0);
};
inputMass(currentRow);
//# sourceMappingURL=arrays.js.map