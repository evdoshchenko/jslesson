'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),       // btns из всего 
  circles = document.getElementsByClassName('circle'),
  wrapper = document.querySelector('.wrapper'),
  hearts = wrapper.querySelectorAll('.heart'),          // hearts только из wrapper
  oneHeart = wrapper.querySelector('.heart');


box.style.backgroundColor = 'green';
box.style.width = '600px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

circles[2].style.cssText = 'background-color: yellow; width: 400px';

for (let i = 0; i < hearts.length; i++) {               // не используется
  hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {                                // используют forEach
  item.style.borderRadius = '30%';
});

// const text = document.createTextNode('I was be here');


const div = document.createElement('div');              // Добавить элемент
div.classList.add('black');
document.body.append(div);                              // в конец
// wrapper.append(div);                                    в конец wrapper 
// wrapper.prepend(div);                                   в начало wrapper
// wrapper.appendChild(div);                     устаревшее добавление
// hearts[0].before(div);                                  перед hearts[0]
// hearts[0].after(div);                                   после hearts[0]
// wrapper.insertBefore(div, hearts[0]);         устаревшее вставить перед

circles[0].remove();                                    // удалить элемент
// wrapper.removeChild(hearts[1]);               устаревшее удаление  

hearts[1].replaceWith(circles[1]);                      // заменить элемент
// wrapper.replaceChild(circles[0], hearts[0]);   устаревшая замена


div.textContent = "Hello";                              // вставить текст
// div.innerHTML = "<h1>Hello World</h1>";                 вставить HTML
// div.insertAdjacentHTML('beforebegin', '<h2>Hi</h2>');   перед элементом
// div.insertAdjacentHTML('afterbegin', '<h2>Hi</h2>');    в начало элемента
// div.insertAdjacentHTML('beforeend', '<h2>Hi</h2>');     в конец элемента
// div.insertAdjacentHTML('afterend', '<h2>Hi</h2>');      после элементы








