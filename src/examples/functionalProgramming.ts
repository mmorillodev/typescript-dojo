// map - return a new array with the same length
export const doubleAllItems = (arr: number[]) => arr.map((item) => item * 2);

// filter - creates a new array with all
// elements that pass the test implemented by the provided function
export const getAllEven = (arr: number[]) =>
  arr.filter((item) => item % 2 === 0);

// find - returns the value of the first element in the provided array
// that satisfies the provided testing function
export const findNegative = (arr: number[]) => arr.find((item) => item < 0);

// reduce - executes a user-supplied “reducer” callback function on each element of the array,
// passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
export const getSum = (arr: number[]) =>
  arr.reduce((acm, item) => acm + item, 0);

// every - returns a boolean that represents whether all elements matches a given expression
export const isAllPositive = (arr: number[]) => arr.every((item) => item >= 0);

// some - returns a boolean that represents whether any element match a given expression
export const hasAnyOdd = (arr: number[]) => arr.some((item) => item % 2 !== 0);
