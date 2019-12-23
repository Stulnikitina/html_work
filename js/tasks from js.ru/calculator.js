//https://learn.javascript.ru/task/calculator
"use strict";

let calculator = {
    a = 2;
    b = 3;

    read() {
        this.a = +prompt('Введите а', 0);
        this.b = +prompt('Введите b', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

