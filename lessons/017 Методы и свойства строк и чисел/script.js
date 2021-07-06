"use strict";

const str = "teSt";
console.log(str.length);

const arr = [1, 2, 4];
console.log(arr.length);               // свойства без ()

console.log(str[2]);                   //символ из строки можно только прочитать, не изменяя

console.log(str.toUpperCase());        // методы с ()
console.log(str.toLowerCase());

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));   //5 - на пятой позиции fruit

//            012345678901
const logg = "Hello world";
console.log(logg.slice(6, 11));        // world - c 6 до 11(не включая)
console.log(logg.slice(6));            // world - c 6 до конца
console.log(logg.slice(-5, -1));       // worl - с конца считает

console.log(logg.substring(6, 11));    // world - как slice, не поддерживает отрицательные

console.log(logg.substr(6, 5))         // world - с 6 вырезать 5 символов

const num = 12.2;
console.log(Math.round(num));          // 12 - округление

const test = "12.2px";
console.log(parseInt(test));           // 12 - строку в числа
console.log(parseFloat(test));         // 12.2 - возвращем с плавающей точкой

