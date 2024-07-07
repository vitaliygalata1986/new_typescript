const arr: Array<number> = [1, 2, 3];

// сокращенная версия
const arr1: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ['dads']; // не изменяемый массив со строками
// roarr[0] = 'sss'

interface IState {
  readonly data: {
    name: string;
  };
  tag?: string;
}

/*
function action(state: IState) {
  state.data = 'abc'; // таким образом объект data будет изменен (мутирован)
}
*/
// запретим мутацию объекта
function action(state: Readonly<IState>) {
  // state.data = 'abc'; // ошибка
  // а вот так, м сможем перезаписать вложенное свойство
  state.data.name = 'abc';
}

const state: Partial<IState> = {
  data: {
    name: 'Alex',
  },
};

const strictState: Required<IState> = {
  data: {
    name: 'Alex',
  },
  tag: 'smth',
};

// strictState.data = 'asas';
