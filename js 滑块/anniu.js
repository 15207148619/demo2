window.onload=function(){
    function $(name){
        return document.querySelector("name");
    }
      var  btn = $(".btn"), //按钮
         box = $(".box"), //盒子
         text = $(".text"), //文字
         bg = $(".bg"), //背景
         flag = false;  //验证失败

     btn.onmousedown=function(event){
             var event=event||window.event   
             var downX=e.clientX;

              btn.onmousemove=function(event){
               
                var moveX=event.clientX-downX;
                 if(moveX>0){
                    this.style.left=moveX+'px';
                    bg.style.width=moveX+'px'
                    if(moveX<=(box.clientWidth-this.clientWidth)){
                        text.innerHTML="验证成功";
                        text.style.color="#fff";
                        btn.onmousemove=null;
                         btn.onmousedown=null;
                    }
                 }
               
         }
        };
        btn.onmouseup=function(){
             btn.onmousemove=null;
            this.style.left=0;
             bg.style.width=0;
        }
   
}