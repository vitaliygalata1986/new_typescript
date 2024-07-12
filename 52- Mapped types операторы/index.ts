interface Currencies {
  usa?: 'usd';
  china: 'cny';
  ukraine: 'uah';
  kz: 'tenge';
}

type ROnlyCurr = Readonly<Currencies>;

// сам пользователь сможет менять названия этих валют
type CustomCurrencis = {
  usa: string;
  china: string;
  ukraine: string;
  kz: string;
};

// Сформированный тип должен быть обязательно задан через
// В самом простом варианте его можно применять к обычным литералам:
// type!

type Keys = 'name' | 'age' | 'role';

type User = {
  // это сопоставимый type
  [K in Keys]: string;
  // [Произвольный Идентификатор in Множество] Произвольный Тип Данных
};

const alex: User = {
  name: 'Alex',
  age: '25',
  role: 'admin',
};

// с помощью такой записи мы сможем копировать type/interface
type CreateCustomCurr<T> = {
  // readonly [P in keyof T]: string;
  -readonly [P in keyof T]-?: string;
  // readonly [P in keyof T]?: string;
};

type CustomNewCurrencies = CreateCustomCurr<Currencies>;

const countries: CustomNewCurrencies = {
  usa: 'usd1',
  china: 'cny2',
  ukraine: 'uah3',
  kz: 'tenge4',
};

// countries.china='AXax'
