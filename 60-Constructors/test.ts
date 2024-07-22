class Box1 {
  width: number = 500;
  height: number;
  volume: string;

  constructor(volume: string); // первый конструктор, где мы получаем объем
  constructor(width: number); // второй конструктор, где мы получаем ширину
  constructor(widthOrVolume: number | string) {
    // super()

    if (typeof widthOrVolume === 'number') {
      this.width = widthOrVolume;
    } else {
      this.volume = widthOrVolume;
    }
    this.height = 500;
    // return 'ddd'

    // super()
  }
}

const firstBox1 = new Box1(250);
const firstBox2 = new Box1('250');
// console.log(firstBox1); // { width: 250, height: 500, volume: undefined }
// console.log(firstBox2); // { width: 500, height: 500, volume: '250' }

class Box2<T> {
  width: number = 500;

  constructor(width: number) {
   // this.width = T; // мы не можем записать тип (будет удален при компиляции)
  }
}

const firstBox3 = new Box2(250);
