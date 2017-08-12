<template>
    <div class="category">
      <header class="cg-top">
        <div class="navbar">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1"><span class="cate">分类</span></mt-tab-item>
            <mt-tab-item id="2"><span class="brand">品牌</span></mt-tab-item>
          </mt-navbar>
        </div>
        <a href="javascript:;">
          <img src="./search-ico.png" alt="">
        </a>
      </header>
      <div class="container">
        <mt-tab-container v-model="selected" class="content">
          <mt-tab-container-item id="1" class="tab-item">
            <div class="cat-items">
              <mt-navbar v-model="selected2" class="navbar-mt">
                <mt-tab-item id="1-1"><span class="cate">为您推荐</span></mt-tab-item>
                <mt-tab-item id="1-2"><span class="brand">猫咪主粮</span></mt-tab-item>
                <mt-tab-item id="1-3"><span class="cate">猫咪零食</span></mt-tab-item>
                <mt-tab-item id="1-4"><span class="brand">猫咪日用</span></mt-tab-item>
                <mt-tab-item id="1-5"><span class="brand">猫咪玩具</span></mt-tab-item>
              </mt-navbar>
            </div>
            <div class="details" ref="details">
              <mt-tab-container v-model="selected2">
                <mt-tab-container-item id="1-1">
                  <div class="detail">
                    <a href="javascript:;">热门分类</a>
                    <ul class="detail-list">
                      <li class="detail-item" >
                        <a href="javascript:;">
                          <img src="./hot1.jpg" alt="">
                          <p>体内驱虫</p>
                        </a>
                      </li>
                      <li class="detail-item" >
                        <a href="javascript:;">
                          <img src="./hot2.jpg" alt="">
                          <p>美毛化毛</p>
                        </a>
                      </li>
                      <li class="detail-item" >
                        <a href="javascript:;">
                          <img src="./hot3.jpg" alt="">
                          <p>强化免疫</p>
                        </a>
                      </li>
                      <li class="detail-item" >
                        <a href="javascript:;">
                          <img src="./hot1.jpg" alt="">
                          <p>体内驱虫</p>
                        </a>
                      </li>
                      <li class="detail-item" >
                        <a href="javascript:;">
                          <img src="./hot2.jpg" alt="">
                          <p>美毛化毛</p>
                        </a>
                      </li>
                      <li class="detail-item" >
                        <a href="javascript:;">
                          <img src="./hot3.jpg" alt="">
                          <p>强化免疫</p>
                        </a>
                      </li>
                    </ul>

                  </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="1-2">
                  <div class="detail">
                          <a href="javascript:;">猫咪主粮
                            <img src="./cate_right_img.png" alt=""></a>
                          <ul class="detail-list">
                            <li class="detail-item" >
                              <a href="javascript:;">
                                <img src="./food1.jpg" alt="">
                                <p>进口猫粮</p>
                              </a>
                            </li>
                            <li class="detail-item" >
                              <a href="javascript:;">
                                <img src="./food1.jpg" alt="">
                                <p>进口猫粮</p>
                              </a>
                            </li>
                            <li class="detail-item" >
                              <a href="javascript:;">
                                <img src="./food1.jpg" alt="">
                                <p>进口猫粮</p>
                              </a>
                            </li>
                            <li class="detail-item" >
                              <a href="javascript:;">
                                <img src="./food1.jpg" alt="">
                                <p>进口猫粮</p>
                              </a>
                            </li>
                            <li class="detail-item" >
                              <a href="javascript:;">
                                <img src="./food1.jpg" alt="">
                                <p>进口猫粮</p>
                              </a>
                            </li>
                            <li class="detail-item" >
                              <a href="javascript:;">
                                <img src="./food1.jpg" alt="">
                                <p>进口猫粮</p>
                              </a>
                            </li>
                          </ul>
                          <a href="javascript:;">热门品牌</a>
                          <ul class="brand-list">
                            <li class="brand-item" >
                              <a href="javascript:;">
                                <div class="img">
                                  <img src="./food-brand1.jpg" alt="">
                                </div>
                                <p>NOW FRESH</p>
                              </a>
                            </li>
                            <li class="brand-item" >
                              <a href="javascript:;">
                                <div class="img">
                                  <img src="./food-brand2.jpg" alt="">
                                </div>
                                <p>维彩</p>
                              </a>
                            </li>
                            <li class="brand-item" >
                              <a href="javascript:;">
                                <div class="img">
                                  <img src="./food-brand3.jpg" alt="">
                                </div>
                                <p>NOW FRESH</p>
                              </a>
                            </li>
                            <li class="brand-item" >
                              <a href="javascript:;">
                                <div class="img">
                                  <img src="./food-brand1.jpg" alt="">
                                </div>
                                <p>NOW FRESH</p>
                              </a>
                            </li>
                            <li class="brand-item" >
                              <a href="javascript:;">
                                <div class="img">
                                  <img src="./food-brand3.jpg" alt="">
                                </div>
                                <p>NOW FRESH</p>
                              </a>
                            </li>
                            <li class="brand-item" >
                              <a href="javascript:;">
                                <div class="img">
                                  <img src="./food-brand1.jpg" alt="">
                                </div>
                                <p>NOW FRESH</p>
                              </a>
                            </li>
                            <li class="brand-item" >
                              <a href="javascript:;">
                                <div class="img">
                                  <img src="./food-brand3.jpg" alt="">
                                </div>
                                <p>NOW FRESH</p>
                              </a>
                            </li>
                            <li class="brand-item" >
                              <a href="javascript:;">
                                <div class="img">
                                  <img src="./food-brand1.jpg" alt="">
                                </div>
                                <p>NOW FRESH</p>
                              </a>
                            </li>

                          </ul>
                        </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="1-3">
                  <mt-cell >1-3</mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="1-4">
                  <mt-cell>1-4</mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="1-5">
                  <mt-cell>1-5</mt-cell>
                </mt-tab-container-item>
              </mt-tab-container>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2" class="brands-cates">
            <div class="title">
              <span>-- 推荐品牌 --</span>
            </div>
            <div class="brand-cates">
              <ul class="brand-cates-list">
                <li class="brand-cates-item" >
                  <a href="javascript:;">
                    <div class="img">
                      <img src="./food-brand1.jpg" alt="">
                    </div>
                    <p>NOW FRESH</p>
                  </a>
                </li>
                <li class="brand-cates-item" >
                  <a href="javascript:;">
                    <div class="img">
                      <img src="./food-brand2.jpg" alt="">
                    </div>
                    <p>维彩</p>
                  </a>
                </li>
                <li class="brand-cates-item" >
                  <a href="javascript:;">
                    <div class="img">
                      <img src="./food-brand3.jpg" alt="">
                    </div>
                    <p>NOW FRESH</p>
                  </a>
                </li>
                <li class="brand-cates-item" >
                  <a href="javascript:;">
                    <div class="img">
                      <img src="./food-brand1.jpg" alt="">
                    </div>
                    <p>NOW FRESH</p>
                  </a>
                </li>

              </ul>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>

      </div>


    </div>
