
//这是悬挂牌子的特效
var cards = document.querySelector(".cards");
//是还没有学过的dom  文档对象模型Document引用的querySelector()方法返回文档中与指定选择器或选择器组匹配的第一个 html元素Element。
//如果找不到匹配项，则返回null
//找到.cards选项即是整体的一个布局
var images = document.querySelectorAll(".card__img");
//1、querySelector只返回匹配的第一个元素，如果没有匹配项，返回null。 
//2、querySelectorAll返回匹配的元素集合，如果没有匹配项，返回空的nodelist(节点数组)。 
//3、返回的结果是静态的，之后对document结构的改变不会影响到之前取到的结果。 
//找到每个img  注意他返回的是一个数组
var backgrounds = document.querySelectorAll(".card__bg");
var range = 40;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
var calcValue = function calcValue(a, b) {return (a / b * range - range / 2).toFixed(1);};
// 定义函数返回的是一个  toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。 thanks @alice-mx

var timeout = void 0;
//除了取undefined外，void还可以让页面不会在没有意义的地方一直刷新本页
document.addEventListener('mousemove', function (_ref) {var x = _ref.x,y = _ref.y;
//addEventListener() 方法用于向指定元素添加事件句柄。 一个鼠标位置定位的函数
//可以使用 document.removeEventListener() 方法来移除 addEventListener() 方法添加的事件句柄。

//使用 element.addEventListener() 方法为指定元素添加事件句柄。
  if (timeout) {
    window.cancelAnimationFrame(timeout);
// timeout已经被定义  用于执行如果超时的办法 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。
  }

  timeout = window.requestAnimationFrame(function () {
  	//返回 window.requestAnimationFrame()这个API是浏览器提供的js全局方法，针对动画效果。
    var yValue = calcValue(y, window.innerHeight);
    var xValue = calcValue(x, window.innerWidth);
    //innerheight	返回窗口的文档显示区的高度。innerwidth	返回窗口的文档显示区的宽度。
    //console.log(xValue, yValue);
    //控制面板输出位置
    cards.style.transform = "rotateX(" + yValue + "deg) rotateY(" + xValue + "deg)";
    //把计算出的目前鼠标位置传输到style的3d参数中实现转动的效果

    [].forEach.call(images, function (image) {
      image.style.transform = "translateX(" + -xValue + "px) translateY(" + yValue + "px)";
      //通过一个循环把bg和img都实现了鼠标改变数据的传输
    });

    [].forEach.call(backgrounds, function (background) {
      background.style.backgroundPosition = xValue * .45 + "px " + -yValue * .45 + "px";
    });
  });
}, false);
//true - 事件句柄在捕获阶段执行 false- 默认。事件句柄在冒泡阶段执行
//这是悬挂牌子的特效结束
