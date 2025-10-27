import { l } from '@utils/logger';

/**
 *  * 1) Создать функцию, которая принимает строку и преобразовывает каждую первую букву строки в заглавную и возвращает преобразованную строку
 *
 *  Вход: "How can mirrors be real if our eyes aren't real"
 *
 *  Выход: "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */

const firstUpper = (str: string) =>
  str
    .split(' ')
    .map((ch) => ch[0].toUpperCase() + ch.slice(1))
    .join(' ');

l(
  firstUpper,
  "How can mirrors be real if our eyes aren't real",
  "How Can Mirrors Be Real If Our Eyes Aren't Real"
);

/**
 *  * 2) Дана строка состоящая из следующего набора скобок: (, ), {, }, [ и ]. Каждой открывающей скобке соответствует закрывающая, образуя пары.
 *
 *  Будем считать строку «правильной» если все скобки закрываются в нужном порядке, т.е:
 *  - для каждой открывающей есть закрывающая из той же пары;
 *  - скобки закрываются в правильном порядке.
 *  -пустая строка считается правильной.
 *
 *  Написать функцию, которая принимает на вход скобки и возвращает true или false
 *
 *
 *  isValid('()[]{}') // true
 *
 *  isValid('{[]}') // true
 *
 *  isValid('((()(())))') // true
 *
 *  isValid('(]') // false
 *
 *  isValid('([)]') // false
 *
 */

const pairs: Record<string, string> = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const open = new Set(['(', '[', '{']);

const isValid = (s: string): boolean => {
  const stack: string[] = [];

  for (const ch of s) {
    if (open.has(ch)) stack.push(ch);
    else if (stack.pop() !== pairs[ch]) return false;
  }

  return stack.length === 0;
};

l(isValid, '([][])[{()}]{}', true);
l(isValid, '([][){()}{}]', false);
