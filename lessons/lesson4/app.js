var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');
var url = require('url');
var cnodeUrl = 'https://cnodejs.org/';



function eventproxyTest(topicUrls){
	var ep = new eventproxy();
		// 命令 ep 重复监听 topicUrls.length 次（在这里也就是 40 次） `topic_html` 事件再行动
	tops=ep.after('topic_html' ,topicUrls.length, function(topics){
		// topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair

		topics = topics.map(function (topicPair){

			var topicUrl = topicPair[0];//这是地址
			var topicHtml = topicPair[1];//这里网页内容

			var $ = cheerio.load(topicHtml);

			var authourUrl = $('.changes a').attr('href');
			var authour = $('.changes a').text().trim();
			var href = url.resolve(cnodeUrl,authourUrl);
			superagent.get(href)//执行获取积分的任务
				.end(function(err,res){

					var $1 =cheerio.load(res.text);
					$1('.big').text().trim();
					var topic=({
						title: $('.topic_full_title').text().trim(),
						href: topicUrl,
      					comment1: $('.reply_content').eq(0).text().trim(),
      					authour: authour,
      					score1: $1('.big').text().trim()
					});
					console.log(topic);
				});
		});
	});



	topicUrls.forEach(function(topicUrl) {
		superagent.get(topicUrl)
			.end(function(err,res){
				console.log(topicUrl +' successful');
				//提交到任务栈（这定义它为任务栈吧，就是加入任务队列的意思吧）
				ep.emit('topic_html',[topicUrl, res.text]);//这里给事件定义一个标识为topic_html
			});
	});

}

superagent.get(cnodeUrl)
	.end(function(err,res){
		if(err){
			return console.log(err);
		}
		var topicUrls = [];
		var $ = cheerio.load(res.text);
		var i=0;
		//获得首页所有的链接
		$('#topic_list .topic_title').each(function (idx,element){
			i++;
			if(i==3){//只取三个
				return false;//——跳出所有循环
			}
			var $element = $(element);
			var href = url.resolve(cnodeUrl,$element.attr('href'));
			topicUrls.push(href);
		});
		console.log(topicUrls);
		eventproxyTest(topicUrls);
		
	});









