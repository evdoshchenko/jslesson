const log = function (a, b, ...rest) {            //любое количество входящих аргументов
  console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
  //basis = basis || 2;                            // устаревший
  console.log(number * basis);
}

calcOrDouble(3);