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
export function l<T = any, R = any>(
  fn: ((input: T) => R) | Array<(input: T) => R>,
  input: T,
  expected?: R
): void {
  const isArray = Array.isArray(fn);
  const fns = isArray ? fn : [fn];

  fns.forEach((currentFn) => {
    const fnName = currentFn.name || '[anonymous]';
    const result = currentFn(input);
    const passed =
      expected !== undefined ? JSON.stringify(result) === JSON.stringify(expected) : true;

    const status = passed ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`;

    console.log(`\n${status} ${colors.bright}${fnName}${colors.reset}`);
    console.log(`  ${colors.cyan}Input:${colors.reset}    ${formatValue(input)}`);
    console.log(`  ${colors.blue}Output:${colors.reset}   ${formatValue(result)}`);

    if (expected !== undefined) {
      console.log(`  ${colors.gray}Expected:${colors.reset} ${formatValue(expected)}`);
      if (!passed) console.log(`  ${colors.red}FAILED${colors.reset}`);
    }

    if (isArray) analyzeComplexity(currentFn, input, fnName);
  });
}
