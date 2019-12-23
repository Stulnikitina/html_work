//https://learn.javascript.ru/task/copy-sort-array
"use strict";

let copySorted = arr => arr.slice().sort();

let arr = ["HTML", "JavaScript", "CSS"];
console.log(arr); // HTML, JavaScript, CSS (без изменений)
console.log(copySorted(arr)); // CSS, HTML, JavaScript


