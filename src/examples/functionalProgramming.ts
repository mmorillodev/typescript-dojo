export const doubleAllItems = (arr: number[]) => arr.map((item) => item * 2);

export const getAllEven = (arr: number[]) =>
  arr.filter((item) => item % 2 === 0);

export const findNegative = (arr: number[]) => arr.find((item) => item < 0);

export const getSum = (arr: number[]) =>
  arr.reduce((acm, item) => acm + item, 0);

export const isAllPositive = (arr: number[]) => arr.every((item) => item >= 0);

export const hasAnyOdd = (arr: number[]) => arr.some((item) => item % 2 !== 0);
