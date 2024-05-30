let salary: number = 500;
// const salary = 500;

interface UserData {
  isBirth: boolean;
  birthDate: string;
  ageData: number;
  userNameData: string;
}

const userData =
  '{"isBirth": true, "birthDate": "2000-01-01", "ageData":40, "userNameData": "John"}';

const userObj: UserData = JSON.parse(userData);
// console.log(userObj.smt);

// let isOkay = true;
const isOkay = true;
// let movement = false;

/*
// нужно переопределить тип, при этом вывод типов не дает это сделать
if (isOkay) {
  movement = 'moving';
}
*/

// применим аннотацию с union - type
let movement: boolean | string = false;
if (isOkay) {
  movement = 'moving';
}

const arr = ['sss', 3, true];
