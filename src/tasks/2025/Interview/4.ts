import { l } from '@utils/logger';

/**
 *  * 1) В цепочках ДНК символы «А» и «Т» стоят напротив друг друга, как «С» и «G». Ваша функция получает одну сторону ДНК и возвращает другую, противоположную сторону
 *
 *  То есть:
 *
 *  A всегда меняется на T
 *  T на А
 *  С на G
 *  G на С
 *  ______
 *  Вход:
 *  АААА
 *
 *  Выход:
 *  TTTT
 *
 *  __
 *  Вход:
 *  АTTGC
 *
 *  Выход:
 *  TAACG
 *
 *  __
 *  Вход:
 *  GTAT
 *
 *  Выход:
 *  CATA
 */

type DnaType = 'T' | 'A' | 'C' | 'G';

const DNA_CONVERT: Record<DnaType, DnaType> = {
  T: 'A',
  A: 'T',
  C: 'G',
  G: 'C',
};

const reverceDna = (str: string) =>
  str
    .split('')
    .map((dnk) => DNA_CONVERT[dnk as DnaType])
    .join('');

l(reverceDna, 'ATTGC', 'TAACG');

/**
 *  * 2) Представьте, что метода filter не существует.
 *  Реализуйте свой метод filter при помощи других методов массива
 */

const filter = <T>(data: T[], callback: (value: T, index: number) => boolean): T[] => {
  const result: T[] = [];

  data.forEach((value, index) => {
    if (callback(value, index)) result.push(value);
  });

  return result;
};

l(filter<number>, [[1, 2, 3], (value) => value !== 3], [1, 2]);
