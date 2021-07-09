// touchstart - касание
// touchmove - касание с движением
// touchend - палец оторвался
// touchenter - ведем пальцем и зашли на объект
// touchleave - палец касался и вышел из объекта
// touchcancel - палец вышел за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('Start');
    console.log(e.targetTouches);
  });

  box.addEventListener('touchmove', (e) => {
    e.preventDefault();
    // console.log('Move');
    console.log(e.targetTouches[0].pageX);
  });

  box.addEventListener('touchend', (e) => {
    e.preventDefault();
    console.log('End');
  });
});

// touches - все свойства пальцев
// targetTouches - данные пальца
// changedTouches - список пальцев участвующих в процессе

// https://hammerjs.github.io/ - готовый скрипт