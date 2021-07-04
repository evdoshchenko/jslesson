"use strict";     // Режим строгого современного кода
//a = 15;         // запрещает старые неточности
//console.log(a); // ex: переменная без объявления

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

console.log(leftBorderWidth);

const obj = {
  a: 50
}

obj.a = 10;

console.log(obj); // прямых констант в JS не бывает

console.log(name); // var существует до объявления в коде
var name = 'I2van'; // “всплытие переменных” (hoisting) 

{
  var result = 50;
}

console.log(result);

alert(5);  // ; - нужны после логических блоков
[].push(); // в некоторых места обязательны!