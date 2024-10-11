import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

//

const readOnlyArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

readOnlyArray.forEach((e) => console.log(e.join(" ")));

//

const stringsArray: string[] = ["яблоко", "банан", "вишня", "дыня", "ежевика"];

console.log(
  "\nСодержимое массива:",
  stringsArray,
  "\nДлинна массива:",
  stringsArray.length,
);

//

function spl(num: number, str: string): string[] {
  stringsArray.splice(num - 1, 1, str);
  return stringsArray;
}

console.log(spl(2, "персик"));

//

const [first, second, ...others] = stringsArray;

console.log(first);
console.log(second);
console.log(others);

//

const rl = readline.createInterface({ input, output });

const exampleMass: number[] = [2, 3, 4];
const finalMass: number[][] = [];
let currentRow = 0;

const inputMass = (num: number) => {
  if (num >= exampleMass.length) {
    rl.close();
    console.log(finalMass);
    return;
  }

  const temporaryMass: number[] = [];

  const askQuestion = (col: number) => {
    if (col >= exampleMass[num]) {
      finalMass.push(temporaryMass);
      inputMass(num + 1);
      return;
    }

    rl.question(
      `Введите число для ${num + 1} строки массива и для ${
        col + 1
      } вещественного числа: `,
      (answer: string) => {
        temporaryMass.push(Number(answer));
        askQuestion(col + 1);
      },
    );
  };

  askQuestion(0);
};

inputMass(currentRow);
