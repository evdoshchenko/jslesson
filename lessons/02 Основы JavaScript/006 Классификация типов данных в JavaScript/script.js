let number = 4.6;

console.log(-4 / 0);       // -Infinity
console.log('string' * 9); // Nan

const persone1 = 'Alex';    // Все кавычки одинаковые
const persone2 = "Alex";
const persone3 = `Alex`;

const bool = true;


//console.log(something); // ReferenceError ссылочная ошибка - null

let und;
console.log(und); //Выводится в консоль - undefined

const obj = {
  name: 'John',
  age: 25,
  isMaried: false
}

console.log(obj.name);      // К объектам можно обращаться через .
console.log(obj["name"]);   // но, можно через [""]

// массив частный случай объекта - не отдельный тип данных
//         0           1            2  3            4   5    - ключи
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// может содержать всё - строки, числа, объекты, массивы
console.log(arr[3]); // показывает количество смещение от 0  