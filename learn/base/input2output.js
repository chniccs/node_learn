var fs = require('fs');

var readerStream =fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);//执行管道读写操作

readerStream.on("data",function(chunk){
	console.log(chunk);
});

console.log('执行完成');