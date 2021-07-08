"use strict";

//To String

// 1)
console.log(typeof (String(null)));               // редко используют
console.log(typeof (String(4)));

// 2) конкатенация - сложение со строкой
console.log(typeof (5 + ''));
const num = 5;
console.log("https://vk.com/catalog/" + num);     // устаревший способ
const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof (Number('4')));                 // почти не используют

// 2) унарный плюс
console.log(typeof (- '4'));

// 3) 
console.log(typeof (parseInt("15px", 10)));        // 10 система

// To Boolean

// 1)
// false, 0,'',null, undefined,Nan;
let switcher = null;
if (switcher) {
  console.log('Working...')
}
switcher = 1;
if (switcher) {
  console.log('Working...')
}

// 2)
console.log(typeof (Boolean('4')));                 // почти никогда не используют

// 3)
console.log(typeof (!!"4"));                        // редко используют