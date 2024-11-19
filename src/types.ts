// Примитивные типы TS d)

let num: number = 20;
let str: string = "Str";
let bool: boolean = true;
let n: null = null; // когда мы явно указываем, что переменная не имеет значения
let u: undefined; // let u

// Type Assertion - Явно казать тип перменной e)

let someValue: any = "This is a string";
let strLength: number = (someValue as string).length; // length - Длинна!
console.log(strLength);

let someArray: any = [1, 2, 3, 4];
let numberArray = someArray as number[]; // Массив из чисел
console.log(
  numberArray.reduce((acc, num) => {
    // reduce - Сумма чисел массива!
    return acc + num;
  }, 0), // acc = 0!!!
);

// Неявно типизированные переменные f)

const message = "Hello!!!";
console.log(message);

let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

// Пример работы с null и undefined  а так же демонстрация union типа g) & h)

function checkValue(value: number | null | undefined): string {
  // union тип - value: number | null | undefined.
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

// enum i)

enum Count { // Enum - это перечисления, которые позволяют определить набор именованных констант
  First = "первый",
  Second = "второй",
}

console.log(Count.First);
