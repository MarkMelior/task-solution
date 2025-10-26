import { l } from '@utils/logger';

/**
 *  * 1) Написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.  Гласными являются «a», «e», «i», «o», «u».
 *
 *  Например:
 *  Вход: morning
 *  Выход: 2
 */

const VOWEL_LETTERS = new Set(['a', 'e', 'i', 'o', 'u']);

export const getVowelCount = (str: string) =>
  str
    .toLowerCase()
    .split('')
    .filter((ch) => VOWEL_LETTERS.has(ch)).length;

l(getVowelCount, 'morning', 2);

/**
 *  * 2) Определить сколько раз каждый элемент встречается в массиве.
 *
 *  Вход:
 *  ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
 *
 *  Выход: {kiwi: 3, apple: 2, orange: 1}
 */

export const getElementsCount = (arr: string[]) => {
  const result: Record<string, number> = {};

  arr.forEach((item) => {
    result[item] = (result[item] ?? 0) + 1;
  });

  return result;
};

l(getElementsCount, ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'], {
  kiwi: 3,
  apple: 2,
  orange: 1,
});
