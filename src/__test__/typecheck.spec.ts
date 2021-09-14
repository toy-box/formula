import { formulaParse, formulaParseType } from '../index';
import { DataType, TYPE } from '../formulaType';

test('123 type is number', () => {
  expect(
    formulaParseType('123', (path) => new DataType(TYPE.UNKNOW)).result
      .isDecimalLike,
  ).toBe(true);
});
