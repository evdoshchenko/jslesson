// alert('hello');

// const result = confirm("Are you here");
// console.log(result);

// const answer = prompt("Are you 18?", "no"); // вопрос с ответом
// console.log(typeof (answer));
// console.log(answer + 5);
// информация от пользователя всегда string
// const answer2 = +prompt("Are you 18?", "no"); // динамическая типизация в number

const answers = [];

answers[0] = prompt("What is your name?", "");
answers[1] = prompt("What is your surname?", "");
answers[2] = prompt("How old are you?", "");

document.write(answers);

console.log(typeof (answers));
console.log(typeof (null)); // официально признанная ошибка - возвращет null