function main(mass: number[], str: string): [number, number, number, string] {
  return [
    Math.max(...mass),
    Math.min(...mass),
    mass.reduce((acc, num) => {
      return acc + num;
    }, 0),
    str[0],
  ];
}

console.log(main([1, 2, 3, 4, 5, 6, 7, 8, 9], "Hello!"));
