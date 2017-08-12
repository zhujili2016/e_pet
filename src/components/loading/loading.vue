<template>
    <div class="loading" v-show="loadingShow" >
      <topBar ref="topBar"></topBar>
      <div class="toLogin">
        <div class="img">
          <img src="./tanhao.png" alt="">
        </div>
        <p class="check">验证登陆中…</p>
        <p class="handle">如果没有自动跳转，请手动点击！</p>
        <div class="jump" @click="toLogin">
          <router-link to="/myEPet/login">立即跳转</router-link>
        </div>
      </div>
    </div>
</template>
<script>
  import topBar from "../topBar/topBar.vue"
    export default {
      data(){
          return {
            loadingShow:true
          }
      },
      mounted(){
        this.$refs.topBar.$refs.topBarText.innerHTML = "提示信息"
      },
      methods: {
        toLogin(){
            this.loadingShow = false;
        }
      },
      components: {
          topBar
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .loading
    .toLogin
      .img
        text-align center
        padding 60px 0 10px
        img
          width 100px
          height 100px
      .check
        text-align center
        height 60px
        line-height 60px
      .handle
        color #999
        height 40px
        line-height 40px
        text-align center
      .jump
        text-align center
        a
          display inline-block
          border 1px solid #999
          border-radius 10px
          width 100px
          height 40px
          line-height 40px
          text-align center


</style>
