// # Objects in JS

const person = {
  personName: 'Iolanda',
  age: 45,
  isAdult() {
    return this.age >= 18;
  },
};

// ES6

class Person {
  personName: string;
  age: number;

  constructor(personName: string, age: number) {
    this.personName = personName;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }
}

const person2 = new Person('Iolanda', 45);

// ES5

function PersonOld(this: any, personName: string, age: number) {
  this.personName = personName;
  this.age = age;

  this.isAdult = function() {
    return age >= 18;
  };
}

const person3 = new (PersonOld as any)('Iolanda', 45);
