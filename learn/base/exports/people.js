function People(){
	var name;
	this.setName = function(thyName){
		name = thyName;
	};
	this.sayName = function(){
		console.log(name);
	};
}
module.exports = People;//记住一点，不管是对外暴露的对象还是方法，都只需要名字，不要（）的