const fetchData = (url: string, method: 'GET' | 'POST'): void => {
  // console.log('Fetched');
  console.log(method);
};

const reqOptions = {
  url: 'https://someurl.com',
  method: 'GET',
};

/*
const reqOptions = {
  url: 'https://someurl.com',
  // method: 'GETasda',
  method: 'GET' as "GET", // этим мы говорим, что строка является литералом
};
*/

/*
// объектный литерал
const reqOptions = {
  url: 'https://someurl.com',
  method: 'GET',
} as const;
*/

const str = 'str'; // Примитивный лительный тип str

// fetchData('qqq', 'GET');

const method = 'GET';
// fetchData(reqOptions.url, reqOptions.method as 'GET'); // as - оператор - этим мы сказали, что вот эьта строка reqOptions.method строго будет являться литералом GET
// fetchData(reqOptions.url, method);

// fetchData(reqOptions.url, reqOptions.method as 5); // мы не сможем так сказать, что эта строка является числом
// fetchData(reqOptions.url, reqOptions.method as 'GET');

// альтернативный синтаксис утверждения типов
fetchData(reqOptions.url, <'GET'>reqOptions.method);

const box = document.querySelector('.box') as HTMLElement; // HTMLElement - интерфейс - любой html элемент
//box.style

const input = document.querySelector('.input') as HTMLInputElement; // HTMLInputElement - - интерфейс, который будет содержать value
const input1 = <HTMLInputElement>document.querySelector('.input'); // HTMLInputElement - - интерфейс, который будет содержать value

// const someNumber: number = +input.value;

// можно сделать через утверждение типов (тоесть нечто будет числом)
const someNumber: number = input.value as any as number; // тоесть приводим к общеиу типу, потом к узкому
console.log(someNumber * 2);


let a = 'value' as const; // сделаем переменную a - литеральную (со значением value)

// тоже самое и с объектом
let b = {f: 100} as const

// тоже самое можем сделать и с массивом
let c = [] as const

let value = 'value'
let arr = ['sd','asdas']
let obj = { f: 100 };

// let T0 = value as const;
// let T0 = arr as const;
// let T0 = obj as const;

// let TS = (Math.round(Math.random()*1) ? 'yes' : 'no') as const;