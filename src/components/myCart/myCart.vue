<template>
    <div>
      <topBar></topBar>
     <!-- <div class="wrap-top-bar">
        <div class="header">
          <div class="bar">
            <a href=""></a>
            <span class="cart-text">购物车</span>
            <div class="block">
              <a href=""></a>
            </div>
            <span class="top-bar-right"></span>
          </div>
        </div>
        <div class="header-quick">
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
      </div>-->
      <div class="cart-box">
        <div class="mycart">
          <div class="empty">
            <div class="img">
              <span class="img-cart"></span>
            </div>
            <div class="text">
              购物车是空的
            </div>
            <div class="choose">
              <a href="javascript:;">去逛逛</a>
              <a href="javascript:;">我的收藏</a>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-footer-bar">
        <div class="footer">
          <div class="about">
            <span class="cp">触屏版</span>
            <span>
              <a href="javascript:;">手机客户端</a>
            </span>
            <span>
              <a href="javascript:;">关于我们</a>
            </span>
            <span>
              <a href="javascript:;">联系我们</a>
            </span>
          </div>
          <div class="text">
            © wap.epet.com 版权：重庆易宠科技有限公司
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import topBar from "../topBar/topBar.vue"
    export default {
      components: {
        topBar
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .cart-box
    .mycart
      .empty
        background #ffffff
        padding-bottom 50px
        .img
          text-align center
          .img-cart
            display inline-block
            background url("./cart-ico.png") no-repeat 0 -160px
            background-size 105px auto
            width 100px
            height 100px
            margin 50px auto 20px

        .text
          text-align center
          color #dbdbdb
        .choose
          margin-top 15px
          text-align center
          &>a
            display inline-block
            width 100px
            height 40px
            line-height 40px
            border 1px solid #999
            border-radius 5px


  .wrap-footer-bar
    .footer
      background #fff
      margin-top 10px
      padding-bottom 36px
      .about
        padding 10px 0 5px 0
        text-align center
        font-size 14px
        .cp
          color #ff0000
        &>span
          padding-right 10px
          &>a
            color #333
      .text
        font-size 12px
        text-align center
  body
    background #f5f5f5

</style>
