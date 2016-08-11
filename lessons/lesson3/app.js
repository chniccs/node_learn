
var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/',function (req,res,next) {
// 用 superagent 去抓取 https://cnodejs.org/ 的内容
	superagent.get('https://cnodejs.org/')
		.end(function (err,sres){
			if(err){
				return next(err);
			}

			var $ = cheerio.load(sres.text);
			var items = [];
			$('#topic_list .cell').each(function(idx,element){
				
				items.push({
					author: $(element).children(".user_avatar").children("img").attr("title"),
					title: $(element).children(".topic_title_wrapper").children('.topic_title').attr('title'),
					href: $(element).children(".topic_title_wrapper").children('.topic_title').attr('href')
				});

			});

			res.send(items);

		});
});


app.listen(8080,function(){
	console.log('开始执行');
});
