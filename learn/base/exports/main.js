var hello = require('./hello');
var People = require('./people');

hello.world();//这里就是创建一个hello对象，然后再调用他的world方法吧。用exports来修饰可以理解为java中的public
var people = new People();//实例化对象
people.setName('chniccs');
people.sayName();
