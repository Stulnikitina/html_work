//https://learn.javascript.ru/task/copy-sort-array
"use strict";

function copySorted(arr) {
    let sortedArr = arr.slice();
    sortedArr.sort();
    return sortedArr;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr);// HTML, JavaScript, CSS (без изменений)


