'use strict';

const box = document.getElementById('box');               //id - один на странице
console.log(box);

const btns = document.getElementsByTagName('button');     // псевдамассив кнопок
console.log(btns);
console.log(btns[1]);    //кнопка2 - обращаемся к индексу 1 из псевдомассива кнопок
const btns2 = document.getElementsByTagName('button')[1]; // сразу кнопка 2
console.log(btns2);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
  console.log(item);
})

const oneHeart = document.querySelector('.heart');        // выдает первый селектор
console.log(oneHeart);

