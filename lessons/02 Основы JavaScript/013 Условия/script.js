"use strict";

if (4 == 9) {
  console.log('Ok!');
} else {
  console.log('Error!');
}

const num = 50;
if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('A lot of');
} else {
  console.log('Ok!');
}

//условие      если да              если нет
(num === 50) ? console.log('Ok!') : console.log('Error'); //тернарный оператор 
let a = 4 + 4;                                            //бинарный оператора
let b = +'4';                                             //унарный оператор

const number = 50;

switch (number) {
  case 49:
    console.log('Error!');
    break;
  case 100:
    console.log('Error!');
    break;
  case 50:
    console.log('Goal!');
    break;
  default:
    console.log('Not that time');
    break;
}