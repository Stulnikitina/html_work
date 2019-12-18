"use strict";

function tree(height) {

    //обрабатываем тривиальные случаи
    if (height <= 2 ) { return null; }
    let tree = "";
    for(let index = 0; index < height; index++){
        tree = tree + ' '.repeat(Math.floor(height - index - 1))+ '*'.repeat(2 * index + 1) + ' '.repeat(Math.floor(height - index - 1)) + '\n';
    }

    tree = tree + ' '.repeat(height - 1) + '|' + ' '.repeat(height - 1) + '\n';
    return tree;

}


