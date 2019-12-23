//https://learn.javascript.ru/task/array-get-names

"use strict";

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let names = [ vasya, petya, masha ].map(item => item.name).join(', ');

console.log(names);



