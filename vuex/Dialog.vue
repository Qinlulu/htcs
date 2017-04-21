<template>
    <div class="dialog" v-bind:class="{'hide':dialogActive}">
        <div class="dialog-box anim">
            <p>{{this.$store.state.tip}}</p>

            <p>
                <span @click="show">确定</span>
                <span @click="hide">取消</span>
            </p>
        </div>
    </div>
</template>

<script>
import { store } from '../store/store'
export default {
  name: 'dialog',
  data () {
    return {
      msg: '萨达',
      dialogActive: false
    }
  },
  methods: {
    show () {
      this.dialogActive = true
      this.$store.state.fn();
    },
    hide () {
      this.dialogActive = true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hide{
  display: none;
}
.anim{
  animation: pulse 0.3s linear;
}
@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1) translate3d(-50%,-50%,0);
    transform: scale3d(1, 1, 1) translate3d(-50%,-50%,0);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05) translate3d(-50%,-50%,0);
    transform: scale3d(1.05, 1.05, 1.05) translate3d(-50%,-50%,0);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1) translate3d(-50%,-50%,0);
    transform: scale3d(1, 1, 1) translate3d(-50%,-50%,0);
  }
}

.dialog{
  background: rgba(0,0,0,0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;top: 0;
}
.dialog-box{
  width: 80%;
  min-height: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  background: #fff;

}


</style>
