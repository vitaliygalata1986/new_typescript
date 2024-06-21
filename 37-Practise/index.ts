// Это перечисление строковых значений, которое описывает возможные типы животных.
type Animal = 'cat' | 'dog' | 'bird'; // Тип Animal:

// Перечисление AnimalStatus:
// Это перечисление, которое описывает возможные статусы животного.
enum AnimalStatus {
  Available = 'available',
  NotAvailable = 'not available',
}

// Базовый интерфейс AnimalData:
// Этот интерфейс описывает основные данные о животном.
interface AnimalData {
  animal: Animal;
  breed: string;
  sterilized?: string;
}

// Интерфейс для доступных животных AnimalAvailableData:
// Этот интерфейс расширяет AnimalData и добавляет информацию о местоположении и возрасте животного.
interface AnimalAvailableData extends AnimalData {
  location: string;
  age?: number;
}

// Интерфейс для недоступных животных AnimalNotAvailableData:
// Этот интерфейс описывает данные, которые возвращаются, когда животное недоступно.
interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

// Интерфейсы стоит разделить, так как оба ответа будут иметь поле data
// И только по статусу будет сложно определить данные

// Интерфейс для ответа, когда животное доступно:
// Этот интерфейс описывает ответ с доступными данными животного.
interface AnimalAvailableResponse {
  status: AnimalStatus.Available;
  data: AnimalAvailableData;
}

// Интерфейс для ответа, когда животное недоступно:
// Этот интерфейс описывает ответ с недоступными данными животного.
interface AnimalNotAvailableResponse {
  status: AnimalStatus.NotAvailable;
  data: AnimalNotAvailableData;
}

// Этот объединяющий тип представляет собой либо ответ, когда животное доступно,
// либо ответ, когда животное недоступно.
type Res = AnimalAvailableResponse | AnimalNotAvailableResponse;

// Эта функция проверяет, является ли ответ доступным животным.
// Она использует так называемую "user-defined type guard" для сужения типа.
// Если статус равен AnimalStatus.Available, то возвращается true, и TypeScript понимает,
// что res является AnimalAvailableResponse.
function isAvailable(res: Res): res is AnimalAvailableResponse {
  // res должно относиться к интерфейсу AnimalAvailableResponse
  // чтобы проверить есть ли свойство в объекте - используем оператор in
  // оператор in позволяет сказать, что будет возращаено логическое значение, где проверяется, что res это AnimalAvailableResponse

  if (res.status === AnimalStatus.Available) {
    // 'available === available'
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(animal: Res): AnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

const availableCatResponse: AnimalAvailableResponse = {
  status: AnimalStatus.Available,
  data: {
    animal: 'cat',
    breed: 'persian',
    sterilized: 'yes',
    location: 'New York',
    age: 2,
  },
};

const notAvailableCatResponse: AnimalNotAvailableResponse = {
  status: AnimalStatus.NotAvailable,
  data: {
    message: 'smth',
    nextUpdateIn: new Date(),
  },
};
console.log(checkAnimalData(availableCatResponse));
console.log(checkAnimalData(notAvailableCatResponse));
