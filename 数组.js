var arr1 = []; //创建空数组
var arr2 = [1, 2, 3]; //创建并初始化数组
var arr3 = new Array(); //创建空数组
var arr4 = new Array(5); //创建指定初始大小的数组（元素均为undefined）
var arr5 = new Array(1, 2, 3); //创建并初始化数组

//可以看成Java中的ArrayList，成员没有类型限制，赋值时自动扩容
var arr = [];
alert(arr.length); //0

arr[0] = 1;
alert(arr.length); //1

arr[2] = "abc";
alert(arr.length); //3
alert(arr[1]);       //undefined

//遍历数组
for (var i = 0; i < arr.length; i++) {
    alert(arr[i]);
}

var a = [1, 2, 3, 'c', 'b', 'a'];
//join() 不影响原数组
alert(a.join('-*-')); //1-*-2-*-3-*-c-*-b-*-a
alert(a); //1,2,3,c,b,a

//reverse() 会破坏原数组
alert(a.reverse()); //a,b,c,3,2,1
alert(a); //a,b,c,3,2,1

var a = [1, 2, 3, 'c', 'b', 'a'];
//pop() 删除并返回数组的最后一个元素
alert(a.pop()); //a
alert(a.pop()); //b

//push()向数组末尾追加一个或多个元素，并返回数组的新长度
alert(a.push('d')); //5
alert(a.push('e')); //6
alert(a.push(4, 5, 6)) //9
alert(a); //1,2,3,c,d,e,4,5,6