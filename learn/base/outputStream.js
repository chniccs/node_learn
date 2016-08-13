var fs = require('fs');

var data = '我的网址：www.chniccs.com';

//创建一个可写入的流
var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

//标记文件末尾,可以写一些自定义的东西进去
writerStream.end('hehe');

//处理流事件  data,end,and error
writerStream.on('finish',function(){
	console.log('写入完成了');
});

writerStream.on('error',function(err){
	console.log(err.stack);
});

console.log('执行完成');