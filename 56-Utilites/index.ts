function calculate(a: number, b: number): number {
  return a * b;
}

// получим тип, который возвращает эта функция
type CalculateRT = ReturnType<typeof calculate>; // number

// и этот тип можем дальше использовать
let anotherRes: CalculateRT = 10;

type CalculaterlPT = Parameters<typeof calculate>; // получаем кортеж [a:number, b:number]
type CalculaterFirst = Parameters<typeof calculate>[1]; // number

type PT1 = Parameters<(a: number) => number>; // [a:number]
type PT2 = Parameters<<T>(arg: T) => T>; // [arg:unknown]


class Example {
  constructor(a:number){}
}

type T0 = ConstructorParameters<typeof Example> // [a:number]