# 🚀 Task Solution

Мои решения алгоритмических задач с CodeWars, LeetCode и собеседований. Проект настроен для эффективного решения задач с поддержкой TypeScript, автотестов и бенчмарков.

## 📊 Мои профили

<div align="center">

### CodeWars
[![CodeWars](https://www.codewars.com/users/MarkMelior/badges/large)](https://www.codewars.com/users/MarkMelior)

### LeetCode
[![LeetCode](https://img.shields.io/badge/dynamic/json?style=for-the-badge&labelColor=black&color=%23ffa116&label=Solved&query=solvedOverTotal&url=https%3A%2F%2Fbadge.xyli.tech/%2Fapi%2Fusers%2FMarkMelior&logo=leetcode&logoColor=yellow)](https://leetcode.com/MarkMelior/)

</div>

## 🛠 Стек технологий

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

## 📁 Структура проекта

```
task-solution/
├── src/
│   ├── tasks/
│   │   ├── 2021/          # Задачи 2021 года
│   │   ├── 2023/          # Задачи 2023 года
│   │   └── 2025/          # Задачи 2025 года
│   ├── utils/
│   │   ├── tests.ts      # Универсальные хелперы для тестирования
│   │   ├── logger.ts            # Утилиты логирования (deprecated)
│   │   └── arrayToBinaryTree.ts # Конвертация массивов в бинарные деревья
│   ├── index.ts           # Точка входа для быстрых экспериментов
│   └── index.spec.ts      # Тесты для быстрых экспериментов
├── .gitignore
├── .prettierrc.json
├── eslint.config.js
├── package.json
├── README.md
├── tsconfig.json
└── vitest.config.ts
```

## 🚀 Быстрый старт

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/MarkMelior/task-solution.git
cd task-solution

# Установить зависимости
yarn install
```

### Основные команды

```bash
# Быстрые эксперименты
yarn start              # Запустить index.ts один раз
yarn dev                # Запустить с автоперезагрузкой (watch mode)

# Тестирование
yarn test               # Запустить тесты из index.spec.ts
yarn test:all           # Запустить все тесты (кроме index.spec.ts)

# Качество кода
yarn lint               # Проверить код линтером
yarn lint:fix           # Автоматически исправить ошибки
yarn format             # Отформатировать код

# Сборка
yarn build              # Скомпилировать TypeScript → JavaScript
```

## 💡 Как использовать

### 1. Быстрые эксперименты (`src/index.ts`)

Для быстрой отладки и проверки идей используйте `index.ts`:

```typescript
// src/index.ts
function fibonacci(n: number): number {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log('Fib(10):', fibonacci(10)); // 55
```

```bash
yarn dev  # Автоматически перезапускается при изменениях
```

### 2. Профессиональные тесты (`.spec.ts`)

Для серьезной работы создавайте `.spec.ts` файлы с полноценными тестами:

```typescript
// src/tasks/2025/Interview/2.ts
export const checkSimple = (str: string) => {
  const cleaned = str.split(' ').join('').toLowerCase();
  return cleaned.split('').reverse().join('') === cleaned;
};

export const checkFast = (str: string) => {
  const s = str.toLowerCase();
  let left = 0, right = s.length - 1;
  
  while (left < right) {
    if (s[left] === ' ') { left++; continue; }
    if (s[right] === ' ') { right--; continue; }
    if (s[left] !== s[right]) return false;
    left++; right--;
  }
  return true;
};
```

```typescript
// src/tasks/2025/Interview/tests/2.spec.ts
import { tFn } from '@utils/tests';
import { checkSimple, checkFast } from '../2';

tFn(
  [checkSimple, checkFast],
  [
    {
      expected: true,
      input: 'А Роза упала на лапу Азора',
    },
    {
      expected: false,
      input: 'Hello World',
    },
  ],
  { showPerformance: true }
);
```

**Результат:**
```
📈 checkSimple: 37.03x (size: 1000x)
📈 checkFast: 0.53x (size: 1000x)  <--  в 70 раз быстрее!
✓ checkSimple (2)
  ✓ "А Роза упала на лапу Азора" → true
  ✓ "Hello World" → false
✓ checkFast (2)
  ✓ "А Роза упала на лапу Азора" → true
  ✓ "Hello World" → false
```

## 🎯 Фичи

### ✅ Универсальная функция `tFn`

Тестирует **несколько реализаций** одной задачи без дублирования кода:

```typescript
import { tFn } from '@utils/tests';

tFn(
  'Task Name',
  [solution1, solution2],
  [
    {input: input1, expected: expected1},
    {input: input2, expected: expected2},
  ],
  { showPerformance: true }  // Отображает результаты производительности!
);
```

### 🚀 Path Aliases

Удобные импорты без `../../`:

```typescript
import { tFn } from '@utils/tests';
import { arrayToBinaryTree } from '@utils/arrayToBinaryTree';
```

## 🔧 Технические детали

### Конфигурация TypeScript

- **Target:** ES2022
- **Module:** ESNext
- **moduleResolution:** bundler
- **Strict mode:** включен
- **Path mapping:** `@utils/*`, `@tasks/*`, `@/*`

### ESLint

- ESLint 9 (новый flat config)
- TypeScript ESLint
- Prettier интеграция
- Автофикс: `yarn lint:fix`

### 🧪 Vitest

- Быстрый test runner
- Watch mode из коробки
- Совместимость с Jest API
- Поддержка TypeScript без конфигурации

## 📚 Полезные ресурсы

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [CodeWars](https://www.codewars.com/)
- [LeetCode](https://leetcode.com/)

## 🤝 Предложения

Не стесняйтесь открывать Issues или Pull Requests с улучшениями!

## 📄 Лицензия

MIT

---

<div align="center">

**[⬆ Наверх](#-task-solution)**

Made with ❤️ and TypeScript

</div>

---

**Happy Coding!** 🎉
