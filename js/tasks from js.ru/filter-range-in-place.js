//https://learn.javascript.ru/task/filter-range-in-place
"use strict";

function filterRangeInPlace(arr, left, right) {
    for (let i = 0; i < arr.length; ++i){
        if (arr[i] < left || arr[i] > right)
            arr.splice(i, 1);
    }
};

let arr = [5, 3, 8, 1, 4];
filterRangeInPlace(arr, 1, 4);
console.log(arr);