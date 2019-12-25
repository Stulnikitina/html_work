"use strict";

/**
 * @author: Nikitina Olga
 * @description Функция anagram, которая
 * будет принимать на вход массив слов и группировать его на группы слов-анаграмм.
 * Выводить только группы из двух и более слов.
 * Слова в группах, как и сами группы, должны быть отсортированными.
 *
 * @param: {array} arr Массив слов
 * @return: {array} 
 */

let anagram = arr => {
    let dict = {};

    arr.map( word => {
        let sorted = word
            .toLowerCase()
            .split("")
            .sort((a, b) => a.localeCompare(b))
            .join("");
        if (!(sorted in dict)) {
            dict[sorted] = new Set();
        }
        dict[sorted].add(word);
    });

    return Object
        .values(dict)
        .filter(set => set.size >= 2)
        .map(set => Array.from(set));
};

let arr = [
    'стоп', 'ток', 'кошка',
    'пила', 'коробка', 'кот',
    'барокко', 'пост', 'липа'
];

console.log(anagram(arr));


