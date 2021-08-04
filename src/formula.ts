import formulajs, { FormulaType } from '@formulajs/formulajs';

const ISBLANK = (value: any) => value == null || value === '';

export const formulaPlus = {
  ...formulajs,
  ISBLANK,
};
