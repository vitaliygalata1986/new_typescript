const userData = {
  isBirthdayData: true,
  userNameData: `Elena`,
  ageData: 23,
  messages: {
    error: 'Error',
  },
};

const createError = (msg: string) => {
  throw new Error(msg);
};

/*
const logBrtMsg = (data: {
  // аннотируем объект - мы его затипировали на этапе использования
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
}): string => {
  if (data.isBirthdayData) {
    return `Congrats ${data.userNameData.toLocaleUpperCase()}, age ${
      data.ageData + 1
    }`;
  } else {
    return createError('Error');
  }
};
*/

/*
const logBrtMsg = ({
  isBirthdayData,
  userNameData,
  ageData,
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
}): string => {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toLocaleUpperCase()}, age ${ageData + 1}`;
  } else {
    return createError('Error');
  }
};
*/

const logBrtMsg = ({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error }, // вытаскиваем из объекта error
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string => {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toLocaleUpperCase()}, age ${ageData + 1}`;
  } else {
    return createError(error);
  }
};

console.log(logBrtMsg(userData)); // Congrats ELENA, age 24
