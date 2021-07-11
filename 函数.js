//函数的定义
function f(a, b, c) { //无需声明形参类型
    alert(a + "#" + b + "#" + c);
}

function f(a, b) {
    alert(a + "$" + b);
}

function f(a, b) {
    alert(a + "&" + b);
}

//JavaScript中不存在函数重载，最后定义的函数会覆盖前面的同名函数
f(1, 2, 3); //1&2
f(1, 2); //1&2
f(); //undefined&undefined

//函数的第二种定义方式
var func = function (a, b, c) {
    return a + b;
}
alert(func(1, 2, 3)); //3

//arguments 对象
function func() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

alert(func(1)); //1
alert(func(1, 2, 3)); //6
alert(func(1, 2, 3, 4, 5)); //15