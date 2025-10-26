import { t } from '@utils/tests';
import {
  checkPalindromeFast,
  checkPalindromeFuck,
  removeDublicationCustom,
  removeDublicationShort,
} from '../2';

t(
  [removeDublicationCustom, removeDublicationShort],
  [
    {
      expected: [2, 3, 1, 5, 7, 4],
      input: [2, 3, 1, 2, 5, 2, 1, 7, 4],
    },
  ],
  { showPerformance: true }
);

t(
  [checkPalindromeFuck, checkPalindromeFast],
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
