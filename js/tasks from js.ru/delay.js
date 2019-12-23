//https://learn.javascript.ru/task/delay
"use strict";

let delay = (f, ms) => function(){
    return setTimeout(() => f.apply(this, arguments), ms);
}


let f = x => {console.log(x)};

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс










