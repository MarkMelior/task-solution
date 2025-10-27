import { l } from '@utils/logger';

/**
 *  * Классика собеседований, давали очень часто:
 *
 *  Напишите функцию get, которая получает объект и путь к вложенному свойству объекта и возвращает значение этого свойства (или undefined, если свойства не существует). Третий, опциональный аргумент функции — значение по умолчанию, которое возвращается, если значения по указанному пути не существует
 *
 *  function get(obj, path, defaultValue) {
 *      // your code here
 *  }
 *
 *  const obj = {
 *    a: {
 *      b: {
 *        c: 'd'
 *      },
 *      e: 'f'
 *    }
 *  };
 *
 *  get(obj, 'a.b');   // { c : 'd' }
 *  get(obj, 'a.b.c'); // 'd'
 *  get(obj, 'a.e');   // 'f'
 *  get(obj, 'a.x.e'); // undefined
 *  get(obj, 'a.x.e', true); // true
 *  get(obj, 'a.x.e', 'My default value'); // My default value
 */

type ObjectType = Record<string, any>;

const obj: ObjectType = {
  a: {
    b: {
      c: 'd',
    },
    e: 'f',
  },
};

const get = (path: string, defaultValue?: unknown): ObjectType | unknown =>
  path.split('.').reduce((acc, cur) => acc?.[cur], obj) ?? defaultValue;

l(get, 'a.b', { c: 'd' });

l((path: string) => get(path, true), 'a.x.e', true);
