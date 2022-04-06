// String, Numbers, Boolean, Null, Undefined
// Data Types primitivos.

const name = 'Will';
const age = 34;
const rating = 4.5;
const isCool = true;
const x = null;      // Null significa 'vazio'.
const y = undefined; // É possívvel definir uma variável como Indefinida.
let z;               // Chamando uma variável dessa forma ela também será indefinida.

console.log(typeof 'Will');

// Concatenation
console.log('My name is ' + name + ' and i am ' + age);
// Tempplate String
console.log(`My name is ${name} and i am ${age}`);

const hello = `My name is ${name} and i am ${age}`;
    console.log(hello);