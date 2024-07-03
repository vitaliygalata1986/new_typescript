type Smth<T> = T; // мы говорим, что сюда будет приходиит какой-то тип

const num: Smth<number> = 5;

// такой type можно использовать для того, чтобы аннотировать какие-то объекты
type User<T> = {
  login: T;
  age: number;
};

const user: User<string> = {
  // login должен быть в виде строки
  login: 'admin',
  age: 38,
};

type OrNull<Type> = Type | null; // сюда будет приходить или Type / null
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number> = [1, 2];
const dataNew: OneOrMany<number> = 1;

interface IUser<T> {
  login: T;
  age: number;
}

const newUser: IUser<string> = {
  login: 'admin',
  age: 38,
};

interface ParentOfUser {
  mother: string;
  father: string;
}

interface IPUser<ParantData extends ParentOfUser> {
  // теперь у ParantData должны быть обязательно два поля: mother: string и father: string
  // остальные - на усмотрение программиста
  login: string;
  age: number;
  parents: ParantData;
}

const newUserSmth: IPUser<{
  mother: string;
  father: string;
  married: boolean;
}> = {
  login: 'admin',
  age: 38,
  parents: {
    mother: 'Nadya',
    father: 'Viktor',
    married: true,
  },
};

const depositMoney = <T extends number | string>(amount: T): T => {
  // теперь наш тип T может быть только строкой или числом
  console.log(`req to server with amount: ${amount}`);
  return amount;
};

depositMoney(500);
depositMoney('500');
// depositMoney(true);

// без Generic

const depositMoneyNew = (amount: number | string): number | string => {
  console.log(`req to server with amount: ${amount}`);
  return amount;
};

depositMoneyNew(500);
depositMoneyNew('500');
// depositMoneyNew(true);

interface Processing {
  <T>(data: T): T;
}

function processing<T>(data: T): T {
  return data;
}

let newFunc: Processing = processing;
