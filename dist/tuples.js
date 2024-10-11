"use strict";
//m)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["User"] = "USER";
    UserRole["Guest"] = "GUEST";
})(UserRole || (UserRole = {}));
var tuples = [
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
var first1 = tuples[0], second1 = tuples[1], other1 = tuples.slice(2);
console.log(first1);
console.log(second1);
console.log(other1, "\n");
//p)
var readonlyTuple = __spreadArray([], tuples, true);
//q)
console.log(readonlyTuple === tuples, "\n");
//r)
var secondTuple = [43, "Hello"];
console.log(secondTuple);
//# sourceMappingURL=tuples.js.map