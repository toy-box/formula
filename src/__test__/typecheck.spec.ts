import { formulaParse, formulaParseType } from '../index';
import { inTypes, NUMBER_TYPE } from '../formulaType/common';

test('run 1 + 2 to equal number', () => {
  expect(
    inTypes(formulaParseType('1+2', () => 'unknow').result, NUMBER_TYPE),
  ).toBe(true);
});

test('run SUM(1, 2) to equal number', () => {
  expect(
    inTypes(formulaParseType('SUM(1, 2)', () => 'unknow').result, NUMBER_TYPE),
  ).toBe(true);
});
