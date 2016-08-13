var events =require('events');

var eventEmitter = new events.EventEmitter();//创建事件对象，这个其实就相当于android的中handler

var connect = function connected(){
	console.log('连接成功');
	eventEmitter.emit('data_received');
}

eventEmitter.on('connect_success',connect);//绑定connect_success 到监听器connect

eventEmitter.on('data_received',function(){//绑定事件data_received到匿名方法
	console.log('数据接收');
});

eventEmitter.emit('connect_success');

console.log('程序执行完成了。');
