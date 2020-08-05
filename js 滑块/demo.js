window.onload = function(){
    //选择器的封装    
     function $(name){  //函数表达式
        return document.querySelector(name);
    };
    var  btn = $(".btn"); //按钮
         box = $(".box"); //盒子
         text = $(".text"), //文字
         bg = $(".bg"), //背景
         flag = false;  //验证失败

    //鼠标按下
    //event 对象  事件的状态 
    btn.onmousedown = function(event){
        var e = event || window.event;
        var downX = e.clientX;  //按下与x轴的点
        //移动
        btn.onmousemove = function(event){
            var moveX = event.clientX - downX;    //移入的距离-按下的距离
            //移动范围 
            if(moveX>0){
                this.style.left = moveX+'px';
                bg.style.width = moveX+'px';
                //验证成功
                if(moveX >= (box.offsetWidth-this.offsetWidth)){
                    flag = true;  //验证成功'
                    text.innerHTML = '验证成功';
                    text.style.color = '#fff';
                    btn.onmousemove = null; //清除事件
                    btn.onmousedown = null; //清除事件
                }
            }
        };
    };
    //松开
    btn.onmouseup = function(){
        btn.onmousemove = null; //清除事件
        //判断条件
        if(flag) return;
        this.style.left = 0;
        bg.style.width = 0;
    }

}