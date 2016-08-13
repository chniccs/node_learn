var http = require('http');
http.createServer(function(rq,rp){
	rp.writeHead(200, {'Content-Type': 'text/plain'});
	var buf = new Buffer([10, 20, 30, 40, 50]);//这个其实就是java中的String 或者StringBuffer
	console.log(buf.toJSON(buf));//将buf转换成json
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');