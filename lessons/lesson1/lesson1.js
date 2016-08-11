var express = require('express');

var app = express();

app.get('/', function(req,res){
	res.send('Hello chniccs');
});
app.listen(8080,function(){
	console.log('app 成功运行在 8080端口')
});