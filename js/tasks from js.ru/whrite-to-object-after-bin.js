//https://learn.javascript.ru/task/write-to-object-after-bind
"use strict";

function f() {
    console.log(this); // ?
}

let user = {
    g: f.bind(null)
};

user.g(); //выведет null










