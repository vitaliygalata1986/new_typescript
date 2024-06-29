type voidFunc = () => void; // тип функции, которая возращает нам void

const retString: voidFunc = () => {
  // аннотируем функцию - она возвращает void
  // ... smth
  return 'string';
};

// чтобы посмотреть что мы получим - запустим функцию:
const s = retString();
// console.log(s); // string

const retNum: voidFunc = () => {
  // ... smth
  return 5;
};

const n = retNum();
// console.log(n); // 5

const names = ['Anna', 'John'];
const newArr = names.slice(); // Метод slice() возвращает новый массив, содержащий копию части исходного массива.

names.forEach((name, i, arr) => {
  // console.log(name); // Anna / John
  // console.log(i); // 0  / 1
  // console.log(arr); // [ 'Anna', 'John' ]
  // return name; // [ 'Anna', 'John' ]
  // return arr; // [ 'Anna', 'John' ]
  return arr.push('Hey!');
});

console.log(names); // [ 'Anna', 'John', 'Hey!', 'Hey!' ]

function f2(): void {
  return true;
}

const f3 = function (): void {
  return true;
};
