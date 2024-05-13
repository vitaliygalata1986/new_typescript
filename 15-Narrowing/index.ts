// union объединение
const message: string | number = 5;

// внутри массива могут быть либо строки, либо числа
const messages: string[] | number[] = ['a', 'b'];

/*
function printMsg(msg: string | number): void {
  if (typeof msg === 'string') {
    console.log(msg.toUpperCase());
  } else {
    console.log(msg.toExponential()); // Метод toExponential() возвращает строку, представляющую объект Number в экспоненциальной записи.
  }
  console.log(msg);
}
*/

/*
function printMsg(msg: string | number | boolean): void {
  if (typeof msg === 'string' || typeof msg === 'number') {
    console.log('to str=>', msg.toString());
  } else {
    console.log('boolean=>', msg);
  }
  console.log(msg);
}
*/

// проверка, что входящий параметр - это массив
function printMsg(msg: string[] | number | boolean): void {
  // у нас будет входящий массив, который может быть или числом или логическим значением
  if (Array.isArray(msg)) {
    // isArray метод является ли входящий msg - массивом
    msg.forEach((item) => console.log(item));
  } else if (typeof msg === 'number') {
    console.log(msg.toFixed(2));
  } else {
    console.log(msg);
  }
}

// printMsg(['ascas', 'asdasd']); // ascas  asdasd
// printMsg(10.888); // 10.89
// printMsg(true); // true

/*
const printReadings = (a: number | string, b: number | boolean): void => {
  // функция выводит результат толкьо тогда, когда значение первого аргумента === значению второго аргумента
  if (a === b) {
    console.log('equal');
  }
};
*/

const printReadings = (a: number[] | string): void => {
  console.log(a.slice(0, 1)); // это обозначает, что метод slice доступен как на массивах, так и на строках
};

// printReadings([1, 2, 3]); // [1]

function chekReadings(readings: { system: number } | { user: number }): void {
  // сузим типы в зависимости от объекта
  if ('system' in readings) {
    // если свойство system существует в readings
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
}

// chekReadings({ system: 10 });
// chekReadings({ user: 20 });

function logValue(x: string | Date) {
  // Date - встроенный тип в TS
  if (x instanceof Date) {
    // является ли x датой уже готовой, либо просто строкой, которую передали в эту фукнкцию
    console.log(x.getDate());
  } else {
    console.log(x.trim());
  }
}

logValue(new Date('2022-01-01')); // 1
logValue('str');
