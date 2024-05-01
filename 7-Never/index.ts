const isBirthdayData: boolean = true;
const userNameData: string = `Elena`;
const ageData: number = 23;

/*
const createError = (msg: string) => {
  throw new Error(msg); // оператор throw выкидывает ошибку и заканчивает эту функцию
  console.log(1);
};
*/

const createError = (msg: string) => {
  // if (msg) throw new Error(msg);
  throw new Error(msg);
};

/*
const logBrtMsg = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) {
    return `Congrats ${userName.toLocaleUpperCase()}, age ${age + 1}`;
  } else {
    return createError('Error');
  }
};
*/
const logBrtMsg = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday === true) {
    return `Congrats ${userName.toLocaleUpperCase()}, age ${age + 1}`;
  } else if (isBirthday === false) {
    return createError('Error');
  }
  return createError('Error'); // на этом участке вообще ничего не возвращается из функции
};

const createNever = () => {
  while (true) {}
};

// createNever();

// const smth: never = undefined; // бессмысленно
