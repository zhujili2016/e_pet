<template>
    <div>
      <div class="wrap-top-bar">
        <div class="header">
          <div class="bar">
            <a href="./homePage/navHome"></a>
            <span class="cart-text" ref="topBarText">购物车</span>
            <div class="block">
              <a href=""></a>
            </div>
            <span class="top-bar-right" @click="toggle"></span>
          </div>
        </div>
        <div class="header-quick" v-show="isShow">
          <a href="javascript:;">
            <span class="icon1"></span>
            <p>首页</p>
          </a>
          <a href="javascript:;">
            <span class="icon2"></span>
            <p>商品分类</p>
          </a>
          <a href="javascript:;">
          <span class="icon3">
            <em>0</em>
          </span>
            <p>购物车</p>
          </a>
          <a href="javascript:;">
            <span class="icon4"></span>
            <p>我的e宠</p>
          </a>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
              isShow:false
            }
        },
      methods:{
        toggle(){
            this.isShow = ! this.isShow
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrap-top-bar
    background #fff
    .header
      height 50px
      line-height 50px
      border-bottom 1px solid #f3f3f3
      .bar
        padding 0 12px
        position relative
        &>a
          background url("./personal-bico1.png") no-repeat
          background-size 9px 17px
          display block
          width 22px
          height 20px
          position absolute
          margin-top 16px
        .cart-text
          display block
          width 90%
          margin 0 auto
          text-align center
          font-size 18px
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
        .top-bar-right
          background url("./imgtk-new.png") no-repeat
          background-size 20px 20px
          display block
          width 20px
          height 20px
          position absolute
          top 12px
          right 14px


    .header-quick
      width 100%
      border-bottom 1px solid #d7d7d7
      overflow hidden
      padding 12px 0
      &>a
        display block
        float left
        width 25%
        text-align center
        .icon1
          display block
          background url("./head_icon1.png") no-repeat center
          background-size 30px 30px
          width 100%
          height 30px
        p
          font-size 14px
          color #666
        &>.icon2
          display block
          background url("./head_icon2.png") no-repeat center
          background-size 30px 30px
          width 100%
          height 30px
        &>.icon3
          display block
          background url("./head_icon4.png") no-repeat center
          background-size 30px 30px
          width 100%
          height 30px
          em
            display inline-block
            width 18px
            height 18px
            line-height 18px
            border-radius 12px
            background-color #ff0000
            color #fff
            border 2px solid #fff
            font-size 12px
            position relative
            top -6px
            left 12px
            font-style normal


        &>.icon4
          display block
          background url("./head_icon5.png") no-repeat center
          background-size 30px 30px
          width 100%
          height 30px



</style>
