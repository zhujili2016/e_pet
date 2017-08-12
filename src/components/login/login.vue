<template>
    <div>
      <router-view></router-view>
      <div class="login" v-show="loginShow">
        <div class="header">
          <div class="login-bg">
            <div class="header-top">
              <a href="./" ></a>
              <div class="register">
                <span @click="toRegist">
                  <router-link to="/myEPet/login/regist">注册</router-link>
                </span>
              </div>
            </div>
            <div class="elogo">
              <img src="./logo.png" alt="">
            </div>
            <div class="login-in">
              <ul class="login-list">
                <li class="login-item" >
                  <a href="javascript:;" @click="changeIsShow(true)">普通登录</a>
                  <i v-show="isShow"></i>
                </li>
                <li class="login-item">
                  <a href="javascript:;"  @click="changeIsShow(false)">手机动态密码登录</a>
                  <i v-show="!isShow"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="formBox">
            <div class="content">
              <form action="" v-show="isShow">
                <div class="form-login">
                  <ul class="form-list">
                    <li class="form-item">
                      <span class="name-icon"></span>
                      <input type="text" placeholder="手机号/邮箱/用户名">
                    </li>
                    <li class="form-item">
                      <span class="password-icon"></span>
                      <input type="text" placeholder="输入密码">
                    </li>
                  </ul>
                </div>
              </form>
              <form action=""  v-show="!isShow">
                <div class="form-login">
                  <ul class="form-list">
                    <li class="form-item">
                      <span class="num-icon"></span>
                      <input type="text" placeholder="已注册的手机号">
                    </li>
                    <li class="form-item">
                      <span class="password-icon"></span>
                      <input type="text" placeholder="请输入图片内容">
                      <span class="yanzhengma">
                        <img src="./yanzheng.png" alt="" class="yzm">
                      </span>
                    </li>
                    <li class="form-item">
                      <span class="password-icon"></span>
                      <input type="text" placeholder="动态密码">
                      <a href="javascript:;" class="dongtai">获取动态密码</a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div class="forget">
            <a href="javascript:;">忘记密码?</a>
          </div>
          <div class="picture-yz"></div>
          <div class="login-btn">
            <a href="javascript:;">登 录</a>
          </div>
          <div class="space"></div>
          <div class="other-login">
            <div class="partners">
              <b>合作网站登录</b>
            </div>
            <ul class="part-list">
              <li class="part-item">
                <a href="javascript:;">
                  <img src="./login_ico4.png" alt="">
                </a>
              </li>
              <li class="part-item">
                <a href="javascript:;">
                  <img src="./login_ico2.png" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
    export default {
        data(){
          return{
                isShow:true,
                loginShow:true
            }
        },
      methods:{
        changeIsShow(isShow){
            this.isShow = isShow
        },
        toRegist(){


          this.loginShow = !this.loginShow;
          console.log("toRegist()")
          console.log(this.loginShow)
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login
    .header
      .login-bg
        background url("./bg.png") no-repeat
        background-size 100% 100%
        .header-top
          position relative
          height 50px
          line-height 50px
          padding 0 12px
          text-align center
          &>a
            background url("./personal-bico3.png") no-repeat
            background-size 12px 17px
            display block
            width 22px
            height 20px
            position absolute
            margin-top 18px
          .register
            position absolute
            top 0
            right 12px
            &>span
              &>a
               color #fff

        .elogo
          padding 12px 0 24px 0
          img
            display block
            width 20%
            margin 0 auto
        .login-in
          background-color rgba(255,255,255,.3)
          .login-list
            overflow hidden
            .login-item
              position relative
              width 50%
              float left
              height 44px
              line-height 44px
              text-align center
              &>a
                display block
                font-size 15px
                color #fff
              i
                display block
                width 0
                height 0
                margin 0 auto
                position absolute
                bottom 0
                left 0
                right 0
                border-width 10px
                border-style dotted solid solid solid
                border-color transparent transparent #fff transparent





    .container
      background #fff
      .formBox
        background #fff
        margin  0 4% 10px 4%
        padding 0 1.6%
        line-height 20px
       .content
        .form-login
          .form-list
            .form-item
              position relative
              border-bottom 1px solid #e2e2e2
              padding 14px 0 14px 30px
              input::-webkit-input-placeholder
                color #666666
                opacity .3
              .name-icon
                background url("./ico3.png") no-repeat
                background-size contain
                float left
                width 17px
                height 21px
                margin 1px 0 0 -25px
              &>.password-icon
                background url("./ico4.png") no-repeat
                background-size contain
                float left
                width 17px
                height 21px
                margin 1px 0 0 -25px
              &>.yanzhengma
                position absolute
                top 5px
                right 68px
              &>.dongtai
                position absolute
                width 100px
                top 6px
                right 0
                background #fff
                border 1px solid #eb4c33
                color #ff4259
                border-radius 3px
                padding 4px 0
                text-align center
                font-size 12px

              &>.num-icon
                background url("./ico1.png") no-repeat
                background-size contain
                float left
                width 17px
                height 21px
                margin 1px 0 0 -25px
              input
                border none
                outline none
                display block
                height 21px
                width 100%
                font-size 15px
                padding 0
                font-family "Microsoft Yahei,tahoma,arial"
                color #666
      .forget
        overflow hidden
        padding 0 24px
        text-align center
        &>a
          float right
          font-size 14px
      .login-btn
        padding-top 6px
        text-align center
        &>a
          display block
          letter-spacing 5px
          border-radius 5px
          background #2ec975
          font-size 16px
          padding 7px 0
          text-align center
          margin 0 4%
          color #fff

      .space
        height 120px
      .other-login
        .partners
          color #d7d7d7
          margin-top 6px
          font-size 16px
          text-align center
          b
            font-weight 400
        .part-list
          padding 18px 0
          overflow hidden
          .part-item
            float left
            padding 0 14px
            &>a
              display block
              &>img
                display block
                width 60%
                height auto
                margin 0 auto
                max-width 176px

  body
    background #fff


</style>
