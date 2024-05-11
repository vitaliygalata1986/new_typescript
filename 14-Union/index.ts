// union объединение
const message: string | number = 'Hello';

// внутри массива могут быть либо строки, либо числа
const messages: string[] | number[] = ['a', 'b'];

const data: (string | number)[] = ['name', 25];

// аннотация аргументов функций
function printMsg(msg: string | number): void {
  // console.log(msg);
  // console.log(msg.toLowerCase());
}

printMsg(4); // 4
printMsg('str'); // str
