var Box = /** @class */ (function () {
    function Box(width, height) {
        this.width = 500;
        this.width = width;
        this.height = 500; // сразу устанавливаем значение в 500, мы не хотим, чтобы снаружи оно менялось
    }
    return Box;
}());
var firstBox = new Box(250, 200);
console.log(firstBox); // Box { width: 250, height: 500 }
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var ivan = new User();
ivan.name = 'Ivan';
console.log(ivan);
