"use strict";

// const obg = new Object();       полная структура создания объекта, не используемая
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  makeTest: function () {
    console.log("Test");
  }
};

console.log(options["colors"]["border"]);       // обращение к свойству
const { border, bg } = options.colors;          //ES6 - деструктуризация
console.log(border);                            // выделение свойства в переменную

delete options.name;                      // удалить свойство объекта
console.log(options);

let counter = 0;
for (let key in options) {                // for in - свойство перебора свойств
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {         // без рекурсии
      console.log(`Propery ${i} have a value ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Propery ${key} have a value ${options[key]}`);
    counter++;
  }
}
console.log(counter);

// for (let key of options) {             // for of - не работает с объектами
//   console.log(`Propery ${key} have a value ${options[key]}`);
// }

console.log(Object.keys(options));        // метод Объекта - массив из свойств объекта        
console.log(Object.keys(options).length); // количество свойств объекта

options.makeTest();



