//公共header组件
Vue.component('comp-header',{
    template:`<div class="header">
            <span class="icon iconfont icon-back back" v-on:click="back"></span>
            <h2 class="title">{{title}}</h2>
        </div>`,
    data:function () {
        return {}
    },
    props:{
        title:{
            type:String,
            require:true
        }
    },
    methods:{
        back:function () {
            window.history.go(-1)
        }
    }
});

