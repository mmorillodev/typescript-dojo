// # var vs let vs const

for (var i = 0; i < 10; i++) {}

console.log(`i ${i}`);
(function () {
  var insideFunction = 'Yay';
  console.log(insideFunction);
  console.log(`i ${i}`);
})();

// console.log(insideFunction) // `insideFunction` only exists inside the function scope

for (let j = 0; j < 10; j++) {}

// console.log(j) //Throw an error since 'j' is scoped only inside the for

const finalValue = 10;

// finalValue = 15 // Throw an error because `finalValue` is a constant

// const notInitialized: number // Throw an error because a const must be declared and initialized

const myList: number[] = [];

myList.push(1); // The list can be handled
// myList = [1] // However, myList cannot be reassigned

const DICTIONARY = {
  Ola: 'Hello',
  Tchau: 'Bye',
} as const;

// DICTIONARY.Ola = "Hi" // throw an error because all elements are readonly implicitly

// Equivalent to

const DICTIONARY_2: { readonly Ola: string; readonly Tchau: string } = {
  Ola: 'Hello',
  Tchau: 'Bye',
};

// DICTIONARY_2.Ola = "Hi"; // throw an error because all elements are readonly explicitly

const DICTIONARY_3: { Ola: string; Tchau: string } = {
  Ola: 'Hello',
  Tchau: 'Bye',
};

DICTIONARY_3.Ola = 'Hi'; // Despite of the fact that it's a const, it's inner values can be reassigned
