/* eslint-disable no-unused-vars */
let x = 10;
const y = 5;

console.log(x + y);

const a = 'a';
const b = '2';
const c = 2;

console.log(a + b);
console.log(b + c);
console.log(x + y + a + c); // 15a2

// Math: + - * / % **
// Logical: && ||
// Binary: & | ! >> <<

x = x + 1;
x += 1;
x++;

const result = x < 10 ? 1 : 0;
console.log('Result: ', result);

let numberFive = 5;
let stringFive = '5';

let result1 = numberFive + numberFive; // 10
let result2 = stringFive + stringFive; // 55
let result3 = numberFive + stringFive; // 55
let result4 = stringFive + numberFive; // 55
let result5 = Number(stringFive) + numberFive; // 10
let result6 = numberFive + numberFive + stringFive; // 105
let result7 = numberFive + numberFive + stringFive + numberFive + numberFive; // 10555
