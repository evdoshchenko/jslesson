"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  }
}

const oldJohn = {
  health: 100
}
oldJohn.__proto__ = soldier;              // устаревший метод
oldJohn.sayHello();

const newJohn = {
  health: 100
}
Object.setPrototypeOf(newJohn, soldier);  // установили протип в динамике
newJohn.sayHello();

const jonh = Object.create(soldier);      // создаем объект от протипа soldier
jonh.sayHello();