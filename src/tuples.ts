//m)

enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

const tuples: [number, string, boolean, object, UserRole] = [
  65,
  "Hello",
  true,
  { id: 1, name: "Maksim" },
  UserRole.Admin,
];

//n)

console.log(tuples);
console.log(tuples[1]);
console.log(tuples[3]);
console.log(tuples[4], "\n");

//o)

const [first1, second1, ...other1] = tuples;

console.log(first1);
console.log(second1);
console.log(other1, "\n");

//p)

const readonlyTuple: readonly [number, string, boolean, object, UserRole] = [
  ...tuples,
];

//q)

console.log(readonlyTuple === tuples, "\n"); // false - Потому-что сравниваем разные ссылки на объекты в памяти!

//r)

const secondTuple: [number, string, boolean?] = [43, "Hello"]; // ? - указываем, что элемет необязательеный
console.log(secondTuple);
