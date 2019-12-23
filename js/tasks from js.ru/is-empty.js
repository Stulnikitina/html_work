//https://learn.javascript.ru/task/is-empty
"use strict";
let isEmpty = obj => !Object.keys(obj).length;

let obj1 = {
};

console.log(isEmpty(obj1));



