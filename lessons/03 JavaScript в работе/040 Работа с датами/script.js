'use strict';

// const now = new Date();
// const now = new Date('2020-05-01');
// const now = new Date(2020, 5, 1, 20);     // часы с GMT
// const now = new Date(0);                  // 1970-01-01T00:00:00.000Z
const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());              // месяцы с 0
// console.log(now.getDate());
// console.log(now.getDay());                // дни недели с воскресенья 0
// console.log(now.getHours());
// console.log(now.getUTCHours());           // UTC время
// console.log(now.getTimezoneOffset());     // разница в минутах с UTC
// console.log(now.getTime());               // милисекунд с 1970

console.log(now.setHours(18));               // set - установить
console.log(now)

// const now = new Date('2021-07-10');       // записи одинаковые
// new Data.parse('2021-07-10');             // иногда методом parse

let start = new Date();                      // время выполнения функции
for (let i = 0; i < 1000; i++) {
  let some = i ** 3;
  console.log(i, some);
}
let end = new Date();
console.log(`Cycle worked ${end - start} ms.`);