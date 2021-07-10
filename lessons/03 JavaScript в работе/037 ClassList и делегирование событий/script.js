const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'border'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('red'));

// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

btns[1].addEventListener('click', () => {
  btns[1].classList.toggle('red');
  // if (!btns[1].classList.contains('red')) {                //  развернутый тогл
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }
});

// console.log(btns[0].className);                            // устаревший метод 

// делигирование событий
wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.matches("button.red")) {   // event.target выдает всегда капс 
    console.log('red hello');
  }
  if (event.target && event.target.classList.contains('blue')) {
    console.log('blue hello');
  }
  if (event.target && event.target.tagName == "BUTTON") {
    console.log('hello');
  }
});

// forEach не будет знать о созданных кнопках
// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log("Hello");
//   })
// })


// динамически созданная кнопка
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

