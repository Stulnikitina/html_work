//https://learn.javascript.ru/task/count-properties
"use strict";

let count = obj => Object.keys(obj).length;

let user = {
    name: 'John',
    age: 30,
    a() {
        console.log(2);
    },
    b: 3,
};

console.log(count(user));









