// создадим отдельный псевдоним type AnimationTimingFunction

type AnimationTimingFunction =
  | 'ease'
  | 'linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out';

type AnimationID = string | number;

function createAnimation(
  id: AnimationID,
  animName: string,
  timingFunction: AnimationTimingFunction = 'ease',
  duration: number = 1000,
  iterationCount: 'infinite' | number = 'infinite' // кол. анимаций может задаваться как числом, так и строкой
): void {
  console.log(`${animName} ${timingFunction} ${duration} ${iterationCount}`); // id ease-in-out 1000 infinite
}

createAnimation('id', 'anim', 'ease-in-out', 1000, 'infinite');
