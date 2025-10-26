/**
 *  * 1) Сделать цикл и вывести числа от 0 до 100 включительно в console.log
 *
 *  • Если число делится на 3 то рядом с числом вывести строку  «Fizz».
 *  • Если число делится на 5, то рядом с числом вывести строку  «Buzz».
 *  • Если число делится одновременно на 3 и на 5, то рядом вывести «FizzBuzz».
 */

// 1. Первое, что пришло в голову
for (let i = 0; i <= 100; i++) {
  let result: string = `${i} `;
  if (i % 3 === 0) result += 'Fizz';
  if (i % 5 === 0) result += 'Buzz';
  console.log('---result', result);
}

// 2. Рекурсия
const cycleFizzBuzz = (i = 0) => {
  if (i > 100) return;
  let result = '';
  if (i % 3 === 0) result += 'Fizz';
  if (i % 5 === 0) result += 'Buzz';
  console.log(i, result);
  cycleFizzBuzz(i + 1);
};
cycleFizzBuzz();

/**
 *  * 2) Дан массив чисел
 *
 *  let nums = [4, 5, 1, 2, -10, 100, 5];
 *
 *  Написать функцию, которая возвращает массив с минимальным и максимальным числами из этого массива.
 *  То есть на выходе будет [ -10, 100]
 */

const nums = [4, 5, 1, 2, -10, 100, 5];

type MinMaxFn = (arr: number[]) => [number, number];

// 1. Короткий вариант
const getMinMaxShort: MinMaxFn = (nums) => [Math.min(...nums), Math.max(...nums)];

// 2. Эффективный по памяти
const getMinMaxFast: MinMaxFn = (arr) => {
  let min = Infinity;
  let max = -Infinity;
  arr.forEach((item) => {
    if (item < min) min = item;
    if (item > max) max = item;
  });
  return [min, max];
};

console.log('---getMinMaxShort(nums)', getMinMaxShort(nums));

console.log('---getMinMaxFast(nums)', getMinMaxFast(nums));
