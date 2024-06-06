// let smth: any;
let smth: unknown;
smth = 'str';
// let data: string[] = smth; // будет хранится массив строк, и помещаем то, что получили от сервера
// data.find((e) => e); // TS не покажет ошибку

/*
// ошибка будет только в runtime
const someValue: any = 10;
someValue.method();

const someValue1: unknown = 10;
someValue1.method();
*/

function fetchData(data: unknown): void {
  if (typeof data === 'string') {
    console.log(data.toLowerCase()); // test
  }
  // data; // здесь unknown
}
// fetchData('Test');

const userData =
  '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

// функция для безопасного парсинга
// когда мы разбираем JSON строку, то можем получить неизвестно что (объект, строка, булево значение)
function safeParce(s: string): unknown {
  return JSON.parse(s);
}

const data = safeParce(userData); // data будет unknown, так как мы не знаем, что вернется из этой строки
// data.method();
// console.log(data); // { isBirthdayData: true, ageData: 40, userNameData: 'John' }

function transferData(d: unknown): void {
  if (typeof d === 'string') {
    console.log(d.toLowerCase());
  } else if (typeof d === 'object' && d) {
    // так как null тоже может быть объектом, то делаем доп. проверку  && d
    // null не пройдет, так как он false
    console.log(data); //
  } else {
    console.log('Some error');
  }
}

// transferData('String'); // string
// transferData(null); // Some error
// transferData(data); // { isBirthdayData: true, ageData: 40, userNameData: 'John' }

try {
  if (1) {
    //throw 'error';
    throw new Error('error');
  }
} catch (e) {
  //console.log(typeof e); // string - получаем тип ошибки - string
  if (e instanceof Error) {
    console.log(e.message); // error
    console.log(e.name); // Error
  } else if (typeof e === 'string') {
    console.log(e);
  }
}

// Если тип unknown составляет тип объединение (union), то он перекроет
// все типы, за исключением типа any
type T0 = any | unknown; // any
type T1 = number | unknown; // unknown

// Если тип unknown составляет тип пересечение (intersection), то он будет
// перекрыт всеми типами
type T2 = any & unknown; // any
type T3 = number & unknown; // number
