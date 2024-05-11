// создаем кортеж
const userDataTuple: [boolean, number, string] = [false, 20, 'John'];
// userDataTuple[0] = 'true';

// userDataTuple[3]
// userDataTuple.push(50);
// userDataTuple[3];
const res = userDataTuple.map((t) => `${t} - data`);
// console.log(res); // [ 'false - data', '20 - data', 'John - data' ]

const userDataTuple2: [boolean, number, ...string[]] = [
  true,
  20,
  'John',
  'Alex',
];
// деструктуризируем
const [isLogged, age, userName] = userDataTuple;
// console.log(isLogged, age, userName); // false 20 John

const userDataTuple3: [...boolean[], number, string] = [
  true,
  false,
  14,
  'text',
];

// const newRes = userDataTuple2.map((t) => `${t.toUpperCase()} - data`);

type MyTuple = [number, string, boolean];

const myTuple: MyTuple = [1, 'text', true];

myTuple.forEach((element) => {
  console.log(element); // 1 text node
});
