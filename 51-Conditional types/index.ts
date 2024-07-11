// создание простого условного типа
type Example = 'string' extends 'Hello' ? string : number; // сейсас это будет Number, так как литералы строго не совпадают

type newExample = 'Hello' extends 'Hello' ? string : number; // сейсас это будет string, так как литералы строго совпадают

type NewExample = 'string' extends string ? string : number; // string

// добавим строку
const str: string = 'Hello';

// при использовании литерала будет ошибка
// type Examples = 'string' extends str ? string : number; // Error

type Examples = 'string' extends typeof str ? string : number; // string

/*
type FromUserOrFromBase<T extends string | number> = {
  // Базовое значение
  base: T;
  // Пользовательское значение (опционально)
  user?: T;
};
*/

/*
// Пример использования:
const exampleString: FromUserOrFromBase<string> = {
  base: 'значение по умолчанию',
  user: 'значение от пользователя',
};

const exampleNumber: FromUserOrFromBase<number> = {
  base: 42,
};

console.log(exampleString.base); // значение по умолчанию
console.log(exampleString.user); // значение от пользователя

console.log(exampleNumber.base); // 42
console.log(exampleString.user); // undefined
*/

type FromUserOrFromBase<T extends string | number> = T extends string
  ? IDataFromUser
  : IDataFromBase;

interface IDataFromUser {
  weigth: string; // будем получать вес
}

interface IDataFromBase {
  calories: number;
}

const test: FromUserOrFromBase<number> = {
  // сюда можно записать только объект, который потходит под интерфейс IDataFromBase
  calories: 100,
};

const test1: FromUserOrFromBase<string> = {
  // сюда можно записать только объект, который потходит под интерфейс IDataFromUser
  weigth: '100',
};

interface User<T extends 'created' | Date> {
  created: T extends 'created' ? 'created' : Date;
}

const user: User<'created'> = {
  created: 'created',
};

const newUser: User<Date> = {
  created: new Date(),
};

// документирование функции с помощью перегрузки
// function calculateDailyCalories(str: string): IDataFromUser;
// function calculateDailyCalories(num: number): IDataFromBase;

/*
function calculateDailyCalories(
  numOrStr: string | number
): IDataFromUser | IDataFromBase {
  // функция будет возвращать один из двух вариантов интерфейса
  if (typeof numOrStr === 'string') {
    const obj: IDataFromUser = {
      weigth: numOrStr,
    };
    return obj;
  } else {
    const obj: IDataFromBase = {
      calories: numOrStr,
    };
    return obj;
  }
}
*/

function calculateDailyCalories<T extends string | number>(
  numOrStr: T
): T extends string ? IDataFromUser : IDataFromBase {
  if (typeof numOrStr === 'string') {
    const obj: IDataFromUser = {
      weigth: numOrStr,
    };
    return obj as FromUserOrFromBase<T>; // используем операцию привидения типов
  } else {
    const obj: IDataFromBase = {
      calories: numOrStr,
    };
    return obj as FromUserOrFromBase<T>; // используем операцию привидения типов
  }
}
console.log(calculateDailyCalories<number>(1)); // { calories: 1 }
console.log(calculateDailyCalories<string>('100')); // { weigth: '100' }

type GetStringType<T extends 'hello' | 'world' | string> = T extends 'hello'
  ? 'hello'
  : T extends 'world'
  ? 'world'
  : string;

const smth: GetStringType<'hello'> = 'hello';
const smthWorld: GetStringType<'world'> = 'world';
const smthString: GetStringType<'str'> = 'str';
console.log(smth); // hello

// оператор infer. Он позволяет “вытащить” определенный тип из какой-либо сущности
// вытащим первый элемент их дженерика, который там будет
// если это не массив, то возвращаем тот тип, который там приходит
type GetFirstType<T> = T extends Array<infer First> ? First : T;

type Ex = GetFirstType<number>; // number

type newEx = GetFirstType<number[]>; // number, так как у нас массис чисел
type Example2 = GetFirstType<string[]>; // string, так как у нас массив строк
type Example3 = GetFirstType<string>; // string, так как у нас не массив
type Example5 = GetFirstType<number[][]>; // number[], так как у нас массив массивов чисел

function getFirstElement<T>(arr: T): GetFirstType<T> {
  if (Array.isArray(arr)) {
    return arr[0] as GetFirstType<T>;
  }
  return arr as GetFirstType<T>;
}

const firstNumber = getFirstElement([1, 2, 3]); // firstNumber будет типа number
const firstString = getFirstElement(['a', 'b', 'c']); // firstString будет типа string
const singleValue = getFirstElement(42); // singleValue будет типа number, так как у нас не массив

console.log(firstNumber); // 1
console.log(firstString); // a

// тип будет дженериком, который принимает любой тип и возващает массив этого типа
// тоесть нам нужно, чтобы возвращался Type[]

type ToArray<Type> = Type extends any ? Type[] : never;
type ExArray1 = ToArray<number>; // number[]
type ExArray2 = ToArray<Ex | string>; // number[] | string[]
type ExArray3 = ToArray<true>; // true[]
