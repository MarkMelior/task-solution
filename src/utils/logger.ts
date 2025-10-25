/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Утилита логирования для тестирования и отладки функций.
 * Выводит цветные сообщения в консоль с форматированным отображением входных и выходных данных.
 *
 * @example Быстрый лог без проверки результата
 * log('Проверка палиндрома', checkPalindrome, 'racecar');
 *
 * @example Лог с проверкой ожидаемого результата
 * log('Тест суммы', add, [2, 3], 5);
 *
 * @example Набор тестов с несколькими кейсами
 * suite('Математические тесты', [
 *   { name: 'Сложение', fn: add, input: [2, 3], expected: 5 },
 *   { name: 'Вычитание', fn: sub, input: [5, 3], expected: 2 },
 * ]);
 */

export interface TestCase<T = any, R = any> {
  name: string;
  input: T;
  expected?: R;
  fn: (input: T) => R;
}

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};

function formatValue(value: any): string {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (typeof value === 'string') return `"${value}"`;
  if (Array.isArray(value)) return JSON.stringify(value);
  if (typeof value === 'object') return JSON.stringify(value, null, 2);
  return String(value);
}

/**
 * Логирует результат выполнения функции с красивым форматированием
 *
 * @template T - Тип входных данных
 * @template R - Тип результата
 * @param name - Название теста
 * @param fn - Функция для тестирования
 * @param input - Входные данные
 * @param expected - Ожидаемый результат (опционально, для проверки)
 */
export function log<T = any, R = any>(
  name: string,
  fn: ((input: T) => R) | Array<(input: T) => R>,
  input: T,
  expected?: R
): void {
  const fns = Array.isArray(fn) ? fn : [fn];

  fns.forEach((currentFn) => {
    const fnName = currentFn.name || '[anonymous]';
    const label = `${name} (${fnName})`;

    const result = currentFn(input);
    const passed =
      expected !== undefined ? JSON.stringify(result) === JSON.stringify(expected) : true;

    const status = passed ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`;

    console.log(`\n${status} ${colors.bright}${label}${colors.reset}`);
    console.log(`  ${colors.cyan}Input:${colors.reset}    ${formatValue(input)}`);
    console.log(`  ${colors.blue}Output:${colors.reset}   ${formatValue(result)}`);

    if (expected !== undefined) {
      console.log(`  ${colors.gray}Expected:${colors.reset} ${formatValue(expected)}`);
      if (!passed) console.log(`  ${colors.red}FAILED${colors.reset}`);
    }
  });
}

/**
 * Выполняет один тест-кейс
 *
 * @template T - Тип входных данных
 * @template R - Тип результата
 * @param testCase - Объект с описанием теста
 *
 * @example
 * ```typescript
 * test({
 *   name: 'Проверка палиндрома',
 *   fn: checkPalindrome,
 *   input: 'А Роза упала на лапу Азора',
 *   expected: true
 * });
 * ```
 */
export function test<T = any, R = any>(testCase: TestCase<T, R>): void {
  log(testCase.name, testCase.fn, testCase.input, testCase.expected);
}

/**
 * Запускает набор тестов (test suite) с подсчетом статистики
 *
 * @param name - Название набора тестов
 * @param tests - Массив тест-кейсов
 */
export function suite(name: string, tests: Array<TestCase>): void {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${colors.bright}${colors.yellow}${name}${colors.reset}`);
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  tests.forEach((testCase) => {
    try {
      const result = testCase.fn(testCase.input);
      const isPassed =
        testCase.expected !== undefined
          ? JSON.stringify(result) === JSON.stringify(testCase.expected)
          : true;

      if (isPassed) passed++;
      else failed++;

      test(testCase);
    } catch (error) {
      failed++;
      console.log(
        `\n${colors.red}✗${colors.reset} ${colors.bright}${testCase.name}${colors.reset}`
      );
      console.log(`  ${colors.red}Error: ${error}${colors.reset}`);
    }
  });

  console.log(`\n${'-'.repeat(60)}`);
  console.log(
    `${colors.green}Passed: ${passed}${colors.reset} | ` +
      `${colors.red}Failed: ${failed}${colors.reset} | ` +
      `Total: ${passed + failed}`
  );
  console.log('='.repeat(60));
}

// Короткие алиасы
export const t = test;
export const s = suite;
