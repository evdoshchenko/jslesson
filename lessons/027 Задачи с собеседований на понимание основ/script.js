//1
let x = 5; console.log(x++);               // 5 - постфиксная форма

//2
console.log(typeof ([] + false));          // пустой массив конкатинирует
console.log([] + false);                   // 'false'
console.log([] + false - null);            // NaN
console.log([] + false - null + true);     // NaN

//3 последовательное присваивание
let y = 1; let xx = y = 2; console.log(xx);// 2 - y=1, y=2, xx=2 справа налево

//4 
console.log([] + 1 + 2);                   // ''+1, '1'+2, 12

//5
console.log("1"[0]);                       // в строке '1' элемент под индексом 0

//6                   И запинается на лжи и дальше не идет
console.log(2 && 1 && null && 0) && undefined; // null

//7 
console.log(!!(1 && 2) === (1 && 2));      // false
console.log(!!(1 && 2));                   // true - !! превращает в boolean
console.log(1 && 2);                       // 2

//8 && приоритетнее ||                 
console.log(2 && 3);                       // 3 - && возвращает последнее
console.log(null || 2 && 3);               // 3 - false или 3(true) - 3(true)
// console.log(null || 2 && 3 || 4);       // 3 - 3(true) или 4(true) - 3(true)

console.log(11111 || 4 || 77 || 24 || 2 || 24 || 53);     // 11111 - ИЛИ не меняет
console.log(11111 && 4 && 77 && 24 && 2 && 24 && 53);     // 53 - И меняет

//9
const a = [1, 2, 3],
  b = [1, 2, 3];
console.log(a == b);                      // false
console.log([1, 2, 3] == [1, 2, 3]);      // false

//10
console.log("infinity");                 // "infinity"
console.log(+"infinity");                // "infinity", у меня иногда NaN

//11
console.log("Ёжик" > "яблоко");          // false - из-за unicod Ё после б
console.log("Огонь" > "яблоко");         // false
console.log("abc" > "abc");              // false
console.log("Abc" > "Abc");              // true

//12
//                     ИЛИ запинается на правде и дальше не идет
console.log(0 || "" || 2 || undefined || true || false);    // 2
