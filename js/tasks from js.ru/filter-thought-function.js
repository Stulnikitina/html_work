//https://learn.javascript.ru/task/filter-through-function
"use strict";

let inBetween = (left, right) => item => (item <= right && item >= left);

let inArray = serchArr => item => !!(serchArr.indexOf(item, 0) + 1);

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3,6)) ); // 3,4,5,6

console.log( arr.filter(inArray([13, 0, 10])) ); //









