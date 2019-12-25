"use strict";

/**
 * @author: Nikitina Olga
 * @description Функция tree, рисует ASCII-ёлочку высотой N символов из звёздочек.
 *
 * @param: {number} height Высота ёлочки
 * @return: {}
 */

const tree = height => {

    if (height <= 2 ) {return null;}

    let tree = '';
    for(let index = 0; index < height; index++) {
        tree = tree + ' '.repeat(Math.floor(height - index - 1)) + '*'.repeat(2 * index + 1) + ' '.repeat(Math.floor(height - index - 1)) + '\n';
    };

    return tree = tree + ' '.repeat(height - 1) + '|' + ' '.repeat(height - 1) + '\n';
}


