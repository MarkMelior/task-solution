import { describe, it, expect } from 'vitest';
import { checkPalindromeFast } from '../2';

describe('checkPalindromeFast', () => {
  it('should return true for palindrome', () => {
    expect(checkPalindromeFast('А Роза упала на лапу Азора')).toBe(true);
  });
});
