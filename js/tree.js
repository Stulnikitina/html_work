"use strict";

/**
 * @author: Nikitina Olga
 * @description Функция tree, рисует ASCII-ёлочку высотой N символов из звёздочек.
 *
 * @param: {number} height Высота ёлочки
 * @return: {string}
 */

const tree = height => {
    if (height <= 2 ) {return null;}

    let tree = [];
    for(let index = 0; index < height; index++) {tree.push(index);}

    tree = tree.map(line =>
        ' '.repeat(Math.floor(height - line - 1)) + '*'.repeat(2 * line + 1) + ' '.repeat(Math.floor(height - line - 1)) + '\n'
    )

    tree.push(' '.repeat(height - 1) + '|' + ' '.repeat(height - 1) + '\n');

    return tree;
}


