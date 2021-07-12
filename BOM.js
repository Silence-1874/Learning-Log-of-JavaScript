//BOM(Browser Object Model)

//alert对象，"window."可省略
window.alert("警告框");

//confirm对象，返回boolean类型
var flag = confirm("确认框");
alert(flag); //确认：true  取消：flase

//prompt对象，需要用户输入内容的确认框，确认时返回该内容
prompt("提示框", "请输入内容");

function f() {
    alert("FFF!");
}
//setTimeout函数：一次性定时器
var id = setTimeout(f, 2000); //两秒后执行1次f，并并停止
//clearTimeout函数：取消一次性定时器
clearTimeout(id);

//setInterval函数，循环定时器
id = setInterval(f, 1000); //每隔1秒执行一次f函数
//clearInterval函数：取消循环计时器
clearInterval(id);

//location对象href属性
location.href = "test.html"; //无限刷新
location.href = "https://www.baidu.com"; //页面跳转