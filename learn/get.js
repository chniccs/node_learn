var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){

	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(util.inspect(url.parse(req.url,true)));//将访问的详细信息展示出来
	
}).listen(8888);