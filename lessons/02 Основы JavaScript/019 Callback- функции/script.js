function first() {
  //
  setTimeout(function () {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}
first();
second();

//callback функция, в качестве аргумента передана функция
function learnJS(lang, callback) {
  console.log(`I am learn: ${lang}`);
  callback();
}
function done() {
  console.log('I am complete this lesson');
}
learnJS('JavaScript', done);