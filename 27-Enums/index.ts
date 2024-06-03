const enum Directions {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

/*
enum TimingFunc {
  EASE = 1,
  EASE_IN = 10,
  LINEAR = 30,
}
*/

const enum TimingFunc {
  EASE = 'ease',
  EASE_IN = `ease-in`,
  LINEAR = 'linear',
}

const enum TimingFuncN {
  EASE = 1,
  EASE_IN = 2,
  LINEAR = EASE * 2,
}

/*
enum TimingFunc {
  EASE = 'ease',
  EASE_IN = `${EASE}-in`,
  LINEAR = 'linear',
}
*/

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
  if (dir === Directions.RIGHT) {
    // console.log(tFunc); // 30
    console.log(tFunc); // linear
  }
}

function frameNew(elem: string, dir: Directions, tFunc: TimingFuncN): void {
  if (dir === Directions.RIGHT) {
    console.log(tFunc); // 2
  }
}

frame('id', Directions.RIGHT, TimingFunc.LINEAR);
frameNew('id', Directions.RIGHT, TimingFuncN.LINEAR);
//frame('id', Directions.RIGHT, 'ease');
