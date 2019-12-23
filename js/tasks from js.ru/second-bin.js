//https://learn.javascript.ru/task/second-bind
"use strict";

function f() {
    console.log(this.log);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f(); // Вася












