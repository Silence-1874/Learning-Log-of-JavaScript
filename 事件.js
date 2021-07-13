function f(){
    alert("哈哈哈");
}
//鼠标移入事件
onmouseover=f()
//鼠标移出事件
onmouseout=f()
//点击事件
onclick=f()
//获取焦点事件
onfocus=f()
//失去焦点事件
onblur=f()
//域内容改变事件
onchange=f()
//加载完毕事件
onload=f()
//表单提交事件
onsubmit=f()
//键位按下事件
onkeydown=f()
//键位弹起事件
onkeyup=f()
//键位按下并松开事件
onkeypress=f()

//动态绑定(匿名函数)
window.onload = function () {
    document.getElementById("id1");
    id1.onclick = function () {
        alert("点击成功");
    }
}