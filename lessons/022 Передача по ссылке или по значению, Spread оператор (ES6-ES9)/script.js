let a = 5,
  b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1
}

const copyLink = obj;      //создает ссылку на объект, а не копию    
copyLink.a = 10;
console.log(copyLink);
console.log(obj);

function copy(mainObj) {   //клонирует объект, "поверхностная" копия
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;          //а - поменялось только в новом
newNumbers.c.x = 10;        //c.x - поменялось в двух, тк с - это ссылка
console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

console.log(Object.assign(numbers, add)) // помещаем в numbers объект add
console.log(numbers);

const clone = Object.assign({}, add)     // клон - в пустой объект add
clone.d = 20;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'Z';
console.log(oldArray);
console.log(newArray);

//ES6 спрэд оператор разворота
const video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpress', 'livejournal', 'blogger'],
  internet = [...video, ...blogs, 'facebook']; //... - развернул массив
console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];
const newArray2 = [...array];
console.log(newArray2);

//ES8-9
const q = {
  one: 1,
  two: 2
}
const newObj = { ...q }
console.log(newObj);