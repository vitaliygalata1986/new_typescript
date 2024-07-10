interface IPhone {
  company: string;
  number: number;
}

// IMobilePhone должен наследоваться от IPhone,
// тип свойства companyPartner зависит от свойства company

interface IMobilePhone extends IPhone {
  size: string;
  companyPartner: IPhone['company'];
  manufactured: Date;
}

// Пример использования
const myPhone: IMobilePhone = {
  company: 'Apple',
  number: 123456,
  size: '6 inches',
  companyPartner: 'Apple', // Должен быть того же типа, что и company
  manufactured: new Date(),
};

// console.log(myPhone);

// Типизировать объект phones

const phones: IMobilePhone[] = [
  // это будет массив интерфейсов IMobilePhone
  {
    company: 'Nokia',
    number: 1285637,
    size: '5.5',
    companyPartner: 'MobileNokia',
    manufactured: new Date('2022-09-01'),
  },
  {
    company: 'Samsung',
    number: 4356637,
    size: '5.0',
    companyPartner: 'SamMobile',
    manufactured: new Date('2021-11-05'),
  },
  {
    company: 'Apple',
    number: 4552833,
    size: '5.7',
    companyPartner: 'no data',
    manufactured: new Date('2022-05-24T12:00:00'),
  },
];

interface IPhonesManufacturedAfterDate extends IMobilePhone {
  initialDate: string;
}

// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе

function filterPhonesByDate<T extends IMobilePhone>(
  phones: T[], //
  key: keyof T, // это дает возможность выбора свойств
  initial: string
): Partial<IPhonesManufacturedAfterDate>[] {
  // благодаря встроенному интерфейсу Partial все свойства внутри интерфейса IPhonesManufacturedAfterDate стали не обязательными
  // функция возвращает массив интерфейсов

  return phones
    .filter((phone) => {
      const manufactured = phone[key];
      if (
        manufactured instanceof Date &&
        manufactured.getTime() > new Date(initial).getTime()
      ) {
        // если manufactured является датой
        return phone;
      }
    })
    .map((phone) => {
      const newObj = { ...phone, initialDate: initial, someprop: 'sdsds' }; // здесь уже можно добавлять любые property
      return newObj;
    });
}

// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта

console.log(filterPhonesByDate(phones, 'manufactured', '2022-01-01'));

// здесь набор фейковых данных - ошибок не будет
const fake = [
  {
    size: '5.5',
    companyPartner: 'MobileNokia',
    manufactured: new Date('2022-09-01'),
  },
  {
    company: 'Samsung',
    companyPartner: 'SamMobile',
    manufactured: new Date('2021-11-05'),
  },
];

// console.log(filterPhonesByDate(fake, 'manufactured', '2022-01-01'));

// но если нужно ужесточить - function filterPhonesByDate<T extends IMobilePhone>(
