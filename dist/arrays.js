"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_readline_1 = __importDefault(require("node:readline"));
var node_process_1 = require("node:process");
//
var readOnlyArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
readOnlyArray.forEach(function (e) { return console.log(e.join(" ")); });
//
var stringsArray = ["яблоко", "банан", "вишня", "дыня", "ежевика"];
console.log("\nСодержимое массива:", stringsArray, "\nДлинна массива:", stringsArray.length);
//
function spl(num, str) {
    stringsArray.splice(num - 1, 1, str);
    return stringsArray;
}
console.log(spl(2, "персик"));
//
var first = stringsArray[0], second = stringsArray[1], others = stringsArray.slice(2);
console.log(first);
console.log(second);
console.log(others);
//
var rl = node_readline_1.default.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
var exampleMass = [2, 3, 4];
var finalMass = [];
var currentRow = 0;
var inputMass = function (num) {
    if (num >= exampleMass.length) {
        rl.close();
        console.log(finalMass);
        return;
    }
    var temporaryMass = [];
    var askQuestion = function (col) {
        if (col >= exampleMass[num]) {
            finalMass.push(temporaryMass);
            inputMass(num + 1);
            return;
        }
        rl.question("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u043B\u044F ".concat(num + 1, " \u0441\u0442\u0440\u043E\u043A\u0438 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0438 \u0434\u043B\u044F ").concat(col + 1, " \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430: "), function (answer) {
            temporaryMass.push(Number(answer));
            askQuestion(col + 1);
        });
    };
    askQuestion(0);
};
inputMass(currentRow);
//# sourceMappingURL=arrays.js.map