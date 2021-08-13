let a = 0;
console.log(a);

let obj = {
  number: 5,
  sayNumber: function () {
    say = () => {
      console.log(this)
    }
    say();
  }
}

obj.sayNumber();

let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name) => {
  return name.length < 5
});

console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'HeLLo'];
answers = answers.map((item) => item.toLowerCase());

console.log(answers);

// console.log(`User ${name}, ${age} years`);

function fetchData(data, count = 0) {
  console.log(`Data: ${data} in count ${count}`)
}
fetchData('something');

function max(a, b, ...numbers) {
  console.log(numbers);
}
max(3, 4, 67, 97);

const arr1 = [1, 2, 5],
  arr2 = [43, 2, 6];

const res = Math.max(1, ...arr1, 300, ...arr2);
console.log(res);

const avatar = 'Photo';
const user = {
  name: 'default',
  pass: 'qwerty',
  rights: 'user'
};

const admin = {
  name: 'admin',
  pass: 'root'
}
// const ress = Object.assign({}, user, admin);
const ress = { ...user, ...admin, avatar }; //ES8    
console.log(ress);

const x = 25, y = 10;
const coords = {
  x,  //  =   x: x,
  y,  //  =   y: y
  calcSq() {
    console.log(this.x * this.y);
  }
}

coords.calcSq();

console.log(coords);

const user2 = {
  name: {
    first: 'Sam',
    second: 'Smith'
  },
  pass: 'qwerty',
  rights: 'user'
};

const { name: { first, second }, pass, rights } = user2;

console.log(first, rights);

function connect({
  host = 'localhost',
  port = 3000,
  user = 'default' } = {}) {
  console.log(`host" ${host}, port: ${port}, user: ${user}`)
}

connect({
  host: 'sds',
  port: 232,
  user: 'default'
})

const numbers = [3, 5, 6, 6];
const [, , cc] = numbers;
console.log(cc);

const numbers2 = [[3, 5], [6, 6]];
const [[aaa, bbb], [ccc, ddd]] = numbers2;
console.log(aaa, ccc);

const country = {
  name: 'England',
  population: 20000000,
  gender: {
    male: ['15%', '40%'],
    female: ['16%', '29%']
  }
}
const { gender: { male: [maleUnder18, maleAduly], female: [femUnder18, femAdult] } } = country;
console.log(maleUnder18, femAdult);