"use strict";
// Примитивные типы TS d)
let num = 20;
let str = "Str";
let bool = true;
let n = null; // когда мы явно указываем, что переменная не имеет значения
let u; // let u
// Type Assertion - Явно казать тип перменной e)
let someValue = "This is a string";
let strLength = someValue.length; // length - Длинна!
console.log(strLength);
let someArray = [1, 2, 3, 4];
let numberArray = someArray; // Массив из чисел
console.log(numberArray.reduce((acc, num) => {
    // reduce - Сумма чисел массива!
    return acc + num;
}, 0));
// Неявно типизированные переменные f)
const message = "Hello!!!";
console.log(message);
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
// Пример работы с null и undefined  а так же демонстрация union типа g) & h)
function checkValue(value) {
    // union тип - value: number | null | undefined.
    if (value === null) {
        return "\nValue is null.";
    }
    else if (value === undefined) {
        return "Value is undefined.";
    }
    else {
        return `Value is ${typeof value}.`;
    }
}
let value = null;
let value1;
let value2 = 50;
console.log(checkValue(value));
console.log(checkValue(value1));
console.log(checkValue(value2));
// enum i)
var Count;
(function (Count) {
    Count["First"] = "\u043F\u0435\u0440\u0432\u044B\u0439";
    Count["Second"] = "\u0432\u0442\u043E\u0440\u043E\u0439";
})(Count || (Count = {}));
console.log(Count.First);
//# sourceMappingURL=types.js.map