//《使用 async 控制并发》

var async = require('async');



//并发连接数的计数器
var concurrentCount = 0;
var fetchUrl = function(url,callback){
	 // delay 的值在 2000 以内，是个随机的整数
	var delay = parseInt((Math.random()*10000000)%2000,10);
	concurrentCount++;
	
	console.log('现在的并发数是', concurrentCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
	setTimeout(function(){
		concurrentCount--;
		callback(null,url+'html content');
	},delay);
};

var urls = [];
for(var i=0;i<30;i++){
	urls.push('http://datasource_'+i);
}
//设置传入源数组urls，并设置限定5个并发数，实现回调方法
async.mapLimit(urls,5,function(url,callback){
	fetchUrl(url,callback);
},function(err,result){
	console.log('final:');
	console.log(result);
});