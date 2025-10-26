import { describe, it, expect, beforeAll } from 'vitest';

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

/** Размеры тестовых массивов для анализа алгоритмической сложности */
const COMPLEXITY_TEST_SIZES = [10, 100, 1000, 10000] as const;

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
export const tFn = <TArg, TResult>(
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

/**
 * Анализирует алгоритмическую сложность функции, запуская её на массивах разного размера
 * и сравнивая рост времени выполнения с ростом размера данных.
 *
 * @param fn - Функция для анализа
 * @param sampleInput - Пример входных данных для определения типа
 * @param name - Имя функции для логирования
 */
function analyzeComplexity<TArg, TResult>(
  fn: (input: TArg) => TResult,
  sampleInput: TArg,
  name: string
): void {
  const timings: number[] = [];

  // Замеряем время для массивов разного размера
  COMPLEXITY_TEST_SIZES.forEach((size) => {
    // Генерируем тестовый input на основе типа sampleInput
    let largeInput: TArg;

    if (Array.isArray(sampleInput)) {
      // Для массивов: генерируем массив с повторяющимися элементами
      largeInput = Array.from({ length: size }, (_, i) => i % (size / 2)) as TArg;
    } else if (typeof sampleInput === 'string') {
      // Для строк: генерируем строку с повторяющимися символами
      largeInput = Array.from({ length: size }, (_, i) => String.fromCharCode(97 + (i % 26))).join(
        ''
      ) as TArg;
    } else {
      // Для остальных типов: используем оригинальный input
      largeInput = sampleInput;
    }

    const start = performance.now();
    fn(largeInput);
    const elapsed = performance.now() - start;

    timings.push(elapsed);
  });

  // Вычисляем соотношение роста времени к росту размера данных
  const timeRatio = timings[timings.length - 1] / timings[0];
  const sizeRatio =
    COMPLEXITY_TEST_SIZES[COMPLEXITY_TEST_SIZES.length - 1] / COMPLEXITY_TEST_SIZES[0];

  console.log(`📈 ${name}: ${timeRatio.toFixed(2)}x (size: ${sizeRatio}x)`);
}
