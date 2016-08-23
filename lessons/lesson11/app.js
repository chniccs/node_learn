//有所属对象就指向所属的对象
var myObject = {value: 100};
myObject.getValue = function () {
  console.log(this.value);  // 输出 100

  // 输出 { value: 100, getValue: [Function] }，
  // 其实就是 myObject 对象本身
  console.log(this);

  return this.value;
};

console.log(myObject.getValue()); // => 100

//无所属对象就指向全局对象
var myObject = {value: 100};
myObject.getValue = function () {
  var foo = function () {
    console.log(this.value) // => undefined
    console.log(this);// 输出全局对象 global
  };

  foo();

  return this.value;
};

console.log(myObject.getValue());