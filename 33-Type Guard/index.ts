/*
function printMsg(msg: string[] | number | boolean): void {
  // у нас будет входящий массив строк, числа или логические значения
  if (Array.isArray(msg)) {
    // isArray метод является ли входящий msg - массивом
    msg.forEach((item) => console.log(item));
  } else if (typeof msg === 'number') {
    console.log(msg.toFixed(2));
  } else {
    console.log(msg);
  }
}
*/

function printMsg(msg: string[] | number | boolean): void {
  // у нас будет входящий массив строк, числа или логические значения
  if (Array.isArray(msg)) {
    // isArray метод является ли входящий msg - массивом
    msg.forEach((item) => console.log(item));
  } else if (isNumber(msg)) {
    // используем пользовательский Type Guard
    console.log(msg.toFixed(2));
  } else {
    console.log(msg);
  }
}
printMsg(['ascas', 'asdasd']); // ascas  asdasd
printMsg(10.888); // 10.89
printMsg(true); // true

/*
const box = document.querySelector('.box');
box?.addEventListener('click', () => {});
*/

// n: string[] | number | boolean - нам может приходить аргумент, который может быть несколькими типами
// n is number - мы вернем то, что n - является числом (true/false)
// это тоже самое, если бы написали: : boolean
// n is number - такая запись чаще всего применяется в Type Guard
// Функция inNumber вернет true только если аргумент будет числом.
// Оператор is позволяет сказать, что будет возвращено логическое
// значение, где проверяется , что n это число
/*
function isNumber(n: string[] | number | boolean): n is number {
  return typeof n === 'number';
}
*/

// упростим функцию, unknown - мы вообще можем не знать, что сюда может приходить
function isNumber(n: unknown): n is number {
  return typeof n === 'number';
}
interface Car {
  engine: string;
  wheels: {
    number: number;
    type: string;
  };
}

interface Ship {
  engine: string;
  sail: string;
}

// функция будет заниматься починкой какого-то транспортного средтсва
function repairVehicle(vehicle: Car | Ship) {
  // console.log(vehicle);
  if (isCar(vehicle)) {
    // если это автомобиль
    console.log(vehicle.wheels.number); // то в таком случае мы имеем доступ до колес, тоесть мы будем иметь доступ к тем свойствам, которые есть в интерфейсе Car
  } else if (isSip(vehicle)) {
    console.log(vehicle.sail);
  } else {
    // код сюда некогда не дойдет
    vehicle; // поэтому vehicle будет never
  }
}

// typeguard
function isCar(car: Car | Ship): car is Car {
  // boolean здесь прописывать нельзя
  // console.log(car); // { engine: 'audi', wheels: 4 }
  // car должно относиться к интерфейсу Car
  // чтобы проверить есть ли свойство в объекте - используем оператор in
  // return 'wheels' in car;
  return (car as Car).wheels.number !== undefined; // если мы утвердили car как автомобиль, то у него должно быть свойство wheels
}

function isSip(ship: Car | Ship): ship is Ship {
  return 'sail' in ship;
}

const audi = {
  engine: 'audi',
  //wheels: 4,
  wheels: {
    number: 4,
    type: 'string',
  },
};

repairVehicle(audi); // 4
