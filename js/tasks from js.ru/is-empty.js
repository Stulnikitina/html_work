//https://learn.javascript.ru/task/is-empty
"use strict";

function isEmpty(obj) {
    for (let key in obj){
        if (key === "isEmpry2") continue;
        return false;
    }
    return true;
};

function f() {
    for (let key in this){
        if (key === "isEmpry2") continue;
        return false;
    }
    return true;
};

let obj1 = {
    name: 123,
};

let obj2 = {
};

obj1.isEmpry2 = f;
obj2.isEmpry2 = f;

console.log(isEmpty(obj1));
console.log(obj1.isEmpry2());

console.log(isEmpty(obj2));
console.log(obj2.isEmpry2());


