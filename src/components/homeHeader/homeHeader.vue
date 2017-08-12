<template>
  <div>
    <div class="headerBox">
      <div class="clearfix">
        <div class="epetSearch">
          <div class="location">
            <span>猫站</span><!--
            --><span class="">|</span><!--
            --><a href="javascript:;">
            <span>重庆</span>
            <i></i>
          </a>
          </div>
          <p class="searchText">
            <a href="javascript:;">
              <input type="text" placeholder="搜索商品和品牌">
              <span class="search-ico"></span>
            </a>
          </p>
          <a href="javascript:;" class="msg">
            <img src="./mydope.png" alt="">
          </a>
        </div>
      </div>
      <div class="searchNav" ref="searchNav">
        <ul class="nav">
          <li class="nav_item"><router-link to="/homePage/navHome">首页</router-link></li>
          <li class="nav_item"><router-link to="/homePage/navCat">猫粮</router-link></li>
          <li class="nav_item"><router-link to="/homePage/navSpecial">特卖</router-link></li>
          <li class="nav_item"><router-link to="/homePage/navMarket">罐头超市</router-link></li>
          <li class="nav_item"><router-link to="/homePage/navFashion">潮品视频</router-link></li>
          <li class="nav_item"><router-link to="/homePage/navClass">新喵课堂</router-link></li>
        </ul>
      </div>
    </div>
    <router-view :homePage="homePage"></router-view>

  </div>
</template>
<script>
  import BScroll from "better-scroll";
    export default {
        props:["homePage"],
      created(){
        this.$nextTick(() => {
          // 创建水平滑动的scroll
          this.navScroll = new BScroll(this.$refs.searchNav, {
            click: true,
            scrollX: true   // 滚动方向为水平方向
          })

        })
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .headerBox
    position fixed
    z-index 4
    width 100%
    background-color: #fff;
    &:after
      content ""
      display table
      clear both
    .clearfix
      width 100%
      padding 5px 10px
      .epetSearch
        width 100%
        height 25px
        line-height 25px
        background-color: #fff;
        padding 8px 0
        text-align center
        vertical-align middle
        display flex
        .location
          margin-right 20px
          text-align center
          font-size 14px
          color #666
          span
            color #333
            flex-grow 1
          a
            position relative
            color #333
            i
              position absolute
              top 4px
              right -11px
              border-width 4px
              font-size 0
              line-height 0
              border-style dotted solid solid solid
              border-color transparent transparent #666 transparent
        .searchText
          flex-grow 8
          position relative
          a
            input
              border none
              outline none
              background-color #f6f6f6
              width 100%
              height 25px
              border-radius 4px
              text-indent 10px
              font-size 13px
              color #9e9e9e
            .search-ico
              position absolute
              top 7px
              right 5px
              width 11px
              height 11px
              background url("./search.png") no-repeat center;
              background-size 11px
        .msg
          flex-grow 1
          text-align center
          img
            width 25px
            height 25px
            margin-left 10px
            margin-right 10px
            vertical-align middle
    .searchNav
      width 100%
      .nav
        width 120%;
        display flex
        &:after
          content ""
          display table
          clear both
        .nav_item
          flex 1
          text-align center
          &>a
            display inline-block
            width 100%
            height 34px
            line-height 34px
            text-align center
            font-size 14px
            color #666
          &>.active
            border-bottom 2px solid #E94E8F
            color #E94E8F




</style>
