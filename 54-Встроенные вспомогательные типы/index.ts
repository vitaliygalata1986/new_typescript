interface Currencies {
  usa: 'usd';
  china: 'cny';
  ukraine: 'uah';
  kz: 'tenge';
}

type CreateCustonCurr<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type CustomCurrencis = CreateCustonCurr<Currencies>;

type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'out';

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;

type CurrWithoutUSA = Omit<Currencies, 'usa'>; // исключение

type CurrUSAAndUkraine = Pick<Currencies, 'usa' | 'ukraine'>; // фильтрация по свойству

type FadeType = Exclude<MyAnimation, 'swipe'>; // уберем один из типов из union type (тоесть удаление)

type CountriesWithoutUSA = Exclude<keyof Currencies, 'kz'>; // применяем keyof, так как нам нужно получить union type для начала

type SwipeType = Extract<MyAnimation, 'swipe'>; // выбирает потходящие типы по условию

type NewSwipeType = Extract<MyAnimation | Direction, 'swipe'>;

type PalyersNames = 'alex' | 'john';

type GameDataCurr = Record<PalyersNames, CustomCurrencis>;

// создадим объект под эту структуру

const gameData: GameDataCurr = {
  alex: {
    customChina: 'qqq',
    customUkraine: 'wwww',
    customKz: 'cccc',
    customUsa: 'ddd',
  },
  john: {
    customChina: 'qqq',
    customUkraine: 'wwww',
    customKz: 'cccc',
    customUsa: 'ddd',
  },
};
