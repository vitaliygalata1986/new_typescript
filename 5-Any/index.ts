// let salary;

let salary: number;
salary = 5000;

const userData =
  '{"isBirthdayData":true, "ageData":40, "userNameData": "Jonh"}';

//const userObject = JSON.parse(userData);
// console.log(userObject.smt);
// console.log(userObject.smt());

const userObject: {
  // укажем аннотацию этого объекта
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData);

// console.log(userObject.smt());
