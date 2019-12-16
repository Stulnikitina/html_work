/**
 * Создает экземпляр binarySearch.
 *
 * @author: Nikitina Olga
 * @param: {number} value - значение, которое мы ищем в отсортированном массиве list 
 * @param: {array} list - отсортированный массив, где мы хотим, найти значение value
 * @return: {int} индекс значения value в массиве list, если он там есть и null в противном случае
 */
function binarySearch(value, list) {

    let first = 0;                
    let last = list.length - 1;  
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

const list = [1, 3, 6, 8, 16, 25, 45];
console.log(binarySearch(16, list));