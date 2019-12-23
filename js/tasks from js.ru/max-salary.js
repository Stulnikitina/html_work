//https://learn.javascript.ru/task/max-salary
"use strict";

let topSalary = salaries => {

    let maxSal = 0;
    let maxSalName = null;

    for (let key in salaries) {
        if (maxSal < salaries[key]) {
            maxSal = salaries[key];
            maxSalName = key;
        }
    }

    return maxSalName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

console.log(topSalary(salaries));










