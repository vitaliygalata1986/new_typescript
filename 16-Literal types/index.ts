let msg: 'Hello' = 'Hello';

// msg=""

msg = 'Hello';

const port3000: number = 3000;
const port3001: number = 3001;

/*
function startServer(
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' {
  console.log(`Server started on ${protocol}://server:${port}`);
  return 'Server started';
}
*/

function startServer(
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error('Invalid port');
  }

  return 'Server started';
}

startServer('http', 3000);
startServer('https', 3001);

/*
function createAnimation(
  id: string | number,
  animName: string,
  timingFunction:
    | 'ease'
    | 'linear'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out' = 'ease',
  duration: number = 1000,
  iterationCount: 'infinite' | number = 'infinite' // кол. анимаций может задаваться как числом, так и строкой
): void {
  // по умолчанию анимация будет ease, и будет принимать только строгий набор занчений
  const element = document.querySelector(`#${id}`) as HTMLElement;

  if (element) {
    console.log(`${animName} ${timingFunction} ${duration} ${iterationCount}`);
    element.style.animation = `${animName} ${timingFunction} ${duration} ${iterationCount}`;
  }
}
*/

function createAnimation(
  id: string | number,
  animName: string,
  timingFunction:
    | 'ease'
    | 'linear'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out' = 'ease',
  duration: number = 1000,
  iterationCount: 'infinite' | number = 'infinite' // кол. анимаций может задаваться как числом, так и строкой
): void {
  console.log(`${animName} ${timingFunction} ${duration} ${iterationCount}`); // id ease-in-out 1000 infinite
}

createAnimation('id', 'anim', 'ease-in-out', 1000, 'infinite');
