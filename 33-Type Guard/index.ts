const num = new Number(5); // создадим сущность при пормощи конструктора new Number - таким образом, создадим цифру 5

// объявим число как литерал
const x = 5;

console.log(x == num); // true
console.log(x === num); // false

let num2 = 5;

let num1: Number = new Number(5);
let num3: number = 5;

num1 = num3; // num3 неявно преобразовалось в num1
// num3 = num1

// еще один вариант создания числа
let num4 = Number(5);

// преобразование типов
const newNum = 5;
const strNum: string = newNum.toString(); // преобразовали число в строку

// обратная операция
const str = '5';
const numStr: number = +str; // используя унарный + - преобразовываем строку в число

interface Department {
  name: string;
  budget: number;
}

const department: Department = {
  name: 'web-dev',
  budget: 50000,
};

// интерфейс будет описывать какой-то конкретный проект
interface Project {
  name: string; // имя отдела, который будет заниматься этим проектом
  projectBudget: number;
}

// в коде динамически может формироваться еще один объект, который нужно сформировать на базе объекта department
/*
const mainProject: Project = {
  ...department,
  projectBudget: 5000,
};
*/

function tranformDepartment(department: Department, amount: number): Project {
  // у нас могут приходить объекты, которые потходят под этот интерфейс
  // amount - кол-во денег, которое закладывается под этот проект
  // на выходе будем формировать новый объект, который будет потходить под интерфейс Project
  return {
    name: department.name,
    projectBudget: amount,
  };
}

const mainProject: Project = tranformDepartment(department, 5000);
console.log(mainProject); // { name: 'web-dev', projectBudget: 5000 }
