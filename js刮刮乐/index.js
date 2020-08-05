window.onload =function(){
    //选择器封装
    function $(name){
        return document.querySelector(name);
    };
    //获取画布元素
    var canvas = $("#canvas");
    //获取绘 图对象
    var ctx = canvas.getContext("2d");
    // ctx.lineWidth = 3;  //线宽
    //ctx.strokeStyle ='red';  //线条颜色
    // ctx.moveTo(10,10);
    // ctx.lineTo(100,10);
    // ctx.lineTo(200,100);
    // ctx.stroke(); //执行线条
    // canvas.onmousemove = function(e){
    //     ctx.lineTo(e.clientX,e.clientY);
    //     ctx.stroke(); //执行
    // }

    //矩形
    ctx.rect(0,0,300,150)  //ctx.rect(左上角X,左上角y,width,height)
    ctx.fillStyle ='#ccc';  //填充颜色
    ctx.fill(); //执行填充
    //ctx.clearRect(50,50,100,50);  //清除区域

    //按下事件
    canvas.onmousedown = function(e){
        canvas.onmousemove = function(e){  //移动
            ctx.clearRect(e.clientX,e.clientY,20,20);  //清除区域
        }
    };
    //松开事件
    canvas.onmouseup = function(e){
        canvas.onmousemove = null; //清除事件
    };

    //中奖信息
    var arr = ['一个亿','海景别墅','现金一万','赠送VIP课程','100元话费','谢谢惠顾'];
    var prize = $(".prize");
    //随机的数据
    var i = Math.floor(Math.random()*arr.length);    //0.5*6=3    0.2*6= 1.2
    console.log(i);
    // if(i==0){
    //     i=arr.length-1;
    // };
    prize.innerHTML = arr[i];
// 限制条件
    // if(i<2){
    //     i=arr.length-1
    // }
    // prize.innerHTML = arr[i];
}