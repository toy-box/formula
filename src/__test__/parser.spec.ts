import { parseAndGetSyntaxErrors, parseResult } from '../formulaParse';
import { DataType, TYPE } from '../formulaType';

//基本运算
// test('run 1 + 2 to equal 3', () => {
//   expect(parseResult('1+2',null).result).toBe(3);
// });

// test('sum 1 and 2 to equal 3', () => {
//   expect(parseResult('SUM(1, 2)',null).result).toBe(3);
// });

// test('sum 1 and 2 + field to equal 4', () => {
//   expect(parseResult('SUM(1, 2) + field', (path)=>1).result).toBe(4);
// });

// test('sum 1 and 2 + field to equal 4', () => {
//   expect(parseResult('SUM(1, 2) + field', (path) => 1).result).toBe(4);
// });

test('(aaa * ($bbb + $ccc.a.e) / 2) + 6', () => {
  expect(
    parseResult('(aaa * ($bbb + $ccc.a.e) / 2) + 6', (path) => {
      if (path == 'aaa') {
        return 1;
      }
      if (path == '$bbb') {
        return 2;
      }
      if (path == '$ccc.a.e') {
        return 3;
      }
    }).result > 0,
  ).toBe(true);
});

//比较大小
// test('GTE', () => {
//   expect(parseResult('179 >= aaa', (path) => "str").result).toBe(false);
// });

//日期时间函数

test('NOW()', () => {
  expect(parseResult('NOW()', null).success).toBe(true);
});

test('TODAY()', () => {
  expect(parseResult('TODAY()', null).success).toBe(true);
});

test('DATE() 、', () => {
  expect(parseResult('DATE(2021,8,27)', null).success).toBe(true);
});

// test('TIME()', () => {
//   expect(parseResult('TIME(10,59,59)', null).success).toBe(true);
// });

//逻辑函数
// test('IF()', () => {
//   expect(parseResult('IF(true, 100, false)', null).success).toBe(true);
// });

// test('SWITCH()', () => {
//   expect(parseResult('SWITCH(7, 9, "Nine", 7, $id)', (x)=>{
//     return 8
//   }).success).toBe(true);
// });

// test('ISBLANK()', () => {
//   expect(parseResult('ISBLANK(TIME(10,59,59))', null).result).toBe(false);
// });

// //字符串函数
// test('CONCATENATE()', () => {
//   expect(
//     parseResult('CONCATENATE(first, " ", last)', (path) => path == 'first' ? 'hello' : 'world').result,
//   ).toBe('hello world');
// });

// test('UPPER()', () => {
//   expect(
//     parseResult('UPPER("ABcd")',null).success).toBe(true);
// });

test('1+2+3 + $currentUser.id type is number', () => {
  expect(
    parseAndGetSyntaxErrors(
      '1+2+3aaa + $currentUser.id',
      (text) => new DataType(TYPE.NUMBER),
      new DataType(TYPE.NUMBER),
    ).length == 0,
  ).toBe(true);
});

// test('SWITCH(true,1,2,1) type is unknow', () => {
//   // IF 和 SWITCH 函数返回unknow类型，可以支持任何类型
//   expect(
//     parseAndGetSyntaxErrors(
//       'SWITCH(true,1,2,1)',
//       (text) => new DataType(TYPE.NUMBER),
//       new DataType(TYPE.STRING),
//     ).length == 0,
//   ).toBe(true);
// });

// test('ISBLANK(TODAY()) type is boolean', () => {
//   expect(
//     parseAndGetSyntaxErrors('ISBLANK(TODAY())', null, new DataType(TYPE.BOOLEAN))
//       .length == 0,
//   ).toBe(true);
// });

// test('NOW() type is date', () => {
//   expect(
//     parseAndGetSyntaxErrors(
//       'NOW()',
//       (text) => new DataType(TYPE.NUMBER),
//       new DataType(TYPE.DATE),
//     ).length == 0,
//   ).toBe(true);
// });

// test('CONCATENATE("a",2,TODAY()) type is string', () => {
//   expect(
//     parseAndGetSyntaxErrors(
//       'CONCATENATE("a",2,TODAY(),$currentUser.id)',
//       (text) => new DataType(TYPE.NUMBER),
//       new DataType(TYPE.STRING),
//     ).length == 0,
//   ).toBe(true);
// });
