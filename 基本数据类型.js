//JavaScript:动态型、解释型、弱类型脚本语言

alert(typeof (v));  //undefined（未声明变量）

var v;

alert(typeof (v));  //undefined（未初始化变量）

v = 1;
alert(typeof (v));  //number

v = 1.0;
alert(typeof (v));  //number

v = 'h';
alert(typeof (v));  //string

v = "i";
alert(typeof (v));  //string

v = true;
alert(typeof (v));  //boolean

v = undefined;
alert(typeof (v));  //undefined

v = NaN;
alert(typeof (v));  //number

v = null;
alert(typeof (v));  //*注意：object（历史遗留bug）

//没有单个字符，单引号和双引号都是字符串
var str1 = "str1";
var str2 = 'str2';

// 0 null NaN 空字符串 在条件表达式中均为 false
// 0 与 空字符串 等价  null 与 undefine 等价（==）
var a = 0;
var b = '';
var c = null;
var d = undefined;  //从 null 中派生出来的，但类型不同
var e = NaN;
//f
if ((a || b || c || d || e)) {
    alert("t");
} else {
    alert("f");
}

alert(a == b);  //true
alert(a === b); //flase
alert(c == d);  //true
alert(c === d); //flase