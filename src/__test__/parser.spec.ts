import { formulaParse } from '../index';

test('run 1 + 2 to equal 3', () => {
  expect(formulaParse('1+2').result).toBe(3);
});

test('sum 1 and 2 to equal 3', () => {
  expect(formulaParse('SUM(1, 2)').result).toBe(3);
});

// test('sum 1 and 2 + field to equal 4', () => {
//   expect(formulaParse('SUM(1, 2) + {!field}', () => 1).result).toBe(4);
// });

// test('concat {!first} and " " and {!last} to equal "{!first} {!last}"', () => {
//   expect(
//     formulaParse('CONCATENATE({!first}, " ", {!last})', (path) => path).result,
//   ).toBe('{!first} {!last}');
// });

// test('run 1 + 2 to equal 3', () => {
//   expect(formulaTreeTest('ABC')).toBe(false);
// });

// test('test 1 + 2abc to equal false', () => {
//   expect(formulaTreeTest('1 + 2abc')).toBe(false);
// });
