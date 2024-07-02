function processingData<T, S>(data: T, options: S): string {
  // будем использовать switch в роли typeguard
  switch (typeof data) {
    case 'string':
      return `${data}, speed: ${options}`;
      break;
    case 'number':
      return `${data.toFixed()}, speed: ${options}`;
      break;
    default:
      return 'Not valid';
  }
}

function processingDataNew<T, S>(data: T[], options: S): string {
  if (Array.isArray(data)) {
    return data.length.toString();
  } else {
    return `${options}`;
  }
}

let res1 = processingData(1, 'fast');
let res2 = processingData('1', 'slow');
const res3 = processingData<number, string>(10, 'slow');

// let res1 = processingData([1], 'fast');
// let res2 = processingData(['1'], 'slow');
// const res3 = processingData<number, string>([10], 'slow');

//console.log(res1); // 1, speed: fast
//console.log(res2); // 1, speed: slow
//console.log(res3); // 10, speed: slow

let res11 = processingDataNew([1], 'fast');
let res21 = processingDataNew(['1', '2', '3'], 'slow');
const res31 = processingDataNew<number, string>([10], 'slow');

//console.log(res11); // 1
//console.log(res21); // 3
//console.log(res31); // 1

function processingNewData<T, S>(data: T[], options: S) {
  return data;
}

let a = processingNewData([1], 'fast');
let b = processingNewData(['1', '2', '3'], 'slow');
const c = processingNewData<number, string>([10], 'slow');

console.log(a); // [ 1 ]
console.log(b); // [ '1', '2', '3' ]
console.log(c); // [ 10 ]

function processing<T>(data: T): T {
  return data;
}

let newFunc: <T>(data: T) => T = processing;

interface DataSaver {
  // processing: <T>(data: T) => T;
  processing: typeof processing; // здесь используем запрос типа
}

const saver: DataSaver = {
  /*
  processing(data) {
    console.log(data);
    return data;
  },
  */
  /*
  processing: <T>(data: T) => {
    console.log(data);
    return data;
  },
  */
  // вариант с удаленным ID
  processing: (data) => {
    console.log(data);
    return data;
  },
};

saver.processing('Data'); // Data

const newSaver: DataSaver = {
  processing: processing,
};

////////////////////////

interface PrcessingFn {
  <T>(data: T): T;
}

// и теперь можем его использовать
let newSmthFunc: PrcessingFn = processing;

interface NewDataServer {
  processing: PrcessingFn;
}

const newSaver1: NewDataServer = {
  processing: processing,
};
