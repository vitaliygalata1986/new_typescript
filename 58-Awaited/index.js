var jsonTest = '{"name": "Test", "data": "sss"}';
var objFromJson = JSON.parse(jsonTest); // any
var userData = '{"isBirthdayData":true, "ageData": 40, "userNameData": "John"}';
function safeParse(s) {
    return JSON.parse(s);
}
var data = safeParse(userData); // unknown
// console.log(data); // { isBirthdayData: true, ageData: 40, userNameData: 'John' }
function transferData(d) {
    if (typeof d === 'string') {
        console.log(d.toLocaleLowerCase());
    }
    else if (typeof d === 'object' && d) {
        //  console.log(d); // { isBirthdayData: true, ageData: 40, userNameData: 'John' }
    }
    else {
        console.log('Some error');
    }
}
/*
Этот код проверяет две вещи:

typeof d === 'object' — проверяет, что переменная d является объектом.
&& d — проверяет, что переменная d не является null.
Такое условие необходимо, потому что в JavaScript typeof null возвращает 'object',
и, следовательно, простая проверка typeof d === 'object' будет истинной для null, что нежелательно, если вы хотите работать только с объектами,
которые не равны null. Поэтому добавляется проверка && d, чтобы исключить случай, когда d является null.

*/
transferData(data);
// поместим эти данные
var toDoList = []; // сюда запишем то, что получим от сервера
// let toDoList = [];
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((responce) => responce.json())
  .then((json) => {
    if ('id' in json) {
      toDoList.push(json); // сюда запишем то, что получим от сервера
    }
    console.log(toDoList);
  });
*/
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (responce) { return responce.json(); })
    .then(function (json) {
    console.log(json);
    if ('id' in json && 'userId' in json) {
        toDoList.push(json); // сюда запишем то, что получим от сервера
        console.log(toDoList[0].userId); // 1
    }
    else if (Array.isArray(json)) {
        // если тот JSON, который нам пришел - это действительно массив
        toDoList = json;
    }
    else {
        console.log("".concat(json, " - is a string"));
    }
    console.log(toDoList);
});
/*
const promise = new Promise<string>((resolve, reject) => {
  // так как Promise это дженерик, то мы передадим туда то, с чем будет работать промис (сейчас это будет string)
  resolve('Test');
});

promise.then((value) => {
  console.log(value.toLowerCase()); // test
});
*/
