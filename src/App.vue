<template>
    <div>
      <router-view></router-view>
      <div class="tab">
        <div class="tab-item home">
          <router-link to="/homePage">
          </router-link>
        </div>
        <div class="tab-item type">
          <router-link to="/category">
          </router-link>
        </div>
        <div class="tab-item cart">
          <router-link to="/myCart">
          </router-link>
        </div>
        <div class="tab-item myepet">
          <router-link to="/myEPet">
          </router-link>
        </div>
      </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab
    width 100%
    height 45px
    line-height 45px
    position fixed
    left 0
    bottom 0

    border-top 1px solid #e7e7e7
    background-color:#fff;
    z-index 100
    .tab-item
      float left
      width 25%
      height 100%
      &>a
        display block
        width 100%
        height 45px
      &.home
        background url("./app_img/main_tab_1.png") no-repeat center;
        background-size 40px
      &.type
        background url("./app_img/main_tab_2.png") no-repeat center;
        background-size 40px
      &.cart
        background: url("./app_img/main_tab_3.png") no-repeat center;
        background-size 40px
      &.myepet
        background: url("./app_img/main_tab_4.png") no-repeat center;
        background-size 40px





</style>