</template>
<script>
  import BScroll from "better-scroll";
  import axios from "axios";
  const OK = 0;
    export default {
        data(){
            return{
                selected:"1",
                selected2:"1-1",
              category:[]
            }
        },
        created(){
            axios.get("/category").then(response=>{
                const result = response.data;
                console.log(result)
              if(result.code==OK){
                    this.category = result.data;
                    console.log(this.category)
              }
            })
            this.$nextTick(() => {
              // 创建水平滑动的scroll
              new BScroll(this.$refs.details, {
                click: true,
                scrollY: true   // 滚动方向为竖直方向
              })

            })
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .category
    .cg-top
      z-index 10
      background #fff
      position fixed
      left 0
      top 0
      right 0
      height 40px
      padding 0 15px
      border-bottom 1px solid #cbcbcb
      &>a
        position absolute
        top 5px
        right 15px
        width 14px
        height 14px
        &>img
          width 100%
      .navbar
        width 30%
        position absolute
        left 50%
        top 50%
        margin-left -15%
        margin-top -30px
        &>.mint-navbar
          .mint-tab-item
            overflow hidden
            font-size 16px
            .cate
              float  right
              margin-right 25%
              font-weight 700
              font-size 13px
            .brand
              float left
              margin-left  25%
              font-weight 700
              font-size 13px
          .is-selected
            border-bottom  2px solid #ed4044
            color #ed4044

    .container
      .mint-tab-container
        .tab-item
          display flex
          margin-top 45px
          .cat-items
            flex 1
            background #fff
            .mint-navbar
              display block
              width 100%
              overflow hidden
              .mint-tab-item
                display block
                float left
                width 100%
                padding 15px 0
                border-bottom 1px solid #f3f4f5
                height 50px
                line-height 50px
              .is-selected
                color #ed4044
                background #f3f4f5
          .details
            height 640px
            flex 4
            background #fff
            margin  0 5px 20px 5px
            .detail
              padding 0 5px 20px 5px
              &>a
                display block
                font-size 14px
                padding 20px 10px 0 10px
                &>img
                  float right
                  height 10px
                  margin-top 5px

              .detail-list
                padding 15px 5px 40px
                overflow hidden
                border-bottom 1px solid #e2e2e2
                .detail-item
                  width 33.3%
                  float left
                  margin-top 10px
                  padding  0 5px
                  &>a
                    display inline-block
                    width 100%
                    color #333
                    img
                      width 100%
                    &>p
                      font-size 12px
                      text-align center
                      height 20px
                      line-height 20px
                      margin-top 10px
              &>.brand-list
                overflow hidden
                .brand-item
                  width 50%
                  float left
                  margin-top 10px
                  padding  0 5px
                  &>a
                    display inline-block
                    width 100%
                    color #333
                    .img
                      padding 10px
                      border 1px solid #e2e2e2
                      img
                        width 100%
                        height 45px
                    &>p
                      font-size 12px
                      text-align center
                      height 20px
                      line-height 20px
                      margin-top 10px
        .brands-cates
          margin-top 55px
          .title
            background #fff
            width 100%
            padding-top 20px
            text-align center
            span
              font-size 12px
              color #999
          &>.brand-cates
            background #fff
            .brand-cates-list
              overflow hidden
              .brand-cates-item
                width 33.3%
                float left
                margin-top 10px
                padding  0 5px
                &>a
                  display inline-block
                  width 100%
                  color #333
                  .img
                    padding 10px
                    border 1px solid #e2e2e2
                    img
                      width 100%
                      height 45px
                  &>p
                    font-size 12px
                    text-align center
                    height 20px
                    line-height 20px
                    margin-top 10px


  body
    background #f5f5f5
  *
    box-sizing border-box

</style>
