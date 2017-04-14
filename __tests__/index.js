import * as math from '../';

test('sums two numbers', () => {
  const result = math.sum(1, 2);
  expect(result).toBe(3);
});

test('subtracts two numbers', () => {
  const result = math.subtract(2, 1);
  expect(result).toBe(1);
});
