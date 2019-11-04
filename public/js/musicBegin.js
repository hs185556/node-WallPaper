//音乐播放器开始

//取到各个的id值
   var oTotal = document.getElementsByClassName("total_time")[0]
			var oAudio = document.getElementById("audio")
			var oPlay = document.getElementById("btn-play")
			var oCircle = document.getElementById("circle-music")
			var oStart = document.getElementById("start_time")
			var oRound = document.getElementById("round")
			var oLoad = document.getElementById("load-music")
			var oUl = document.getElementById("ul")
			var oLi = oUl.getElementsByTagName("li")
			var oTop = document.getElementById("btn-pre")
			var oDown = document.getElementById("btn-next")
			var oDivL=document.getElementById("musicL")
			var oDivL1=document.getElementById("lir")
			var aDiv=document.getElementsByClassName("music-wave-div1")

 
//存储歌曲的num数组
		var num = 0
			var arr = ["video/民乐版火影忍者主题曲.mp3", "video/青鸟.mp3","video/Butter-Fly.mp3"]
			oAudio.src = arr[num]
//			oDivL.innerHTML="<p>"+arr[num]+"</p>"
//			oDivL.innerHTML=arr[num]  为什么这个名字一加进去  按钮消失 是因为他是一个绝对定位吗
//	点击切换歌曲 函数

			for(var i = 0; i < oLi.length; i++) {
				oLi[i].index = i
				oLi[i].onclick = function() {
					num = this.index
					oAudio.src = arr[this.index]
					oAudio.play()
// 					oDivL.innerHTML=oAudio.src = arr[num]
					oPlay.innerHTML = '<i class="iconfont icon-iconstop"></i>'
					oDivL1.innerHTML=arr[num];
					
				}
			}
			
//			装换总时长
			oAudio.addEventListener("canplay", function() {
				oTotal.innerHTML = getMin(this.duration)
			})
 
			//点击开始播放
			var timer_wave=new Array(aDiv.length);
			oPlay.onclick = function() {
				if(oAudio.paused) {
					oAudio.play()
					oPlay.innerHTML = '<i class="iconfont icon-iconstop"></i>'
//					oPlay.style.background=url(img/zhangting.png);
 					oDivL1.innerHTML=arr[num];
 					//开启播放特效
   					for(let i=0;i<aDiv.length;i++){
		              	timer_wave[i]=setInterval(function(){
		              		move5(aDiv[i],Math.floor(Math.random()*(500) + 1));
		              	},400);
		            }
				} else {
					oAudio.pause()
					oPlay.innerHTML = '<i class="iconfont icon-bofang"></i>'
//					oPlay.style.background=url(img/bofang.png);
					//关闭播放特效
					for(let i=0;i<aDiv.length;i++){
						clearInterval(timer_wave[i]);
		              	timer_wave[i]=null;
		            }
				}
			}
//		}
			
			oAudio.ontimeupdate = function() {
				var pre = Math.floor(oAudio.currentTime / oAudio.duration * 200)
				oCircle.style.width = pre + "px"
				oStart.innerHTML = getMin(oAudio.currentTime)
				oRound.style.left = oCircle.style.width
				oDivL1.innerHTML=arr[num];
			}
			
			oLoad.onclick = function(e) {
				var l = e.clientX - oLoad.offsetLeft
				oAudio.currentTime = (l / 200) * oAudio.duration
			}
//			进度读取的函数
			oRound.onmousedown = function(e) {
				document.onmousemove = function(e) {
					var l = e.clientX - oLoad.offsetLeft
					oAudio.currentTime = (l / 200) * oAudio.duration
 
				}
				document.onmouseup = function() {
					document.onmousedown = null
					document.onmousemove = null
					//					console.log("up")
				}
				return false
			}
//			获取分钟数的函数
			function getMin(time) {
				var m = Math.floor(time / 60)
				var s = Math.floor(time % 60)
				if(m <= 9) {
					m = "0" + m
				}
				if(s <= 9) {
					s = "0" + s
				}
				return m + ":" + s
			}
//			上一首函数
		oTop.onclick = function() {
				num++
				if(num < 0) {
					num = arr.length - 1
				}
				oAudio.src = arr[num]
				oAudio.play()
				oDivL1.innerHTML=arr[num];
		}
//		下一首
		oDown.onclick = function() {
				num++
				if(num > arr.length - 1) {
					num = 0
				}
				oAudio.src = arr[num]
				oAudio.play()
				oDivL1.innerHTML=arr[num];
			}
	
		function move5(obj,target) {
            clearInterval(obj.timer);
            obj.timer=setInterval(function () {
                speed=(target-obj.offsetWidth)/10;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if (obj.offsetWidth==target){
                    clearInterval(obj.timer);
                }else {
                    obj.style.width=obj.offsetWidth+speed+'px';
                }
                
            },30);
        }
		
//		      function ramdow(a,b){
//      	clearInterval(a.timer);
//      	a.timer=setInterval(function(){
//      		speed=parseInt(Math.floor(Math.random()*10+1));
//      		speed=speed>0?Math.ceil(speed):Math.floor(speed);
//      		if(speed!=0){
//      			a.style.Width=a.offsetWidth+speed+'px';
//      		}else{
//      			clearInterval(a.timer);
//      		}
//      		
//      	},30);
//      }
//写一个让他自己随机的一个函数去调用他  
//音乐播放器结束