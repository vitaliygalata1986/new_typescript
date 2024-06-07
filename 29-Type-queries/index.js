/*
enum TimingFunc {
  EASE = 'ease',
  EASE_IN = `${EASE}-in`,
  LINEAR = 'linear',
}
*/
function frame(elem, dir, tFunc) {
    if (dir === 1 /* Directions.RIGHT */) {
        // console.log(tFunc); // 30
        console.log(tFunc); // linear
    }
}
function frameNew(elem, dir, tFunc) {
    if (dir === 1 /* Directions.RIGHT */) {
        console.log(tFunc); // 2
    }
}
frame('id', 1 /* Directions.RIGHT */, "linear" /* TimingFunc.LINEAR */);
frameNew('id', 1 /* Directions.RIGHT */, 2 /* TimingFuncN.LINEAR */);
//frame('id', Directions.RIGHT, 'ease');
