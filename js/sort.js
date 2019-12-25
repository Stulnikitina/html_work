"use strict";

/**
 * @author: Nikitina Olga
 * @description Функция sort, которая будет сортировать буквы в словах по алфавиту,
 * а потом получившиеся слова в предложении — тоже.
 * Первую букву каждого слова она сделает прописной, остальные — строчными.
 *
 * @param: {string} sentence Cортируемое предложение
 * @return: {string}
 */

let sort = sentence =>{
    return sentence.split(" ")
         .map((word) => {
             word = word.toLowerCase()
            .split("")
            .sort((a, b) => a.localeCompare(b))
            .join("");
            return `${word[0].toUpperCase()}${word.slice(1)}`;
         })
        .sort((a, b) => a.localeCompare(b))
        .join(" ");
};







