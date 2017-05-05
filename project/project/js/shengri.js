
var strong= document.querySelector(".shengrilist");
var str="";
var chang=false;
var cc=false;
strong.onclick=function(e){
var str1=""
var str2=""
var str3=""

    for(var i=1880;i<2018;i++){
        str1+="<li><span>"+i+"</span></li>"
    }
    for(var i=1;i<13;i++){
        str2+="<li><span>"+i+"</span></li>"
    }
    for(var i=1;i<32;i++){
        str3+="<li><span>"+i+"</span></li>"
    }

    if(!chang){
        str='<div class="slide-wrapper"><div class="header"><span class="cancel">取消</span> <span></span><span class="done">确定</span> </div>'+
            '<div class="slide-items"><ul class="yelar">'+str1+'</ul><ul class="month">'+str2+'</ul><ul class="day">'+str3+'</ul></div></div>'

        var slideContainer = document.createElement('div');
        var slideWrapper = document.createElement('div');
        slideContainer.className = 'slide-selector';
        slideWrapper.innerHTML=str

        document.body.appendChild(slideContainer);
        slideContainer.appendChild(slideWrapper)
    }else{
        show()
    }

    $(".slide-items ul li").on("click",function(){
        $(this).addClass("slide-selected").siblings().removeClass("slide-selected")
    })
    $(".slide-wrapper .cancel").on("click",function(){
        hide()
    })
    $(".slide-wrapper .done").on("click",function(){
        if($(".slide-selected span").length<3){
            alert("请填写完整信息")
            return ;
        };
        var ss=""
        for(var i=0;i<$(".slide-selected span").length;i++){
            ss+=$(".slide-selected span").eq(i).text()+"-"
        }

        $(".shengrilist a div p").text(ss.substr(0,ss.length-1))
        hide()

    })
    /*slideContainer.addEventListener("click",function(e){
        //var list=document.querySelectorAll("li")
        var cont="";

        if(e.target.tagName == 'SPAN' && e.target.parentNode.tagName != 'DIV'){
            e.target.parentNode.classList.add('slide-selected');
            cc=true;
        }
        if(e.target.tagName == 'LI') {
            e.target.classList.add('slide-selected');
            cc=true;
        }



        if(e.target.classList.contains("cancel")){
            hide()
        }
        if(e.target.classList.contains("done")){
            if(cc){
                $(".shengrilist a div p").text(document.querySelector(".slide-selected").innerHTML)
            }
            hide()
        }


    },false)*/

    function show(){
        var slideContainer=document.querySelector(".slide-selector")
        slideContainer.style.display="block"
    }
    function hide(){
        chang=true
        var slideContainer=document.querySelector(".slide-selector")
        slideContainer.style.display="none"
    }



}