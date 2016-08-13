var fs = require('fs');
var zlib = require('zlib');

//创建压缩文件t
// fs.createReadStream('input.txt')
// 	.pipe(zlib.createGzip())
// 	.pipe(fs.createWriteStream('input.txt.gz'));

//创建解压文件
fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('unzipinput.txt'));