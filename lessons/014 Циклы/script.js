"use strict";

let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++;
}
while (num < 55);

for (let i = 1; i < 5; i++) {
  console.log(i);
}

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break;                   // 12345 - выход из цикла
  }
  console.log(i);
}

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    continue;                // 12345789 - пропустить
  }
  console.log(i);
}


