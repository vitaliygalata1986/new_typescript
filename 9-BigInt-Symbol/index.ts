let id: symbol = Symbol('id');

const data = {
  [id]: 1, // поле id будет symbol
};

console.log(data[id]); // 1

const num1: bigint = 1n;
const num2: bigint = 2n;

console.log(num1 + num2); // 3n

// console.log(num1 + 5);
console.log(Number.MIN_SAFE_INTEGER); // Константа Number.MIN_SAFE_INTEGER представляет минимальное безопасное целочисленное значение в JavaScrip
