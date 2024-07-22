"use strict";
class Box1 {
    width = 500;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = 500; // сразу устанавливаем значение в 500, мы не хотим, чтобы снаружи оно менялось
    }
}
const firstBox1 = new Box1(250, 200);
console.log(firstBox1); // Box { width: 250, height: 500 }
