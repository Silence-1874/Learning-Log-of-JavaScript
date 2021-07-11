//对象的定义
function Person(n, a, s) {
    this.name = n;
    this.age = a;
}

var p = new Person('Zoe', 20);
alert(p.name); //Zoe
alert(p.age); //20

p.age = 18;
alert(p.age); //18

alert(p.sex); //undefined
p.sex = '女';
alert(p.sex); //女

//直接量创建对象
var person = {name: "Silence", age:19}
alert(person.name); //Silence
alert(person.age); //19