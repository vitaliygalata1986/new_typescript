// let userName: string = 'Vitaliy';
// userName = 5;
// userName.isInteger(); // Метод Number.isInteger() определяет, является ли переданное значение целым числом.

/*
const userName = `Elena`;
const isBirthday = 1;
const age = '23';
*/

const isBirthday: boolean = true;
const userName: string = `Elena`;
const age: number = 23;

if (isBirthday) {
  console.log(`Congrats ${userName.toLocaleUpperCase()}, age ${age + 1}`);
}
