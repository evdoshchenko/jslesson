const btns = document.querySelectorAll('button'),
  overlay = document.querySelector('.overlay');

// btn.onclick = function () {                 не используется
//   alert('Click');
// };
// btn.onclick = function () {                 тк первый не произойдет
//   alert('Second Click');                    и не возможно удалить в обработчике
// };

// btn.addEventListener('click', () => {
//   console.log('Click event1')
// });

// btn.addEventListener('click', () => {
//   console.log('Click event2')
// });

// btn.addEventListener('mouseenter', () => {
//   console.log('Hover')
// });

// let i = 0;
const deleteElement = (e) => {                // всегда первым аргументом 
  console.log(e.target);
  // console.log(e.currentTarget);               всплытие события
  console.log(e.type);
  // i++;
  // if (i === 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }
  // e.target.remove();
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
  btn.addEventListener('click', deleteElement, { once: true });   // once доп
});

const link = document.querySelector('a');
link.addEventListener('click', function (event) {
  event.preventDefault();           // отменить стандартное поведение
  console.log(event.target);        // например, не переходить по ссылке
});








