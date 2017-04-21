    //medicine service 组件
    const ms = {
        template: `<div class="medicine">
            <h3 @click="select">
                <span class="icon iconfont"
                    :class="{'icon-checked':this.flag,'icon-checkbox':!this.flag}">
                </span>
                {{serviceName}}
            </h3>
            <p class="medicine-item">
                <span class="price">
                    {{price}}
                </span>
                <span class="">
                    <span class="icon iconfont icon-minus" @click="minus"></span>
                    <span class="text-area">{{start}}</span>
                    <span class="icon iconfont icon-plus" @click="plus"></span>
                </span>
            </p>
            
        </div>`,
        data:function(){
            return {
                flag:false,
                start:1,
                cost:0
            }
        },
        props: {
            'serviceName': {
                type: String,
                require: true
            },
            'price': {
                type: Number,
                require: false
            },
            'initNum': {
                type: Number,
                require: false
            }
        },
        methods:{
            select:function(){
                this.flag = !this.flag;
                //this.$emit('test',123);
            },
            minus:function () {
                this.start--;
            },
            plus:function () {
                this.start++;
            }
        },
        mounted:function () {
            bus.$on('fromBus',function (data) {
                //console.log(data)
            });

            this.start = this.initNum;
        },
        updated:function () {

            if(this.flag){
                this.cost = this.start*this.price;
            }else{
                this.cost = 0;
            }

            bus.$emit('changed',this.cost);
        }
    };

    //hostpital service 组件  是ms组件父组件 
    const hs = {
        template: `<div class="hospital">
            <h1 class="hospital-name" @click="selectAll">
            <span class="icon iconfont" :class="cls"></span>{{hospital}}</h1>
            <medicine-service
                v-for="(i,index) in list"
                :key="index"
                :service-name="i.name"
                :price="i.price"
                :init-num="i.num"
                v-on:test="fn"
                >
            </medicine-service>
            <p class="message">订单留言 
                <span class="icon iconfont icon-forward right"></span>
            </p>
        </div>`,
        props: {
            hospital: {
                type: String,
                require: true
            },
            'list': {}
        },
        data:function () {
            return {
                selected:true
            }
        },
        computed:{
            cls:function () {
                return {'icon-radio':this.selected,'icon-radio-checked':!this.selected}
            }
        },
        methods:{
            selectAll:function () {
                this.selected = !this.selected;
                for(let i of this.$children){
                    i.flag = !this.selected
                }
            },
            fn:function (data) {
                console.log(data)
            }
        },
        components: {
            'medicine-service': ms
        },
        created:function () {

        }
    };

