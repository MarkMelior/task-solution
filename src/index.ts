import { s } from '@utils/logger';

/**
 *  * 1) Написать функцию, которая проверяет, является ли строка падиндромом. Вернуть true, если является, и false если нет.
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

// Первое, что пришло в голову
const checkFuck = (str: string) => {
  const converter = str.split(' ').join('').toLocaleLowerCase();
  return converter.split('').reverse().join('') === converter;
};

s('checkFuck', [
  {
    fn: checkFuck,
    input: 'А Роза упала на лапу Азора',
    name: '1',
    expected: true,
  },
  {
    fn: checkFuck,
    input: 'Hello World',
    name: '2',
    expected: false,
  },
]);

// Эффективный по памяти (курсоры)
const checkFast = (str: string) => {
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

s('checkFast', [
  {
    fn: checkFast,
    input: 'А Роза упала на лапу Азора',
    name: '1',
    expected: true,
  },
  {
    fn: checkFast,
    input: 'Hello World',
    name: '2',
    expected: false,
  },
]);

/**
 *  * 2) Написать функцию, которая удаляет все дубликаты из массива.
 *  Вернуть массив без дубликатов
 *
 *  Вход: [2, 3, 1, 2, 5, 2, 1, 7, 4]
 *  Выход: [2, 3, 1, 5, 7, 4]
 */
