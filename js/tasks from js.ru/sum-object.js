//https://learn.javascript.ru/task/sum-object
"use strict";

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = obj => {
    let s = 0;
    for (let key in obj) {
        s += obj[key];
    }
    return s;
}

console.log(sum(salaries));









