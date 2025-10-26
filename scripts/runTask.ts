#!/usr/bin/env tsx
import { argv } from "process";

if (argv.length < 3) {
  console.error("Usage: yarn task [path] <task-number>");
  process.exit(1);
}

const customPath = argv[2] || '2025/Interview';
const taskNumber = argv[3].replace(/\.ts$/, '');
const path = `../src/tasks/${customPath}/${taskNumber}.ts`;

console.log(`Loading task from: ${path}`);

import(path)
  .then((module) => {
    if (module.default && typeof module.default === 'function') {
      module.default();
    }
  })
  .catch((err) => {
    console.error(`Failed to load task ${taskNumber}:`, err);
    process.exit(1);
  });
