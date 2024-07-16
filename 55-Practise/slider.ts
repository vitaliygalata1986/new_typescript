interface ISlider {
  container?: string;
  numberOfSlides?: number;
  speed?: 300 | 500 | 700;
  direction?: 'horizontal' | 'vertical';
  dots?: boolean;
  arrows?: boolean;
  animationName?: string;
}

function createSlider({
  container = '',
  numberOfSlides = 1,
  speed = 300,
  direction = 'horizontal',
  dots = true,
  arrows = true,
}: ISlider = {}): void {
  console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider();

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения

// для начала исключим свойство animationName и speed, так как он жестко задан (нам ведь нужно использовать 1100). А потом его добавим с типом number.
// Здесь мы используем встроенный TypeScript тип Required, чтобы все поля интерфейса ISlider стали обязательными.
type CustomSliderBase = Required<Omit<ISlider, 'animationName' | 'speed'>>;

// Преобразуем все поля интерфейса ISlider в обязательные

interface ICustomSlider extends CustomSliderBase {
  // в этот интерфейс поместим все свойства, которые были в type CustomSliderBase
  speed: number;
}

const customSliderOptions: ICustomSlider = {
  container: 'id',
  numberOfSlides: 4,
  speed: 1100, 
  direction: 'horizontal',
  dots: true,
  arrows: true,
};

// Оператор in в TypeScript используется для проверки наличия свойства в объекте.
// В контексте функции createCustomSlider оператор in проверяет, присутствует ли свойство container в объекте options.

function createCustomSlider(options: ICustomSlider): void {
  if ('container' in options) {
    console.log(options);
  }
}

createCustomSlider(customSliderOptions);
