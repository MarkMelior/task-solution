import { l } from '@utils/logger';

/**
 *  * 1) тоже часто дают на собеседованиях
 *  Решений множество, попробуйте сделать самый эффективный по времени)
 *
 *  Нужно проверить, есть ли в массиве два целых числа x и y, которые при сложении равны указанному значению k
 *
 *  Например:
 *
 *  findPairWithSum(arr, k){}
 *
 *  let arr = [1, 2, 3, 4, 5, 6];
 *  let k = 11;
 *
 *  Вернёт true, потому что такие числа есть в массиве
 */

const findPairWithSum = (arr: number[], k = 11): boolean => {
  const seen = new Set<number>([]);

  for (const num of arr) {
    if (seen.has(k - num)) return true;
    seen.add(num);
  }

  return false;
};

l(findPairWithSum, [1, 2, 3, 4, 5, 6], true);

/**
 *  * 2) Проверить, является ли 2 переданных строки анаграммой
 *
 *  const anagram = (strA, strB) => {}
 *
 *  console.log(anagram('finder', 'Friend')) // true
 *  console.log(anagram('hello', 'bye')) // false
 */
const anagram = (str1: string, str2: string) => {
  const normalize = (str: string) => str.toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
};

l(() => anagram('finder', 'Friend'), undefined, true);
