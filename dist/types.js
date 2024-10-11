"use strict";
// Примитивные типы TS
var num = 20;
var str = "Str";
var bool = true;
var n = null;
var u = undefined;
// Type Assertion
var someValue = "This is a string";
var strLength = someValue.length;
console.log(strLength);
var someArray = [1, 2, 3, 4];
var numberArray = someArray;
console.log(numberArray.reduce(function (acc, num) {
    return acc + num;
}, 0));
// Неявно типизированные переменные
var message = "Hello!!!";
console.log(message);
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
// Пример работы с null и undefined  а так же демонстрация union типа
function checkValue(value) {
    if (value === null) {
        return "\nValue is null.";
    }
    else if (value === undefined) {
        return "Value is undefined.";
    }
    else {
        return "Value is ".concat(typeof value, ".");
    }
}
var value = null;
var value1;
var value2 = 50;
console.log(checkValue(value));
console.log(checkValue(value1));
console.log(checkValue(value2));
// enum
var Count;
(function (Count) {
    Count["First"] = "\u043F\u0435\u0440\u0432\u044B\u0439";
    Count["Second"] = "\u0432\u0442\u043E\u0440\u043E\u0439";
})(Count || (Count = {}));
console.log(Count.First);
//# sourceMappingURL=types.js.map