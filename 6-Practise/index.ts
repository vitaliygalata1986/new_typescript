const currRate: string = '1.05';

// имитация запроса о курсе валют
const fetchCurr = (response: string): number => {
  const data = JSON.parse(response);
  // console.log(data); // 1.05
  return data;
};

// JSON.parse() преобразует строку JSON в соответствующий объект JavaScript. Однако, строка "1.05" не является валидным JSON, потому что числа в JSON должны быть без кавычек. В этом случае, JavaScript сам по себе попытается интерпретировать строку как число с плавающей точкой. Так что результатом будет просто число 1.05.
// Если функция ничего не возвращает (вывод в консоль, отправка данных на сервер, работа с DOM-деревом...), то возвращаемый тип будет void
// функция переводит одну валюту в другую
function transferEurToUsd(
  available: boolean,
  amount: number,
  commission: number
): void {
  if (available) {
    let res = fetchCurr(currRate) * amount * commission;
    console.log(res); // 551.25
    // Или запись в элемент на странице вместо консоли
  } else {
    console.log('Сейчас обмен недоступен');
  }
}

transferEurToUsd(true, 500, 1.05);
