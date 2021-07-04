console.log('arr' + " - object");
console.log(4 + +"5");      // плюс перед строкой - динамическая типизация

let incr = 10,
  decr = 10;

console.log(incr++); //10 - постфиксная сначала возвращает старое
console.log(decr--); //10

console.log(++incr); //11 - префиксная сразу возвращает новое
console.log(--decr); //9

console.log(5 % 2); //остаток от деления двух чисел

console.log(!true);              // false      ! - отрицание

console.log(8 == '8');       // true - равенство по значению
console.log(8 === '8');      // false - строгое равенство и по типу
console.log(2 + 2 * 2 === '8');  // false - Приоритет операторов * > +
console.log(6 != '6');   // false - 6 != 6 - НЕравенство по значению
console.log(6 !== '6');   // true - 6 !== 6 - строгое НЕравенство и по типу

console.log(true && true);       // true       && - и
console.log(true && false);      // false 
console.log(false && false);     // false 
console.log(true || true);       // true       || - или
console.log(true || false);      // true 
console.log(false || false);     // false 






