import { formulaParse, formulaParseType } from '../index';
import { DataType, TYPE } from '../formulaType';

// test('run 1 + 2 to equal 3', () => {
//   expect(formulaParse('1+2').result).toBe(3);
// });

// test('sum 1 and 2 to equal 3', () => {
//   expect(formulaParse('SUM(1, 2)').result).toBe(3);
// });

// test('sum 1 and 2 + field to equal 4', () => {
//   expect(formulaParse('SUM(1, 2) + {!field}', () => 1).result).toBe(4);
// });

// test('concat {!first} and " " and {!last} to equal "{!first} {!last}"', () => {
//   expect(
//     formulaParse('CONCATENATE({!first}, " ", {!last})', (path) => path).result,
//   ).toBe('{!first} {!last}');
// });

// test('123 type is number', () => {
//   expect(
//     formulaParseType('123', (path) => new DataType(TYPE.UNKNOW)).result
//       .isDecimalLike,
//   ).toBe(true);
// });

// test('1 +  2 type is number', () => {
//   expect(
//     formulaParseType('1 + 2', (path) => new DataType(TYPE.UNKNOW)).result
//       .isDecimalLike,
//   ).toBe(true);
// });

// test('1 +  2 sum type is unknow', () => {
//   expect(
//     formulaParseType('1 + 2 sum', (path) => new DataType(TYPE.UNKNOW)).result
//       .isUnknow,
//   ).toBe(true);
// });

test('empty formula', () => {
  expect(
    formulaParseType('abc * 123', (path) => new DataType(TYPE.UNKNOW)).result
      .isDecimalLike,
  ).toBe(true);
});
