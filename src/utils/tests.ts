import { describe, it, expect, beforeAll } from 'vitest';
import { analyzeComplexity } from './analyzeComplexity';

/**
 * Представляет один тестовый случай с входными данными и ожидаемым результатом
 * @template TArg - Тип входных данных
 * @template TResult - Тип ожидаемого результата
 */
interface TestCase<TArg, TResult> {
  /** Входные данные для функции */
  input: TArg;
  /** Ожидаемый результат выполнения */
  expected: TResult;
}

/**
 * Опции для измерения производительности функций
 */
interface PerformanceOptions {
  /** Включить замеры производительности */
  showPerformance?: boolean;
}

/**
 * Универсальная функция для тестирования нескольких реализаций с одинаковыми тест-кейсами.
 * Поддерживает анализ производительности и алгоритмической сложности.
 *
 * @template TArg - Тип входных данных функций
 * @template TResult - Тип возвращаемого значения функций
 *
 * @param funcs - Массив функций для тестирования
 * @param cases - Массив тестовых случаев с входными данными и ожидаемыми результатами
 * @param options - Опции для измерения производительности
 *
 * @example
 * ```typescript
 * tFn(
 *   [removeDublicationCustom, removeDublicationShort],
 *   [{ input: [1, 2, 2, 3], expected: [1, 2, 3] }],
 *   { showPerformance: true }
 * );
 * ```
 */
export const t = <TArg, TResult>(
  funcs: Array<(input: TArg) => TResult>,
  cases: readonly TestCase<TArg, TResult>[],
  options: PerformanceOptions = {}
) => {
  const { showPerformance = false } = options;

  // Измерение производительности всех функций сразу
  if (showPerformance && cases.length > 0) {
    beforeAll(() => {
      funcs.forEach((fn) => {
        const name = fn.name || 'anonymous';
        analyzeComplexity(fn, cases[0].input, name);
      });
    });
  }

  funcs.forEach((fn, index) => {
    const name = fn.name || `fn${index + 1}`;

    describe(name, () => {
      // Запуск функциональных тестов
      cases.forEach(({ input, expected }) => {
        const label = JSON.stringify(input);
        it(`${label} → ${JSON.stringify(expected)}`, () => {
          expect(fn(input)).toEqual(expected);
        });
      });
    });
  });
};
