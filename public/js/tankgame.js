
window.onload=function(){
var oDivTank=document.getElementById("game-tank")

var oTank1=document.getElementById("tank1")
var oTank2=document.getElementById("tank2")

//所以的div模块都调用这个随机移动模块

function Fix(obj){
	this.div=obj;
	
}

Fix.prototype.ramove=function(){

	this.div.style.left=Math.floor(Math.random()*680)+"px";
	this.div.style.top=Math.floor(Math.random()*360)+"px";
}
Fix.prototype.run=function(){
	setInterval(this.ramove.bind(this),500);
	
	
}
var div=document.getElementById("game-tank").getElementsByTagName("div");
for(var i=0;i<div.length;i++){
	var d=new Fix(div[i]);
	d.run();
	limit()
}
	
	function limit(){
        (div.offsetLeft<=0)&&(div.style.left=0);
        //防止左溢出
        (div.offsetTop<=0)&&(div.style.top=0);
        //防止上溢出
        (div.offsetLeft+div.offsetWidth>=document.documentElement.clientWidth)&&(div.style.left=document.documentElement.clientWidth-div.offsetWidth+"px");
        //防止右溢出
        (div.offsetTop+div.offsetHeight>=document.documentElement.clientHeight)&&(div.style.top=document.documentElement.clientHeight-div.offsetHeight+"px");
        //防止下溢出
        } 



   
}