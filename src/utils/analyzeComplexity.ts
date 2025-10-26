/** Размеры тестовых массивов для анализа алгоритмической сложности */
const COMPLEXITY_TEST_SIZES = [10, 100, 1000, 10000] as const;

/**
 * Анализирует алгоритмическую сложность функции, запуская её на массивах разного размера
 * и сравнивая рост времени выполнения с ростом размера данных.
 *
 * @param fn - Функция для анализа
 * @param sampleInput - Пример входных данных для определения типа
 * @param name - Имя функции для логирования
 */
export function analyzeComplexity<TArg, TResult>(
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

  console.log(`📈 ${name}: ${timeRatio.toFixed(2)}x`);
}
