"use strict";

function getMaxSubSum(arr) {

    let sum = 0;

    function getMaxOfArray(arr) {
        return Math.max.apply(null, arr);
    }

    if (getMaxOfArray(arr) < 0) {
        console.log(0);
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        let sum_local = 0;
        for (let j = i; j < arr.length; j++) {
            sum_local += arr[j];
            sum = Math.max(sum, sum_local);
        }
    }

    console.log(sum);
    return sum;

};

getMaxSubSum([-1, 2, 3, -9]); //= 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]); //= 6
getMaxSubSum([-1, 2, 3, -9, 11]) ;//= 11
getMaxSubSum([-2, -1, 1, 2]) ;//= 3
getMaxSubSum([100, -9, 2, -3, 5]); //= 100
getMaxSubSum([1, 2, 3]); //= 6 (берём все)
getMaxSubSum([-1, -2, -3]); //= 0


