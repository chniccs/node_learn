 
	
	//这相当于单元测试吧
 var main = require('../main');
 var should = require('should');

 describe('test/main.test.js',function(){
 	it('should equal 55 when n === 10',function(){
 		main.fibonacci(10).should.equal(55);
 	});
 });
//  describe('test/main.test.js', function () {
//   it('should equal 55 when n === 10', function () {
//     main.fibonacci(10).should.equal(55);
//   });
// });