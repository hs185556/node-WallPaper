//取得canvas
		const canvas = document.getElementById('canvas1');
		canvas.width = 920;
		canvas.height = 300;
		const ctx = canvas.getContext('2d');
//		canvas.style.backgroundColor = '#ccc';
		canvas.style.margin = '0px auto';
		//画布类
		class Paper{
			constructor(bg){
				this.bg = bg;
			}
			/*
			 * 改变背景
			 */
			changeBg(){
				startMove(canvas,{opacity:50},()=>{
					canvas.style.background = 'url("'+this.bg+'") center center no-repeat';
					startMove(canvas,{opacity:100});
				})
			}
		}
		//实例化画布对象数组
		let bgArr = ["images/top_banner04.jpg","images/top_banner05.jpg","images/top_banner06.jpg"];
		let paper = null;
		let lock = 0;
		paper = new Paper(bgArr[parseInt(Math.random()*bgArr.length)]);
		paper.changeBg();
		let nowbg = paper.bg;//当前canvas背景图
		canvas.onmouseover = ()=>{
//			console.log(bgArr[_.random(0,bgArr.length-1)]);
			if(lock > 0)return;
			lock++;
			do{
				paper = new Paper(bgArr[parseInt(Math.random()*bgArr.length)]);
			}while(paper.bg === nowbg)
			nowbg = paper.bg;
			//换背景
			paper.changeBg();
			setTimeout(()=>{
				lock--;
			},10000);//一段时间只能触发一次，因为有这个锁
		}
		
		
		//小球类
		class Ball {
			/**
			 * 构造器
			 */
			constructor(x, y, color) {
				this.x = x;
				this.y = y;
				this.color = color;
				this.r = 15;
			}
			/**
			 * 绘制小球
			 */
			render(){
				ctx.save();
				ctx.beginPath();
				ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
				ctx.fillStyle=this.color;
				ctx.fill();
				ctx.restore();
			}
		}
		
		
		//会移动的小球类 继承
		class moveBall extends Ball{
			constructor(x,y,color){
				super(x,y,color);
				
				//量的变化
				this.dX=_.random(-5,5);
				this.dY=_.random(-5,5);
				this.dR=_.random(1,3);
			}
			update(){
				this.x+=this.dX;
				this.y+=this.dY;
				this.r-=this.dR;
				if(this.r<0)this.r=0;
			}
		}
		
		//实例化小球对象数组
		let ballArr=[];
		let colorArr=['red','blue','green','yellow','pink','purple','grey'];
		
		//监听鼠标的移动
		/*canvas.addEventListener('mousemove',function(e){
			ballArr.push(new moveBall(e.offsetX,e.offsetY,colorArr[_.random(0,colorArr.length-1)]));
//			console.log(ballArr);
		})*/
		canvas.onmousemove=function(e){
			ballArr.push(
				new moveBall(
					e.offsetX,e.offsetY,colorArr[_.random(0,colorArr.length-1)]
					)
				);
			//_.random 是  underscore.js 取随机数的方法
		}
		
		//开启定时器
		setInterval(function(){
			//清屏
			ctx.clearRect(0,0,canvas.width,canvas.height);
			
			//绘制
			for(let i=0;i<ballArr.length;i++){
				ballArr[i].render();
				ballArr[i].update();
			}
		},50)