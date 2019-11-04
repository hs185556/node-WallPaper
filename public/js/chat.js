$(function(){
	//1.建立连接
	var url = 'http://localhost:3000';
	var socket = io.connect(url); //返回一个socket实例
	//2.监听
	socket.on('connect', () => { //连接成功
		console.log('连接服务器成功');
		//2.1打开通道
		socket.emit('open');
	});
	//3.接收服务器返回的消息
	socket.on('msg', (data) => {
		//				console.log(data);
		dealWithMsg('server', data);
	});
	//4.添加用户输入的信息
	$('.send .btn_send').click(() => {
		addCustomerMsg();
	})
	//5.回车发送消息事件
	$(window).on('keydown', (ev) => {
		if(ev.keyCode === 13) {
			addCustomerMsg();
		}
	})

	function addCustomerMsg() {
		//0.获取用户输入信息
		var txt = $('.msg').val();
		//1.提交消息给服务器
		socket.emit("msg", txt);
		//2.把消息显示在客户端
		dealWithMsg('customer', txt);
		//3.清空输入框
		$('.msg').val('');
	}
})

function dealWithMsg(className, data) {
	if(className === 'customer') {
		//1.创建li标签
		var $liDom = "<li class='customer'> <div class='container'> <span>" + data + "</span> <img src='images/robot.jpg' width='52px' /> </div> </li>";
		$('.chat').append($liDom);

	} else if(className === 'server') {
		//1.创建li标签
		var $liDom = "<li class='server'> <div class='container'> <img src='images/user.jpg' width='53px' /> <span>" + data + "</span> </div> </li>";
		$('.chat').append($liDom);

	}
	//2.让滚动条保持在底部
	var scrollHeight = $('.chat')[0].scrollHeight; //获取到这个对象的第一个，或者说是jq对象转成js对象，才能调用scrollHeight
	$('.chatbox').scrollTop(scrollHeight); //这里调用的是jq方法，不用[0]  这里的滚动条是设置在ul外面的盒子上的，所以要操作那个
};