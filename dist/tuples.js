"use strict";
//m)
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["User"] = "USER";
    UserRole["Guest"] = "GUEST";
})(UserRole || (UserRole = {}));
const tuples = [
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
const readonlyTuple = [
    ...tuples,
];
//q)
console.log(readonlyTuple === tuples, "\n"); // false - Потому-что сравниваем разные ссылки на объекты в памяти!
//r)
const secondTuple = [43, "Hello"]; // ? - указываем, что элемет необязательеный
console.log(secondTuple);
//# sourceMappingURL=tuples.js.map