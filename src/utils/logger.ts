/* eslint-disable @typescript-eslint/no-explicit-any */

import { analyzeComplexity } from './analyzeComplexity';

export interface TestCase<T = any, R = any> {
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
 * @template Args - Типы входных аргументов
 * @template R - Тип результата
 * @param fn - Функция для тестирования (одна или массив)
 * @param input - Входные данные (один аргумент или массив аргументов)
 * @param expected - Ожидаемый результат (опционально, для проверки)
 */
export function l<Args extends any[], R = any>(
  fn: ((...args: Args) => R) | Array<(...args: Args) => R>,
  input: Args extends [infer Single] ? Single | [Single] : Args,
  expected?: R
): void {
  const isArray = Array.isArray(fn);
  const fns = isArray ? fn : [fn];

  // Нормализуем input к массиву аргументов
  const args =
    Array.isArray(input) && (input.length !== 1 || Array.isArray(input[0]))
      ? (input as Args)
      : ([input] as Args);

  fns.forEach((currentFn) => {
    const fnName = currentFn.name || '[anonymous]';
    const result = currentFn(...args);
    const passed =
      expected !== undefined ? JSON.stringify(result) === JSON.stringify(expected) : true;

    const status = passed ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`;

    console.log(`\n${status} ${colors.bright}${fnName}${colors.reset}`);

    // Форматируем вывод входных данных
    if (args.length === 1) {
      console.log(`  ${colors.cyan}Input:${colors.reset}    ${formatValue(args[0])}`);
    } else {
      console.log(`  ${colors.cyan}Inputs:${colors.reset}`);
      args.forEach((arg, i) => {
        console.log(`    [${i}]: ${formatValue(arg)}`);
      });
    }

    console.log(`  ${colors.blue}Output:${colors.reset}   ${formatValue(result)}`);

    if (expected !== undefined) {
      console.log(`  ${colors.gray}Expected:${colors.reset} ${formatValue(expected)}`);
      if (!passed) console.log(`  ${colors.red}FAILED${colors.reset}`);
    }

    if (isArray) {
      const wrappedFn = (argsArray: Args) => currentFn(...argsArray);
      analyzeComplexity(wrappedFn, args, fnName);
    }
  });
}
