function printMsg(msg) {
    // у нас будет входящий массив строк, числа или логические значения
    if (Array.isArray(msg)) {
        // isArray метод является ли входящий msg - массивом
        msg.forEach(function (item) { return console.log(item); });
    }
    else if (typeof msg === 'number') {
        console.log(msg.toFixed(2));
    }
    else {
        console.log(msg);
    }
}
printMsg(['ascas', 'asdasd']); // ascas  asdasd
printMsg(10.888); // 10.89
printMsg(true); // true
var box = document.querySelector('.box');
box === null || box === void 0 ? void 0 : box.addEventListener('click', function () { });
