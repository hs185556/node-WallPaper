//1.获取元素并声明变量
var box = document.querySelector('.container1');
var imgList = box.getElementsByTagName('img');
var front = 0;
var angle = 0; //初始化的时候用的变量
var data_rotateY = 0;
var changeAngle = 0;
var afterChangeAngle = 0;
var clickIndex = 0;
var timer_round = null;
//2.初始化
for(var i = 0; i < imgList.length; i++) {
	imgList[i].setAttribute('data-rotateY', angle);
	imgList[i].setAttribute('style', 'transform:rotateY(' + angle + 'deg) translateZ(226px);');
	angle += 40;
}
//4.存函数
var goRound = function(){
	//3.3读取data-royateY值
	for(var j = 0; j < imgList.length; j++) {
		data_rotateY = imgList[j].getAttribute('data-rotateY');
		//3.4计算最后角度
		afterChangeAngle = parseInt(data_rotateY) - 40;
		//3.5作用属性
		imgList[j].setAttribute('style', 'transform:rotateY(' + afterChangeAngle + 'deg) translateZ(226px);');
		//3.6.把新的data-rotateY刷上去
		imgList[j].setAttribute('data-rotateY', afterChangeAngle);
	}
}
//5.图片自动轮播
setInterval(goRound,1500)
