// с Element - элемент, без - нода

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);      // Elements нет, использовать for of
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// получение родителя
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// получение соседа
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
  if (node.nodeName == '#text') {              // исключить все текстовые ноды       
    continue;
  }
  console.log(node);
}