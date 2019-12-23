//https://learn.javascript.ru/task/is-empty
"use strict";

let obj1 = {
};

let isEmpty = (obj) => !Object.keys(obj).length;

console.log(isEmpty(obj1));



