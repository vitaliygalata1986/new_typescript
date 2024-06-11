var fetchData = function (url, method) {
    // console.log('Fetched');
    console.log(method);
};
var reqOptions = {
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
var str = 'str'; // Примитивный лительный тип str
// fetchData('qqq', 'GET');
var method = 'GET';
// fetchData(reqOptions.url, reqOptions.method as 'GET'); // as - оператор - этим мы сказали, что вот эьта строка reqOptions.method строго будет являться литералом GET
// fetchData(reqOptions.url, method);
// fetchData(reqOptions.url, reqOptions.method as 5); // мы не сможем так сказать, что эта строка является числом
// fetchData(reqOptions.url, reqOptions.method as 'GET');
// альтернативный синтаксис утверждения типов
fetchData(reqOptions.url, reqOptions.method);
var box = document.querySelector('.box'); // HTMLElement - интерфейс - любой html элемент
//box.style
var input = document.querySelector('.input'); // HTMLInputElement - - интерфейс, который будет содержать value
// const someNumber: number = +input.value;
// можно сделать через утверждение типов (тоесть нечто будет числом)
var someNumber = input.value; // тоесть приводим к общеиу типу, потом к узкому
console.log(someNumber * 2);
