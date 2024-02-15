import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
  
  it('converts cents into dollars', () => {
    expect(formatCurrency(1234)).toEqual('12.34');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(1234.5)).toEqual('12.35');
  });
});