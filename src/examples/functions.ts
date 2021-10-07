// # Arrow function vs standard function

// ==========Syntatically==========

import { Person } from './types/Person';

function sum1(num1: number, num2: number) {
  const result = num1 + num2;
  return result;
}
console.log(sum1(1, 2));

const sum2 = (num1: number, num2: number) => {
  const result = num1 + num2;
  return result;
};
console.log(sum2(3, 4));

const sum3 = (num1: number, num2: number) => num1 + num2;
console.log(sum3(5, 6));

// =========Hoisting===========

// yell();

function yell() {
  console.log('aaaaaaaaaa standard function');
}

// yellArrowFunction() // Throw an error because it's being used before it's declaration

const yellArrowFunction = () => {
  console.log('aaaaaaaaaaa arrow function');
};

// =========`this` scope========

const person: Person & { isAdult: () => void } = {
  name: 'Matheus',
  age: '21',
  isAdult() {
    const _this = this;
    setTimeout(function () {
      console.log('age', _this.age);
      console.log(Number(_this.age) >= 18);
    }, 0);
  },
};

person.isAdult(); // this

const personB: Person & { isAdult: () => void } = {
  name: 'Matheus',
  age: '17',
  isAdult() {
    setTimeout(() => {
      console.log('age', this.age);
      console.log(Number(this.age) >= 18);
    }, 0);
  },
};

personB.isAdult();
