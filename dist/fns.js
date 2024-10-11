"use strict";
function main(mass, str) {
    return [
        Math.max.apply(Math, mass),
        Math.min.apply(Math, mass),
        mass.reduce(function (acc, num) {
            return acc + num;
        }, 0),
        str[0],
    ];
}
console.log(main([1, 2, 3, 4, 5, 6, 7, 8, 9], "Hello!"));
//# sourceMappingURL=fns.js.map