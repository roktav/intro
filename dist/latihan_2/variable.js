// variabel.js

// Demonstrasi penggunaan variabel let, const, dan var
var globalVar = "Ini adalah variabel global";
let localLet = "Ini adalah variabel lokal";
const constantValue = 3.14;

console.log(globalVar);
console.log(localLet);
console.log(constantValue);

// Tipe data primitif
let number = 42; // Number
let string = "Hello, World!"; // String
let boolean = true; // Boolean
let undefinedVar; // Undefined
let nullVar = null; // Null
let symbolVar = Symbol('unique'); // Symbol
let bigIntVar = BigInt(1234567890123456789012345678901234567890); // BigInt

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof undefinedVar);
console.log(typeof nullVar);
console.log(typeof symbolVar);
console.log(typeof bigIntVar);

// Tipe data non-primitif
let array = [1, 2, 3, 4, 5]; // Array
let object = { name: "John", age: 30 }; // Object

console.log(typeof array);
console.log(typeof object);

// Operator aritmatika
let sum = number + 10;
let difference = number - 10;
let product = number * 2;
let quotient = number / 2;

console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}`);

// Operator perbandingan
console.log(number > 30); // true
console.log(number === 42); // true
console.log(number !== 50); // true
