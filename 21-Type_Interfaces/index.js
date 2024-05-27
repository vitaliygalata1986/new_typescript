// создадим отдельный псевдоним type AnimationTimingFunction
function createAnimation(id, animName, timingFunction, duration, iterationCount // кол. анимаций может задаваться как числом, так и строкой
) {
    if (timingFunction === void 0) { timingFunction = 'ease'; }
    if (duration === void 0) { duration = 1000; }
    if (iterationCount === void 0) { iterationCount = 'infinite'; }
    console.log("".concat(animName, " ").concat(timingFunction, " ").concat(duration, " ").concat(iterationCount)); // id ease-in-out 1000 infinite
}
createAnimation('id', 'anim', 'ease-in-out', 1000, 'infinite');
