//https://learn.javascript.ru/task/sort-objects
"use strict";

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

arr.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
});

// теперь: [vasya, masha, petya]
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);










