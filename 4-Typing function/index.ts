const isBirthdayData: boolean = true;
const userNameData: string = `Elena`;
const ageData: number = 23;

/*
function logBrtMsg(isBirthday: any, userName: any, age: any) {
  if (isBirthday) {
    console.log(`Congrats ${userName.toLocaleUpperCase()}, age ${age + 1}`);
  }
}
*/

/*
function logBrtMsg(isBirthday: boolean, userName: string, age: number): void {
  if (isBirthday) {
    console.log(`Congrats ${userName.toLocaleUpperCase()}, age ${age + 1}`);
    // return undefined;
  }
}
*/

/*
function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday) {
    return `Congrats ${userName.toLocaleUpperCase()}, age ${age + 1}`;
  } else {
    return 'Error';
  }
}
*/

const logBrtMsg = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) {
    return `Congrats ${userName.toLocaleUpperCase()}, age ${age + 1}`;
  } else {
    return 'Error';
  }
};

//logBrtMsg('isBirthdayData', userNameData, ageData); //Congrats ELENA, age 24
// logBrtMsg(isBirthdayData, userNameData, ageData); //Congrats ELENA, age 24
console.log(logBrtMsg(isBirthdayData, userNameData, ageData)); // Congrats ELENA, age 24
