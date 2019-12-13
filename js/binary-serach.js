
jsdoc
function binarySearch(value, list) {

    let first = 0;                
    let last = list.length - 1;  
    let index = -1;
    let middle;


    while (first <= last) {

        middle = Math.floor((first + last) / 2);

        if (list[middle] > value){ 
            last = middle - 1;
        } else {  
            first = middle + 1;
        }

    }

    return list[middle] === value ? middle : null; 

}

let list = [1, 3, 6, 8, 16, 25, 45];
const index = binarySearch(16, list);
console.log(index);