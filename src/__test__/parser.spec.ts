import { formulaParse, formulaParseType } from '../index';
import { DataType, formulaResultType, TYPE } from '../formulaType';
// import { ContextResource } from '../schemaMap.data';
import { MetaValueType } from '@toy-box/meta-schema';

// test('run 1 + 2 to equal 3', () => {
//   expect(formulaParse('1+2').result).toBe(3);
// });

// test('sum 1 and 2 to equal 3', () => {
//   expect(formulaParse('SUM(1, 2)').result).toBe(3);
// });

// test('sum 1 and 2 + field to equal 4', () => {
//   expect(formulaParse('SUM(1, 2) + field', () => 1).result).toBe(4);
// });

// test('concat {!first} and " " and {!last} to equal "{!first} {!last}"', () => {
//   expect(
//     formulaParse('CONCATENATE({!first}, " ", {!last})', (path) => path).result,
//   ).toBe('{!first} {!last}');
// });

test('COUNT(1) type is number', () => {
  expect(
    formulaParseType(
      'COUNT(1)',
      (text) => new DataType(TYPE.STRING),
      new DataType(TYPE.NUMBER),
    ).errors.length == 0,
  ).toBe(true);
});

test('1+2+3 + $currentUser.id type is number', () => {
  expect(
    formulaParseType(
      '1+2+3 + $currentUser.id',
      (text) => new DataType(TYPE.NUMBER),
      new DataType(TYPE.NUMBER),
    ).errors.length == 0,
  ).toBe(true);
});

test('SWITCH(true,1,2,1) type is unknow', () => {
  // IF 和 SWITCH 函数返回unknow类型，可以支持任何类型
  expect(
    formulaParseType(
      'SWITCH(true,1,2,1)',
      (text) => new DataType(TYPE.NUMBER),
      new DataType(TYPE.STRING),
    ).errors.length == 0,
  ).toBe(true);
});

test('NOW() type is date', () => {
  expect(
    formulaParseType(
      'NOW()',
      (text) => new DataType(TYPE.NUMBER),
      new DataType(TYPE.DATE),
    ).errors.length == 0,
  ).toBe(true);
});

test('CONCATENATE("a",2,TODAY()) type is string', () => {
  expect(
    formulaParseType(
      'CONCATENATE("a",2,TODAY(),$currentUser.id)',
      (text) => new DataType(TYPE.NUMBER),
      new DataType(TYPE.STRING),
    ).errors.length == 0,
  ).toBe(true);
});

test('ISBLANK(TODAY()) type is boolean', () => {
  expect(
    formulaParseType('ISBLANK(TODAY())', null, new DataType(TYPE.BOOLEAN))
      .errors.length == 0,
  ).toBe(true);
});

test('SUM result type is number', () => {
  expect(formulaResultType['SUM']).toBe('number');
});

test('SPLIT result type is undefine', () => {
  expect(formulaResultType['SPLIT']).toBe(undefined);
});
