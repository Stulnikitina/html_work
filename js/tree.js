"use strict";

/**
 * @author: Nikitina Olga
 * @description Функция tree, рисует ASCII-ёлочку высотой N символов из звёздочек.
 *
 * @param: {number} height Высота ёлочки
 * @return: {}
 */

let tree = height => {
    if (height <= 2 ) {return null;}
    for(let index = 0; index < height; index++) {
        console.log(' '.repeat(Math.floor(height - index - 1)) + '*'.repeat(2 * index + 1) + ' '.repeat(Math.floor(height - index - 1)));
    };
    console.log(' '.repeat(height - 1) + '|' + ' '.repeat(height - 1));
}



