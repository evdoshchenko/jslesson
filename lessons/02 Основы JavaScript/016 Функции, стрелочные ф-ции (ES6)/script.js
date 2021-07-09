let num = 20;

// Замыкание функции - сама функция вместе со всеми внешними переменными, которые ей доступны

function showFirstMessage(message) {
  console.log(message);
  num = 10;
  console.log(num);
}
showFirstMessage("Hi!");
console.log(num);

//function declaration - создается до начала выполнения
console.log(calc(4, 3));  //использовать можно и до ее описания
function calc(a, b) {
  return (a + b);         //после return - код недостижимый
}

function ret() {
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log(anotherNum);

//function expression - вызывается, после объеявления
const logger = function () {
  console.log("Hello!");
};                        // ; обязательна - значение функции, ее внутреннее состояние
logger();

const calc2 = (a, b) => a + b;                // не имеет контекста (this)
// const calc2 = (a, b) => { return a + b };  // полный вариант
console.log(calc2(5, 3));

const calc3 = a => a + 3;                     // без скобок с одним аргументом
console.log(calc3(1));



