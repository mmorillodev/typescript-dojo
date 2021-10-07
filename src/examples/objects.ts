// # Objects in JS

const person = {
  name: 'Iolanda',
  age: 45,
  isAdult() {
    this.age >= 18;
  },
};

// ES6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }
}

const person2 = new Person('Iolanda', 45);

// ES5

function PersonOld(this: any, name: string, age: number) {
  this.name = name;
  this.age = age;

  this.isAdult = function() {
    return age >= 18;
  };
}

const person3 = new (PersonOld as any)('Iolanda', 45);
