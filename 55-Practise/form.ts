interface IForm {
  login: string;
  password: string;
  email: string;
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля должны появиться и в объекте валидации

// Используем маппинг типов для создания динамических ключей в объекте валидации.

type Validation<T> = {
  // получим все ключи, которые передаются во внутрь mapping type - в нашем случае IForm
  //  а значения установим в два доступных варианта: { isValid: true } | { isValid: false; errorMsg: string }
  // P - property - свойства объекта
  [P in keyof T]: { isValid: true } | { isValid: false; errorMsg: string };
};

const validationData: Validation<IForm> = {
  // Используем интерфейс формы для типизации объекта валидации
  login: { isValid: false, errorMsg: 'At least 3 characters' },
  password: { isValid: true },
  email: { isValid: true },
};
