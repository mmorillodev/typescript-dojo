import {
  doubleAllItems,
  findNegative,
  getAllEven,
  getSum,
  hasAnyOdd,
  isAllPositive,
} from '../functionalProgramming';

describe('functionalProgramming.ts', () => {
  it('should return a new array with all item doubled', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(doubleAllItems(arr)).toEqual([2, 4, 6, 8, 10, 12]);
  });

  it('should return the r', () => {});

  it('should return the negative number of a given array', () => {
    const arr = [1, 2, 3, 4, -5, 6];
    expect(findNegative(arr)).toBe(-5);
  });

  it('should return undefined if no negative value found', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(findNegative(arr)).toBe(undefined);
  });

  it('should return all the values of a given array summed', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(getSum(arr)).toBe(21);
  });

  it('should return all even numbers of a given array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(getAllEven(arr)).toEqual([2, 4, 6]);
  });

  it("should return whether there's any odd number or not in a given array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(hasAnyOdd(arr)).toBe(true);
    expect(hasAnyOdd(getAllEven(arr))).toBe(false);
  });

  it('it should return whether all numbers are positive', () => {
    const arr = [1, -2, 3, -4, 5, 6];
    expect(isAllPositive(arr)).toBe(false);
    expect(isAllPositive(arr.filter((item) => item >= 0))).toBe(true);
  });
});
