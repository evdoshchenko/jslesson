"use strict";

const p = document.querySelectorAll('p');
let y = 1;
for (let i = 1; i < 5555; i++) {
  y += i;
}
console.log(y);

//добавить test.js элементом динамически
const testScript = document.createElement('script');
testScript.src = "test.js";
document.body.append(testScript);

// иногда нужно выключить async
function loadScript(src) {
  const testScript = document.createElement('script');
  testScript.src = src;
  testScript.async = false;
  document.body.append(testScript);
}
loadScript("test.js");
loadScript("some.js");