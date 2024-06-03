interface User {
  readonly login: string;
  password: string;
  readonly addr?: string;
}

const user: User = {
  login: 'admin',
  password: 'test',
  addr: 'Niko',
};

console.log(user);

// user.login = 'newlogin'
user.password = '123';
// user.addr = 'odessa'

class Animal {
  readonly name: string = 'name';
}

const basicPorts: readonly number[] = [3000, 3001, 5555];
// basicPorts[0] = 5;
// basicPorts.push(666);

const newBasicPorts: readonly [number, ...string[]] = [3000, '3001', '3002'];
// newBasicPorts[0] = 5;
// newBasicPorts.push(666);

// берем все свойства, которые находятся в интерфейсе User и делаем их полностью только на чтение
const userFreeze: Readonly<User> = {
  login: 'admin',
  password: 'test',
  addr: 'Niko',
};

// userFreeze.addr = 'sass'
// userFreeze.password = 'sass';
// userFreeze.login = 'sass';

// массив, который можно только прочитать
const newArray: ReadonlyArray<number> = [3000, 3001, 5555];
newArray[0] = 5;
newArray.push(666);
