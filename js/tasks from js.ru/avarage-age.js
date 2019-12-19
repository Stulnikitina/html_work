//https://learn.javascript.ru/task/average-age
"use strict";

function getAverageAge(arr){
    let avarageAge = arr.reduce((avAge, men) => avAge + men.age, 0);
    return  avarageAge / arr.length;
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log(getAverageAge(arr));// (25 + 30 + 29) / 3 = 28









