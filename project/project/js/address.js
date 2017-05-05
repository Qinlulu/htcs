var roomss=document.querySelector(".roomss");
var strong= roomss.querySelector("strong span");
var str="";
var chang=false;
var cc=false;
strong.onclick=function(e){

if(!chang){
    str='<div class="slide-wrapper"><div class="header"><span class="cancel">取消</span> <span></span><span class="done">确定</span> </div>'+
        '<div class="slide-items"><ul><li>北京市</li>' +
        '<li><span东城区</span><span> 西城区</span> <span> 朝阳区</span> <span> 丰台区</span> <span>石景山区</span> <span> 海淀区</span> <span>门头沟区</span> <span> 房山区</span> <span> 通州区</span> <span> 顺义区</span> <span> 昌平区</span> <span> 大兴区</span> <span> 怀柔区</span> <span> 平谷区</span> <span<密云县</span> <span>延庆县 </span></li>' +
        '<li>天津市</li>' +
        '<li><span>和平区</span> <span>河东区</span> <span>河西区</span> <span>南开区</span> <span>河北区</span> <span>红桥区</span> <span>东丽区</span> <span>西青区</span> <span>津南区</span> <span>北辰区</span> <span>武清区</span> <span>宝坻区</span> <span>滨海新区</span> <span>宁河县</span> <span>静海县</span> <span>蓟县</span> </li>'+
        '<li>河北省</li>' +
        '<li>石家庄市</li>'+
        '<li><span>长安区</span> <span>桥东区</span> <span>桥西区</span> <span>新华区</span> <span>井陉矿区</span> <span>裕华区</span> <span>井陉县</span> <span>正定县</span> <span>栾城县</span> <span>行唐县</span> <span>灵寿县</span> <span>高邑县</span> <span>深泽县</span> <span>赞皇县</span> <span>无极县</span> <span>平山县</span> <span>元氏县</span> <span>赵县</span> </li>'+
        '<li>唐山市</li>'+
        '<li><span>辛集市</span> <span>藁城市</span> <span>晋州市</span> <span>新乐市</span> <span>鹿泉市</span> <span>市辖区</span> <span>路南区</span> <span>路北区</span> <span>古冶区</span> <span>开平区</span> <span>丰南区</span> <span>丰润区</span> <span>曹妃甸区</span> <span>滦县</span> <span>滦南县</span> <span>乐亭县</span> <span>迁西县</span> <span>玉田县</span></li>'+
        '<li>秦皇岛市</li><li>邯郸市</li><li>山西省</li> <li>内蒙古自治区</li> <li>辽宁省</li> <li>吉林省</li> <li>黑龙江省</li> <li>上海市</li> <li>江苏省</li> <li>浙江省</li> <li>安徽省</li> <li>福建省</li> <li>江西省</li> <li>山东省</li> <li>河南省</li> <li>湖北省</li> <li>湖南省</li> <li>广东省</li> <li>广西壮族自治区</li> <li>海南省</li> <li>重庆市</li> <li>四川省</li> <li>贵州省</li> <li>云南省</li> <li>西藏自治区</li> <li>陕西省</li> <li>甘肃省</li> <li>青海省</li> <li>宁夏回族自治区</li> <li>新疆维吾尔自治区</li> <li>台湾省</li> <li>香港特别行政区</li> <li>澳门特别行政区</li>'+
    '</ul></div></div>'

    var slideContainer = document.createElement('div');
    var slideWrapper = document.createElement('div');
    slideContainer.className = 'slide-selector';
    slideWrapper.innerHTML=str

    document.body.appendChild(slideContainer);
    slideContainer.appendChild(slideWrapper)
}else{
    show()
}
    slideContainer.addEventListener("click",function(e){
        var list=document.querySelectorAll("li")
        var cont="";
        if(e.target.tagName == 'LI'){
            for(var i=0; i<list.length;i++){
                list[i].classList.remove('slide-selected');
            }
            e.target.classList.add('slide-selected');
            cc=true;
        }

        if(e.target.classList.contains("cancel")){
            hide()
        }
        if(e.target.classList.contains("done")){
            if(cc){
                strong.innerHTML=document.querySelector(".slide-selected").innerHTML
            }
            hide()
        }


    },false)

    function show(){
        var slideContainer=document.querySelector(".slide-selector")
        slideContainer.style.display="block"
    }
    function hide(){
        chang=true
        slideContainer.style.display="none"
    }



}

/*         '<li>邯山区
 丛台区
 复兴区
 峰峰矿区
 邯郸县
 临漳县
 成安县
 大名县
 涉县
 磁县
 肥乡县
 永年县
 邱县
 鸡泽县
 广平县
 馆陶县
 魏县
 曲周县
 邢台市
 武安市
 市辖区
 桥东区
 桥西区
 邢台县
 临城县
 内丘县
 柏乡县
 隆尧县
 任县
 南和县
 宁晋县
 巨鹿县
 新河县
 广宗县
 平乡县
 威县
 清河县
 临西县
 保定市
 南宫市
 沙河市
 市辖区
 新市区
 北市区
 南市区
 满城县
 清苑县
 涞水县
 阜平县
 徐水县
 定兴县
 唐县
 高阳县
 容城县
 涞源县
 望都县
 安新县
 易县
 曲阳县
 蠡县
 顺平县
 博野县
 雄县*/
/* </li>'+*/

