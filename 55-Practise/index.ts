// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)

interface IFitnesClass {
  name: string;
  startsAt: string;
  duration: number;
}

interface IFutureClass extends Omit<IFitnesClass, 'startsAt'> {
  // исключаем из IFutureClass startsAt
  willStartsAt: string;
}

interface IClient {
  name: string;
  age: string | number;
  gender: 'male' | 'female';
  timeLeft: string;
  makeCallFor: Date;
}

type CurrClient = Omit<IClient, 'makeCallFor'>;

type ExClient = Omit<IClient, 'timeLeft'>;

type FutureClients = Pick<IClient, 'name' | 'makeCallFor'>; // берем только два поля: name и makeCallFor

interface IFitnessClubCenter {
  clubName: string;
  location: string;
  classes: IFitnesClass[];
  futureClasses: IFutureClass[];
  currClients: CurrClient[];
  exClients: ExClient[];
  futureClients: FutureClients[];
}

const fitnessClubCenter: IFitnessClubCenter = {
  clubName: 'Fitness club Center',
  location: 'central ave. 45, 5th floor',
  classes: [
    {
      name: 'yoga',
      startsAt: '8:00 AM',
      duration: 60,
    },
    {
      name: 'trx',
      startsAt: '11:00 AM',
      duration: 45,
    },
    {
      name: 'swimming',
      startsAt: '3:00 PM',
      duration: 70,
    },
  ],
  futureClasses: [
    {
      name: 'boxing',
      willStartsAt: '6:00 PM',
      duration: 40,
    },
    {
      name: 'breath training',
      willStartsAt: '8:00 PM',
      duration: 30,
    },
  ],
  currClients: [
    {
      name: 'John Smith',
      age: '-',
      gender: 'male',
      timeLeft: '1 month',
    },
    {
      name: 'Alise Smith',
      age: 35,
      gender: 'female',
      timeLeft: '3 month',
    },
    {
      name: 'Ann Sonne',
      age: 24,
      gender: 'female',
      timeLeft: '5 month',
    },
  ],
  exClients: [
    {
      name: 'Tom Smooth',
      age: 50,
      gender: 'male',
      makeCallFor: new Date('2023-08-12'),
    },
  ],
  futureClients: [
    {
      name: 'Maria',
      makeCallFor: new Date('2023-08-12'),
    },
  ],
};

console.log(fitnessClubCenter);
