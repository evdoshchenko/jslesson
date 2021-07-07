const arr = [1, 2, 3, 6, 8];

arr.pop();                          // удалить последний элемент
arr.push(10);                       // добавить элемент в конец
//                       трудозатраный шифт и аншифт не используют
arr.shift();                        // удалить первый элемент
arr.unshift(7);                     // добавить первый элемент в начало
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {            // for of - с массивами, строками, псеводомассивами 
  console.log(value)                //          используют, когда нужны break, continue
}                                   // forEach - во всех других, обычных случаях      

arr.forEach(function (item, i, arr) {  //перебор всего массивы callback функцией 
  console.log(`${item} in array ${arr} at index ${i}`);
})
// arr.map, arr.every, arr.some, arr.filter, arr.reduce - методы трансформации

arr[99] = 48;
console.log(arr.length);            // 100 - length = последний индекс массива + 1
console.log(arr);                   // [7, 2, 3, 6, 10, empty × 94, 48]

const str = prompt("", "");
const products = str.split(", ");   // , - разделитель в строке
console.log(products);
console.log(products.join('; '));   // сформировать строку с разделителем - ;

products.sort();                    // сортировака массива по алфавиту

const arr2 = [4, 47, 06, 23, 19]
console.log(arr2.sort());           // 19, 23, 4, 47, 6 - числа по первому символу

const arr3 = [4, 47, 06, 23, 19]
console.log(arr3.sort(compareNum)); // 4, 6, 19, 23, 47 - числа по значению
function compareNum(a, b) {         //                    передать callbackом эту функцию
  return a - b;
}


