// Примитивные типы TS

let num: number = 20;
let str: string = "Str";
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;

// Type Assertion

let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);

let someArray: any = [1, 2, 3, 4];
let numberArray = someArray as number[];
console.log(
  numberArray.reduce((acc, num) => {
    return acc + num;
  }, 0),
);

// Неявно типизированные переменные

const message = "Hello!!!";
console.log(message);

let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

// Пример работы с null и undefined  а так же демонстрация union типа

function checkValue(value: number | null | undefined): string {
  if (value === null) {
    return "\nValue is null.";
  } else if (value === undefined) {
    return "Value is undefined.";
  } else {
    return `Value is ${typeof value}.`;
  }
}

let value: null = null;
let value1: undefined;
let value2: number = 50;

console.log(checkValue(value));
console.log(checkValue(value1));
console.log(checkValue(value2));

// enum

enum Count {
  First = "первый",
  Second = "второй",
}

console.log(Count.First);
