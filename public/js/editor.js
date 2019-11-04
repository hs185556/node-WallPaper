	//编辑器功能
	var E = window.wangEditor;
	var editor = new E('#div1', '#div2');
	editor.customConfig.menus = [
		'head', // 标题
		'bold', // 粗体
		'fontSize', // 字号
		'fontName', // 字体
		'italic', // 斜体
		'foreColor', // 文字颜色
		'backColor', // 背景颜色
		'link', // 插入链接
		'list', // 列表
		'justify', // 对齐方式
		'emoticon', // 表情
		'image', // 插入图片
		'video', // 插入视频
		'undo', // 撤销
		'redo' // 重复
	];
	editor.customConfig.lang = {
		'设置标题': 'title',
		'正文': 'p',
		'链接文字': 'link text',
		'链接': 'link',
		'上传图片': 'upload image',
		'上传': 'upload',
		'创建': 'init',
		'字体': 'fontFamily',
		'文字颜色': 'color',
		'背景色': 'bgc',
		'设置列表': 'setList',
		'对齐方式': 'alignment',
		'字号': 'fontSize'
		// 还可自定添加更多
	}
	editor.customConfig.fontNames = [
		'宋体',
		'微软雅黑',
		'sans-serif',
		'Arial',
		'Tahoma',
		'Verdana'
	];
	editor.customConfig.emotions = [{
			// tab 的标题
			title: '默认',
			// type -> 'emoji' / 'image'
			type: 'image',
			// content -> 数组
			content: [{
					alt: '[坏笑]',
					src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
				},
				{
					alt: '[舔屏]',
					src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
				}, {
					icon: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif",
					alt: "[草泥马]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif",
					alt: "[神马]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif",
					alt: "[浮云]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c9/geili_thumb.gif",
					alt: "[给力]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f2/wg_thumb.gif",
					alt: "[围观]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif",
					alt: "[威武]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/panda_thumb.gif",
					alt: "[熊猫]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/81/rabbit_thumb.gif",
					alt: "[兔子]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/otm_thumb.gif",
					alt: "[奥特曼]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/15/j_thumb.gif",
					alt: "[囧]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif",
					alt: "[互粉]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c4/liwu_thumb.gif",
					alt: "[礼物]"
				}, {
					src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ac/smilea_thumb.gif",
					alt: "[呵呵]"
				}
			]
		},
		{
			// tab 的标题
			title: 'emoji',
			// type -> 'emoji' / 'image'
			type: 'emoji',
			// content -> 数组
			content: ['😀', '😃', '😄', '😁', '😆']
		}
	];
	editor.create();

/*
 *留言板
 */
var oUl_commentList = document.querySelector('.commentList');
var oLi_commentList = oUl_commentList.getElementsByTagName('li');
var oBtn1 = document.getElementById('postmes_postBTN');
var oBtn2 = document.getElementById('clear_postBTN');
//add event
oBtn1.onclick = function() {
	console.log(oUl_commentList);
	var oTxt = editor.txt.text();
	if(oTxt != '' || oTxt == null){
		var cLi = document.createElement('li');
		cLi.innerHTML = oTxt;
		oDelBtn=document.createElement('input');
		oDelBtn.type="button";	
		oDelBtn.value="删除         ";		
     	oDelBtn.style.backgroundColor="transparent";	
     	oDelBtn.style.border="none";
     	oDelBtn.style.float="right";
		oDelBtn.class="del_btn";
		oDelBtn.onclick=function(){
			oUl_commentList.removeChild(this.parentNode);
		}
		cLi.appendChild(oDelBtn);
		editor.txt.clear();
		if(oLi_commentList) {
			oUl_commentList.insertBefore(cLi, oLi_commentList[0]);
		} else {
			oUl_commentList.appendChild(cLi);
		}
		var iHeight = oLi_commentList[0].offsetHeight;
		oLi_commentList[0].style.height = 0;
		oLi_commentList[0].style.opacity = 0;
		startMove(oLi_commentList[0], {height: iHeight}, function() {
			startMove(oLi_commentList[0], {opacity: 100});
		});
	}else{
		alert("内容为空！！！");
		return false;
	}
}
oBtn2.onclick = function(){
	editor.txt.clear();
}
