import { l } from '@utils/logger';

/**
 *  * 1) Вам дан массив (список) strarr строк и целое число k. Ваша задача — вернуть первую самую длинную строку, состоящую из k последовательных строк, взятых в массиве.
 *
 *  function longestConsec(strarr, k) {
 *  }
 *  _____
 *  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
 *
 *  Выход: "abigailtheta"
 *  ____
 *  longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)
 *
 *  Выход: "wlwsasphmxxowiaxujylentrklctozmymu")
 *  ____
 *
 *  longestConsec([], 3)
 *  Выход:""
 */

const longestConsec = (arr: string[], k = 2) => {
  let str = '';

  for (let i = 0; arr.length > i; i++) {
    let concated = '';

    for (let l = 0; l !== k; l++) {
      concated += arr[i + l] ?? '';
    }

    if (concated.length > str.length) str = concated;
  }

  return str;
};

l(longestConsec, ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 'abigailtheta');

l(
  longestConsec,
  ['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'],
  'wlwsasphmxxowiaxujylentrklctozmymu'
);

/**
 *  * 2) Написать функцию мемоизации, которая прибавляет 10 к заданному числу
 *
 *  newAdd(9) //вычислит
 *  первый вызов функции прибавит к 9 число 10 и вернет ответ 19
 *
 *  newAdd(9) //возьмет из кэша
 *  второй вызов функции с этим же числом 9 НЕ будет вычислять все заново, а возьмет значение из кэша
 */

const cache = new Map([]);

const newAdd = (n: number) => {
  if (cache.has(n)) {
    const fromCache = cache.get(n);
    console.log('Достали из кэша:', fromCache);
    return fromCache;
  }

  const res = n + 10;
  cache.set(n, res);
  return res;
};

console.log('---newAdd', newAdd(8));
console.log('---newAdd', newAdd(9));
console.log('---newAdd', newAdd(8));
console.log('---newAdd', newAdd(19));
