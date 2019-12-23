//https://learn.javascript.ru/task/average-age
"use strict";

let getAverageAge = (arr) => {
    return arr.reduce((avAge, men) => avAge + men.age, 0) / arr.length;
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

console.log(getAverageAge([ vasya, petya, masha ]));// (25 + 30 + 29) / 3 = 28









