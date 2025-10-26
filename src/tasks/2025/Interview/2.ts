import { l } from '@utils/logger';

/**
 *  * 1) Написать функцию, которая проверяет, является ли строка палиндромом. Вернуть true, если является, и false если нет.
 *  Палиндром - это когда строка одинаково читается в обе стороны (пробелы и регистры букв опускаются)
 *
 *  Например:
 *
 *  Вход: «А Роза упала на лапу Азора»
 *  Выход: true
 *
 *  Вход: «Hello World»
 *  Выход: false
 */

// 1. Первое, что пришло в голову
export const checkPalindromeFuck = (str: string) => {
  const converter = str.split(' ').join('').toLocaleLowerCase();
  return converter.split('').reverse().join('') === converter;
};

// 2. Эффективный по памяти (курсоры)
export const checkPalindromeFast = (str: string) => {
  const s = str.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === ' ') {
      left++;
      continue;
    }
    if (s[right] === ' ') {
      right--;
      continue;
    }

    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
};

l([checkPalindromeFast, checkPalindromeFuck], 'А Роза упала на лапу Азора', true);
l([checkPalindromeFast, checkPalindromeFuck], 'Hello World', false);

/**
 *  * 2) Написать функцию, которая удаляет все дубликаты из массива.
 *  Вернуть массив без дубликатов
 *
 *  Вход: [2, 3, 1, 2, 5, 2, 1, 7, 4]
 *  Выход: [2, 3, 1, 5, 7, 4]
 */

// 1. Короткий вариант (готовое решение)
export const removeDublicationShort = (arr: number[]) => [...new Set(arr)];

// 2. Ручная реализация
export const removeDublicationCustom = (arr: number[]) => {
  const result: number[] = [];

  arr.forEach((item) => {
    if (result.includes(item)) return;
    result.push(item);
  });

  return result;
};

l(
  [removeDublicationShort, removeDublicationCustom],
  [2, 3, 1, 2, 5, 2, 1, 7, 4],
  [2, 3, 1, 5, 7, 4]
);
