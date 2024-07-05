class User<T, S> {
  name: T;
  age: S;

  constructor(name: T, age: S) {
    this.name = name;
    this.age = age;
  }

  sayMyFullName<T>(surname: T): string {
    if (typeof surname !== 'string') {
      return `I have only name: ${this.name}`;
    } else {
      return `${this.name} ${surname}`;
    }
  }
}

class AdminUser<T> extends User<string, number> {
  rules: T;
  constructor(name: string, age: number, rules: T) {
    super(name, age);
    this.rules = rules;
  }
}

const admin = new AdminUser('Viktor', 123, 'admin');
console.log(admin.sayMyFullName('Smth')); // Viktor Smth
console.log(admin.rules); // admin;

const ivan = new User('Ivan', 30);
// console.log(ivan.sayMyFullName('Smth')); // Ivan Smth

const nameData = 'Alex';
const ageData = 54;

const alex = new User<string, number>(nameData, ageData);
