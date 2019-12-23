//https://learn.javascript.ru/task/copy-sort-array
"use strict";

let copySorted = (arr) => {
    return arr.slice()
              .sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr);// HTML, JavaScript, CSS (без изменений)


