"use strict";

/**
 * Создаем экземпляр sort.
 * Функция sort, которая будет сортировать буквы в словах по алфавиту,
 * а потом получившиеся слова в предложении — тоже.
 * Первую букву каждого слова она сделает прописной, остальные — строчными.
 *
 * @author: Nikitina Olga
 * @param: {sentence} - сортируемое предложение
 * @return: отсортированный {arrWords}
 */

let sort = sentence => {
    let arrWords = sentence.split(" ");

    arrWords = arrWords.map(function(word) {        
        word.toLowerCase();
        word = word.split("");
        word.sort();
        word = word.join("");
        if(word.includes("жё")){
            while (true) {
                let foundPos = word.indexOf("жё", 0);
                word = word.replace("жё","ёж");
                if (foundPos == -1) break;

            }
        }
        return `${word[0].toUpperCase()}${word.slice(1)}`;
    });

    arrWords.sort();
    arrWords = arrWords.join(" ");

    return arrWords;
}





