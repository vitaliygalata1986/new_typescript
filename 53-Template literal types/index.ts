type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'out';

type MyNewAnimation = `${MyAnimation}In`; // в итоге получим литеральный тип fadeIn

type NewMyAnimation = `${MyAnimation}${Capitalize<Direction>}`;

interface Currencies {
  usa: 'usd';
  china: 'cny';
  ukraine: 'uah';
  kz: 'tenge';
}

type CreateCustonCurr<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string; // string & - нам нужно, чтобы были обязательно строки, применяем оператор intersection &
  // иными словами мы говорим TS, что здесь: <string & P> - будет строка
};

type CustomCurrencis = CreateCustonCurr<Currencies>;
