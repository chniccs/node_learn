//这个是用于演示对象原型间继承的函数util.inherits
var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello' + this.name);
	};
}
Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub(){
	this.name = 'sub';
}

util.inherits(Sub,Base);//继承，不过只继承通过prototype声明过的属性

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);

//通过inspect来显示对象的信息
console.log(util.inspect(objBase));
console.log('-----------------------')
console.log(util.inspect(objBase, true)); 