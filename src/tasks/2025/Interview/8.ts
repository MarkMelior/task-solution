import { l } from '@utils/logger';

/**
 *  * 1) Есть массив объектов представляющих данные о разработчиках, которые подписались на участие в встрече по программированию
 *
 *  Ваша задача — вернуть количество JavaScript-разработчиков, приезжающих из Европы .
 *
 *  Например, учитывая следующий список:
 *  let list1 = [
 *    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
 *    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
 *    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
 *    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
 *  ];
 *
 *  Ваша функция должна возвращать число 1.
 *
 *  Если разработчиков JavaScript из Европы нет, ваша функция должна вернуть 0.
 */

interface List {
  firstName: string;
  lastName: string;
  country: string;
  continent: 'Europe' | 'Oceania' | 'Asia';
  age: number;
  language: 'JavaScript' | 'HTML' | 'CSS';
}

const getDevReduce = (list: List[]) =>
  list.reduce((acc, cur) => {
    if (cur.continent === 'Europe' && cur.language === 'JavaScript') {
      return ++acc;
    }
    return acc;
  }, 0);

const getDevFilter = (list: List[]) =>
  list.filter((item) => item.continent === 'Europe' && item.language === 'JavaScript').length;

const list: List[] = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'JavaScript',
  },
  {
    firstName: 'Maia',
    lastName: 'S.',
    country: 'Tahiti',
    continent: 'Oceania',
    age: 28,
    language: 'JavaScript',
  },
  {
    firstName: 'Shufen',
    lastName: 'L.',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML',
  },
  {
    firstName: 'Sumayah',
    lastName: 'M.',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS',
  },
];

l([getDevFilter, getDevReduce], list, 1);

/**
 *  * 2) Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде номера телефона.
 *
 *  Пример
 *  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])                        // =>  "(123) 456-7890"
 */

const getPhone = (array: number[]): string => {
  const arr: (string | number)[] = array;
  arr.splice(0, 0, '(');
  arr.splice(4, 0, ')');
  arr.splice(5, 0, ' ');
  arr.splice(9, 0, '-');
  return arr.join('');
};

l(getPhone, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '(123) 456-7890');
