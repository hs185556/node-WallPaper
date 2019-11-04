function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
}

function getCookie(name) {
    var arr = document.cookie.split('; ');
    for(var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        if(arr2[0] == name) {
            return arr2[1];
        }
    }
    return '';
}

function removeCookie(name) {
    setCookie(name, 1, -1);
}

//登录逻辑
function login(){
    var username=document.getElementById("exampleInputEmail1").value;
    var password=document.getElementById("exampleInputPassword1").value;
    if(username==""||password==""){
        alert("用户名和密码都不能为空,登录失败");
    }
    else if (getCookie("username")==username&&getCookie("password")==password){
    	alert("登录成功!");
        window.location="chat";
        return 1;
        //做登录成功逻辑,比如去跳转主页面之类的...
    }
    else alert("用户名或密码错误");
}
//注册逻辑
function register(){
    var username=document.getElementById("exampleInputEmail1").value;
    var password=document.getElementById("exampleInputPassword1").value;
    if(username==""||password==""){
        alert("用户名和密码都不能为空,注册失败");
    }
    if (getCookie("username")==username){
        alert("用户名已存在!");
        //做登录成功逻辑,比如去跳转主页面之类的...
    }
    if(getCookie("username")!=username){
        setCookie("username",username,1);
        setCookie("password",password,1);
        alert("注册成功!");
        window.location="login";
    }
}