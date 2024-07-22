class Box {
  width: number = 500;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = 500; // сразу устанавливаем значение в 500, мы не хотим, чтобы снаружи оно менялось
  }
}

const firstBox = new Box(250, 200);
console.log(firstBox); // Box { width: 250, height: 500 }

class User {
  // name!: string; // ! - чтобы не было ошибки, так как класс без конструктора
  name: string; //  "strictPropertyInitialization": false
}

const ivan = new User();
ivan.name = 'Ivan';
console.log(ivan); // User { name: 'Ivan' }
