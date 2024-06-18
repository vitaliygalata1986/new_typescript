interface Square {
  side: number;
  area: number;
}

interface Rect {
  a: number;
  b: number;
  area: number;
}

function calculateArea(side: number): Square; // если будет приходить один аргумент, то будем возвращать интерфейс Square
function calculateArea(a: number, b: number, c: number, d: number): Rect;

function calculateArea(
  a: number,
  b?: number,
  c?: number,
  d?: number
): Square | Rect {
  // функция будет возвращать два интерфейса: Square или Rect
  // второй аргумент будет не обязательным, так как это может быть у нас квадрат
  if (b) {
    // то будет создавать новый объект
    const rect: Rect = {
      // у него будет две стороны
      a,
      b,
      area: a * b,
    };
    return rect;
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    };
    return square;
  }
}

console.log(calculateArea(12, 12, 1, 2)); // { a: 12, b: 12, area: 144 }
console.log(calculateArea(14)); // { side: 14, area: 196 }

calculateArea(1);
