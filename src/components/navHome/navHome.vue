<template>
 <div class="scrollerWrap">
   <scroller>
     <div class="container">
       <!--轮播图-->
       <mt-swipe :auto="2000" class="swiper" v-if="homePage.datas">
         <mt-swipe-item class="swipe-item"  v-for="(swipeItem,index) in homePage.datas[0].value" :key="index">
           <a href="javascript:;">
             <img :src="swipeItem.image" alt="">
           </a>
         </mt-swipe-item>
<!--         <mt-swipe-item class="swipe-item">
           <a href="javascript:;">
             <img src="./2.png" alt="">
           </a>
         </mt-swipe-item>
         <mt-swipe-item class="swipe-item">
           <a href="javascript:;">
             <img src="./3.png" alt="">
                <mt-swipe-item class="swipe-item">
           <a href="javascript:;">
             <img src="./4.png" alt="">
           </a>
         </mt-swipe-item>
         <mt-swipe-item class="swipe-item">
           <a href="javascript:;">
             <img src="./5.png" alt="">
           </a>
         </mt-swipe-item>-->
       </mt-swipe>
       <!--一元起购-->
       <mt-swipe :auto="1000" class="swipe">
         <mt-swipe-item class="swipe">
           <a href="javascript:;">
             <img src="./6.gif" alt="">
           </a>
         </mt-swipe-item>
       </mt-swipe>
      <!-- <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide swipe-one">
             <a href="javascript:;">
               <img src="./6.gif" alt="">
             </a>
           </div>
         </div>
         &lt;!&ndash; 如果需要分页器 &ndash;&gt;
         <div class="swiper-pagination"></div>
       </div>-->
       <ul class="icons-home">
         <li class="icon-item">
           <a href="">
             <img src="./l1.png" alt="">
           </a>
         </li>
         <li class="icon-item">
           <a href="">
             <img src="./l2.png" alt="">
           </a>
         </li>
         <li class="icon-item">
           <a href="">
             <img src="./l3.png" alt="">
           </a>
         </li>
         <li class="icon-item">
           <a href="">
             <img src="./l4.png" alt="">
           </a>
         </li>
         <li class="icon-item">
           <a href="">
             <img src="./l5.png" alt="">
           </a>
         </li>
       </ul>
       <split></split>
       <!-- 每日疯抢-->
       <div class="suprise">
         <div class="suprise-tit">
           <div class="f1 timing">
             <img src="./suprice.png" alt="">
           </div>
           <div class="f1 ft13">距本场结束</div>
           <div class="f1 suprise-time"></div>
           <div class="time">
             <div class="clearfix">
              <span>
                <span class="time1-1" id="sec"></span>
                <span>:</span>
                <span class="time1-1" id="mini"></span>
                <span>:</span>
                <span class="time1-1" id="hour"></span>
              </span>
             </div>
           </div>
           <div class="more">
             <a href="">
               <img src="./more2.png" alt="">
             </a>
           </div>
         </div>
         <div class="suprise-pro">
           <div class="swiper-container">
             <div class="swiper-wrapper">
               <div class="swiper-slide">
                 <div class="pro-block">
                   <a href="javascript:;">
                     <div class="thisproimg">
                       <img src="./crazy1.jpg" alt="">
                     </div>
                     <div class="cred">
                       <span class="ft12">￥</span>
                       <span class="ft17">100</span>
                     </div>
                     <p class="sheng">省￥...</p>
                   </a>
                 </div>
               </div>
               <div class="swiper-slide">
                 <div class="pro-block">
                   <a href="javascript:;">
                     <div class="thisproimg">
                       <img src="./crazy2.jpg" alt="">
                     </div>
                     <div class="cred">
                       <span class="ft12">￥</span>
                       <span class="ft17">100</span>
                     </div>
                     <p class="sheng">省￥...</p>
                   </a>
                 </div>
               </div>
               <div class="swiper-slide">
                 <div class="pro-block">
                   <a href="javascript:;">
                     <div class="thisproimg">
                       <img src="./crazy3.jpg" alt="">
                     </div>
                     <div class="cred">
                       <span class="ft12">￥</span>
                       <span class="ft17">100</span>
                     </div>
                     <p class="sheng">省￥...</p>
                   </a>
                 </div>
               </div>
               <div class="swiper-slide">
                 <div class="pro-block">
                   <a href="javascript:;">
                     <div class="thisproimg">
                       <img src="./crazy4.jpg" alt="">
                     </div>
                     <div class="cred">
                       <span class="ft12">￥</span>
                       <span class="ft17">100</span>
                     </div>
                     <p class="sheng">省￥...</p>
                   </a>
                 </div>
               </div>
               <div class="swiper-slide">
                 <div class="pro-block">
                   <a href="javascript:;">
                     <div class="thisproimg">
                       <img src="./crazy5.jpg" alt="">
                     </div>
                     <div class="cred">
                       <span class="ft12">￥</span>
                       <span class="ft17">100</span>
                     </div>
                     <p class="sheng">省￥...</p>
                   </a>
                 </div>
               </div>
               <div class="swiper-slide">
                 <div class="pro-block">
                   <a href="javascript:;">
                     <div class="thisproimg">
                       <img src="./crazy6.jpg" alt="">
                     </div>
                     <div class="cred">
                       <span class="ft12">￥</span>
                       <span class="ft17">100</span>
                     </div>
                     <p class="sheng">省￥...</p>
                   </a>
                 </div>
               </div>
             </div>
             <!-- 如果需要分页器 -->
             <div class="swiper-pagination"></div>
           </div>
           <!--<ul class="suprise-list">
            <li class="suprise-item">
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="thisproimg">
                    <img src="./crazy1.jpg" alt="">
                  </div>
                  <div class="cred">
                    <span class="ft12">￥</span>
                    <span class="ft17">100</span>
                  </div>
                  <p class="sheng">省￥...</p>
                </a>
              </div>
            </li>
            <li class="suprise-item">
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="thisproimg">
                    <img src="./crazy2.jpg" alt="">
                  </div>
                  <div class="cred">
                    <span class="ft12">￥</span>
                    <span class="ft17">100</span>
                  </div>
                  <p  class="sheng">省￥...</p>
                </a>
              </div>
            </li>
            <li class="suprise-item">
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="thisproimg">
                    <img src="./crazy3.jpg" alt="">
                  </div>
                  <div class="cred">
                    <span class="ft12">￥</span>
                    <span class="ft17">100</span>
                  </div>
                  <p class="sheng">省￥...</p>
                </a>
              </div>
            </li>
            <li class="suprise-item">
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="thisproimg">
                    <img src="./crazy4.jpg" alt="">
                  </div>
                  <div class="cred">
                    <span class="ft12">￥</span>
                    <span class="ft17">100</span>
                  </div>
                  <p class="sheng">省￥...</p>
                </a>
              </div>
            </li>
            <li class="suprise-item">
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="thisproimg">
                    <img src="./crazy5.jpg" alt="">
                  </div>
                  <div class="cred">
                    <span class="ft12">￥</span>
                    <span class="ft17">100</span>
                  </div>
                  <p class="sheng">省￥...</p>
                </a>
              </div>
            </li>
            <li class="suprise-item">
              <div class="pro-block">
                <a href="javascript:;">
                  <div class="thisproimg">
                    <img src="./crazy6.jpg" alt="">
                  </div>
                  <div class="cred">
                    <span class="ft12">￥</span>
                    <span class="ft17">100</span>
                  </div>
                  <p class="sheng">省￥...</p>
                </a>
              </div>
            </li>
          </ul>-->
         </div>
       </div>
       <split></split>
       <!--  热门栏目-->
       <div class="hot">
         <div class="img">
           <a href="">
             <img src="./hot.jpg" alt="">
           </a>
         </div>
         <div class="divboxing">
           <div class="diving left">
             <a href="">
               <img src="./hot1.png" alt="">
             </a>
           </div>
           <div class="diving right">
             <a href="">
               <img src="./hot3.jpg" alt="">
             </a>
             <a href="">
               <img src="./hot2.jpg" alt="">
             </a>
           </div>
         </div>
       </div>
       <split></split>
       <!--潮品视频-->
       <div class="title-module">
         <div class="img">
           <img src="./fashion.png" alt="">
         </div>
         <div class="more2">
           <a href="">
             <img src="./more2.png" alt="">
           </a>
         </div>
       </div>
       <ul class="cmVideoList">
         <li>
           <a href="">
             <div class="imgBox">
               <img src="./dog-video.jpg" alt="">
               <span class="cmallPlayIcon"></span>
               <div class="cmViewBox">
                 <div class="fr">01:13</div>
               </div>
             </div>
             <div class="flex">
               <div class="flex">
                 <div class="text">神奇饮水除口臭 <font color="#ff0000">#猫咪保健</font></div>
               </div>
               <div class="icon" >
                 <span class="cmallViewIcon"></span>
                 <i>16042</i>
               </div>
             </div>
           </a>
         </li>
       </ul>
       <split></split>
       <!--体验馆-->
       <div class="title-module">
         <div class="img">
           <img src="./ty.png" alt="">
         </div>
         <div class="more2">
           <a href="">
             <img src="./more.png" alt="">
           </a>
         </div>
       </div>
       <!--轮播图-->
       <mt-swipe :auto="3000" class="swiper">
         <mt-swipe-item class="swipe-item">
           <a href="javascript:;">
             <img src="./ty1.jpg" alt="">
           </a>
         </mt-swipe-item>
         <mt-swipe-item class="swipe-item">
           <a href="javascript:;">
             <img src="./ty2.jpg" alt="">
           </a>
         </mt-swipe-item>
         <mt-swipe-item class="swipe-item">
           <a href="javascript:;">
             <img src="./ty3.jpg" alt="">
           </a>
         </mt-swipe-item>
       </mt-swipe>
       <split></split>
       <div class="title-module">
         <div class="img" style="border-bottom: 1px solid #999">
           <img src="./special.png" alt="">
         </div>
       </div>
       <div class="product">
         <div class="text">
           <span class="ft15">我的日期不完美</span>
           <span class="ft12">大牌临期1折起</span>
         </div>
         <div class="sole-img">
           <a href="">
             <img src="./soleimg.jpg" alt="">
           </a>
         </div>
       </div>
       <div class="product">
         <div class="text">
           <span class="ft15">蓝氏天然低敏粮</span>
           <span class="ft12">亮毛&肠道护理&免疫</span>
         </div>
         <div class="sole-img">
           <a href="">
             <img src="./lanshi.jpg" alt="">
           </a>
         </div>
       </div>
       <div class="title-black">
         <div class="title-module-black">
           <div class="img">
             <img src="./gongyi.jpg" alt="">
           </div>
           <div class="more2">
             <a href="">
               <img src="./gy.png" alt="">
             </a>
           </div>

         </div>
         <div class="img">
           <img src="./gybig.jpg" alt="">
           <div class="text">
             <p>
               <span>截止今日，TA公益已联合E宠商城和</span>
               <b class="bg">13</b>
               <span>家品牌</span>
             </p>
             <p>
               <span>累计捐赠</span>
               <b class="bgred">855,546.56</b>
               <span>元</span>
             </p>
             <p>
               <span>已合作7家公益组织，举办参与</span>
               <b class="bg">2</b>
               <span>场公益活动，助养</span>
               <b class="bg">32</b>
               <span>位老人</span>
             </p>
           </div>
         </div>
         <div class="clearfix">
           <div class="f1">
             <img src="./sponsor.jpg" alt="">
           </div>
           <div class="scroll-div">
             <div class="swiper-container">
               <div class="swiper-wrapper">
                 <div class="swiper-slide">
                   <div class="pro-block">
                     <a href="javascript:;">
                       <div class="thisproimg">
                         <img src="./epet_brand_logo.png" alt="">
                       </div>
                       <div class="cred">
                         已捐助￥33852.45
                       </div>
                     </a>
                   </div>
                 </div>
                 <div class="swiper-slide">
                   <div class="pro-block">
                     <a href="javascript:;">
                       <div class="thisproimg">
                         <img src="./epet_brand_logo2.jpg" alt="">
                       </div>
                       <div class="cred">
                         已捐助￥33852.45
                       </div>
                     </a>
                   </div>
                 </div>
                 <div class="swiper-slide">
                   <div class="pro-block">
                     <a href="javascript:;">
                       <div class="thisproimg">
                         <img src="./epet_brand_logo3.jpg" alt="">
                       </div>
                       <div class="cred">
                         已捐助￥33852.45
                       </div>
                     </a>
                   </div>
                 </div>
                 <div class="swiper-slide">
                   <div class="pro-block">
                     <a href="javascript:;">
                       <div class="thisproimg">
                         <img src="./epet_brand_logo4.jpg" alt="">
                       </div>
                       <div class="cred">
                         已捐助￥33852.45
                       </div>
                     </a>
                   </div>
                 </div>
                 <div class="swiper-slide">
                   <div class="pro-block">
                     <a href="javascript:;">
                       <div class="thisproimg">
                         <img src="./epet_brand_logo5.jpg" alt="">
                       </div>
                       <div class="cred">
                         已捐助￥33852.45
                       </div>
                     </a>
                   </div>
                 </div>
               </div>
               <!-- 如果需要分页器 -->
               <div class="swiper-pagination"></div>
             </div>

           </div>
         </div>
       </div>
       <split></split>
       <div class="title-black">
         <div class="title-module-black">
           <div class="img">
             <img src="./commont.png" alt="">
           </div>
           <div class="right-text">
             <a href="">
               好评率99.64%
             </a>
           </div>

         </div>
       </div>
       <div class="brands">
         <ul class="clearfix">
           <li class="f-item">
             <a href="">
               <div class="band-item">
                 <div class="img">
                   <div class="thisproimg">
                     <img src="./cats.jpg" alt="">
                   </div>
                   <div class="join">加入E宠两年0月</div>
                 </div>
                 <div class="clearfix">
                   <span class="left">红*****w</span>
                   <span class="right">中华田园猫</span>
                 </div>
                 <div class="text">
                   包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，
                   最主要的还是正品保证，买得放心吃的安心
                 </div>
               </div>
             </a>
           </li>
           <li class="f-item">
             <a href="">
               <div class="band-item">
                 <div class="img">
                   <div class="thisproimg">
                     <img src="./cats.jpg" alt="">
                   </div>
                   <div class="join">加入E宠两年0月</div>
                 </div>
                 <div class="clearfix">
                   <span class="left">红*****w</span>
                   <span class="right">中华田园猫</span>
                 </div>
                 <div class="text">
                   包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，
                   最主要的还是正品保证，买得放心吃的安心
                 </div>
               </div>
             </a>
           </li>
           <li class="f-item">
             <a href="">
               <div class="band-item">
                 <div class="img">
                   <div class="thisproimg">
                     <img src="./cats.jpg" alt="">
                   </div>
                   <div class="join">加入E宠两年0月</div>
                 </div>
                 <div class="clearfix">
                   <span class="left">红*****w</span>
                   <span class="right">中华田园猫</span>
                 </div>
                 <div class="text">
                   包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，
                   最主要的还是正品保证，买得放心吃的安心
                 </div>
               </div>
             </a>
           </li>
           <li class="f-item">
             <a href="">
               <div class="band-item">
                 <div class="img">
                   <div class="thisproimg">
                     <img src="./cats.jpg" alt="">
                   </div>
                   <div class="join">加入E宠两年0月</div>
                 </div>
                 <div class="clearfix">
                   <span class="left">红*****w</span>
                   <span class="right">中华田园猫</span>
                 </div>
                 <div class="text">
                   包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，
                   最主要的还是正品保证，买得放心吃的安心
                 </div>
               </div>
             </a>
           </li>
         </ul>
       </div>
       <split></split>
     </div>
   </scroller>
 </div>



</template>
<script>
  import split from "../split/split.vue";
    export default {
      props:["homePage"],
        mounted (){
          new Swiper('.swiper-container', {
            direction: 'horizontal',// 水平方向
            spaceBetween: 10, // 图片中间间隔
            freeMode: true, // Free 模式 / 不自动贴合(09)
            initialSlide: 0,  // 设定初始化时slide的索引
            slidesPerView: 3.5,  // 设置slider容器能够同时显示的slides数量(carousel模式)。 可以设置为数字
          })

        },
      created(){
        this.$nextTick(() => {
          var d = Date.UTC(2030, 6, 27, 16, 34);
          var obj = {
            sec: document.getElementById("hour"),
            mini: document.getElementById("mini"),
            hour: document.getElementById("sec")
          }
          this.fnTimeCountDown(d, obj);
        })
      },
      methods:{
        fnTimeCountDown (d, o){
          var f = {
            zero: function(n){
              var n = parseInt(n, 10);
              if(n > 0){
                if(n <= 9){
                  n = "0" + n;
                }
                return String(n);
              }else{
                return "00";
              }
            },
            dv: function(){
              d = d || Date.UTC(2050, 0, 1); //如果未定义时间，则我们设定倒计时日期是2050年1月1日
              var future = new Date(d), now = new Date();
              //现在将来秒差值
              var dur = Math.round((future.getTime() - now.getTime()) / 1000) + future.getTimezoneOffset() * 60, pms = {
                sec: "00",
                mini: "00",
                hour: "00",
                day: "00",
                month: "00",
                year: "0"
              };
              if(dur > 0){
                pms.sec = f.zero(dur % 60);
                pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";
                pms.hour = Math.floor((dur / 3600)) > 0? f.zero(Math.floor((dur / 3600)) % 24) : "00";
                pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400)) % 30) : "00";
                //月份，以实际平均每月秒数计算
                pms.month = Math.floor((dur / 2629744)) > 0? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
                //年份，按按回归年365天5时48分46秒算
                pms.year = Math.floor((dur / 31556926)) > 0? Math.floor((dur / 31556926)) : "0";
              }
              return pms;
            },
            ui: function(){
              if(o.sec){
                o.sec.innerHTML = f.dv().sec;
              }
              if(o.mini){
                o.mini.innerHTML = f.dv().mini;
              }
              if(o.hour){
                o.hour.innerHTML = f.dv().hour;
              }
              if(o.day){
                o.day.innerHTML = f.dv().day;
              }
              if(o.month){
                o.month.innerHTML = f.dv().month;
              }
              if(o.year){
                o.year.innerHTML = f.dv().year;
              }
              setTimeout(f.ui, 1000);
            }
          };
          f.ui();
        }
      },
      components: {
          split
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .scrollerWrap
    width 100%
    position absolute
    top 142px
    bottom 0
    left 0
    overflow hidden
    .container
      width 100%
      padding-bottom 45px
      .swiper
        width 100%
        height 160px
        .swipe-item
          height 160px !important
          img
            width 100%
            height 160px
      .swipe
        height 120px
        .swipe
          height 120px !important
          img
            width 100%
            height 120px
   /*   .swiper-container
        .swipe-one
          img
            width 100%
            height 120px
*/
      .icons-home
        width 100%
        &:after
          content ""
          display table
          clear both
        .icon-item
          float left
          width 20%
          img
            width 100%
      .suprise
        .suprise-tit
          position relative
          padding 10px
          height 44px
          &:after
            content ""
            display table
            clear both
          .f1
            float left
            &.timing
              img
                height 24px
                margin-left -20px
            &.ft13
              font-size 13px
              margin-left 10px
              margin-right 5px
              margin-top 1px
          .time
            .clearfix
              .time1-1
                padding 1px 2px
                border 1px solid #ddd
                font-size 13px
          .more
            position absolute
            top 2px
            right -8px
            a
              img
                display block
                width 50%
                margin 0 5px 0 auto


        .suprise-pro
          padding-left 5px
          margin-bottom 10px
          &:after
            content ""
            display table
            clear both
          .swiper-container
            .pro-block
              margin 0 .5em
              .thisproimg
                background: url("./default-epet.png") no-repeat center
                background-size 120px auto;
                padding-top 100%
                position relative
                img
                  width 100%
                  position absolute
                  top 0
                  left 0
              .cred
                color red
                margin-top 5px
                text-align center
                .ft12
                  font-size 12px
              .sheng
                text-align center
                font-size 12px
                color #999

         /* .suprise-list
            float left
            width 180%
            display flex
            white-space nowrap
            &:after
              content ""
              display table
              clear both
            .suprise-item
              width 30%
              float left
              .pro-block
                margin 0 .5em
                &>a
                  display block
                  .thisproimg
                    background: url("./default-epet.png") no-repeat center
                    background-size 120px auto;
                    padding-top 100%
                    position relative
                    img
                      width 100%
                      position absolute
                      top 0
                      left 0
                  .cred
                    color red
                    margin-top 5px
                    text-align center
                    .ft12
                      font-size 12px
                  .sheng
                    text-align center
                    font-size 12px
                    color #999
  */
      .hot
        width 100%
        font-size 0
        .img
          text-align center
          border-bottom 1px solid #ddd
          &>a
            img
              display block
              vertical-align middle
              width 100%
        .divboxing
          width 100%
          display flex
          .left
            flex-grow 6
            img
              width 100%
          .right
            flex-grow 8
            display flex
            flex-direction column
            img
              width 100%
      .title-module
        position relative
        width 100%
        padding-top 10px
        margin-bottom 5px
        .img
          text-align center
          img
            display block
            max-width 50%
            margin 0 auto
        .more2
          position absolute
          top 15px
          right 0
          a
            img
              display block
              width 50%
              margin 0 5px 0 auto
      .cmVideoList
        li
          width 100%
          a
            display block
            .imgBox
              position relative
              padding-top 40%
              background url("./default-epet.png") no-repeat center #f4f4f4
              background-size 120px auto
              overflow hidden !important
              img
                position absolute
                top 0
                left 0
                width 100%
              .cmallPlayIcon
                background url("./play.png") no-repeat  0 0
                background-size contain
                width 20px
                height 20px
                position absolute
                left 50%
                top 50%
                margin-left -10px
                margin-top -10px
                z-index 5
              .cmViewBox
                position absolute
                top 0
                left 0
                width 100%
                font-size 12px
                color #fff
                padding-right 5px
                padding-top 5px
                .fr
                  float right
                  margin-right 5px
            .flex
              display flex
              color #333
              .flex
                flex-grow 4
                font-size 12px
                padding 10px 15px
              .icon
                flex-grow 1
                text-align center
                padding-top 4px
                .cmallViewIcon
                  display inline-block
                  width 10px
                  height 9px
                  background-image url("./view-black.png")
                  margin-right 3px
                  background-size contain
                i
                  font-size 12px
                  font-style normal
      .product
        .text
          padding 10px
          .ft15
            font-size 15px
          .ft12
            font-size 12px
            margin-left 10px
            color #999
        .sole-img
          overflow hidden !important
          img
            display block
            width 100%
      .title-black
        .title-module-black
          position relative
          width 100%
          .img
            text-align center
            img
              display block
              max-width 50%
              margin 0 auto
          .more2
            position absolute
            top 10px
            right 0
            a
              img
                display block
                width 75px
                margin 10px 5px 0 auto



        .img
          position relative
          img
            display block
            width 100%
            vertical-align middle
          .text
            position absolute
            top 20%
            left 0
            width 100%
            color #fff
            font-weight 700
            font-size 14px
            text-align center
            p
              margin-top 5px
              line-height 1.6
              span
                font-weight 700
              .bg
                border-radius 4px
                background-color #fff
                color red
                padding 0 5px
                margin 0 5px
                font-weight 700
              .bgred
                color red
                font-weight 700


        .right-text
          position absolute
          top 20px
          right -4px
          background url("./icon.png") no-repeat right
          background-size 8px 9px
          padding-right 10px
          transform scale(0.84)
          font-size 12px
          a
            color #999
        .clearfix
          overflow hidden
          padding-left 10px
          .f1
            width 60px
            padding-top 10px
            float left
            img
              display block
              width 90%
              margin-top 10px
          .scroll-div
            margin-left 70px
            padding 5px 0 0 5px
            border-left 1px solid #e7e7e7
            .swiper-container
              width 100%
              height 100%
              margin 0 auto
              overflow hidden
              position relative
              z-index 1
              .swiper-wrapper
                width 100%
                height 100%
                position relative
                z-index 1
                .swiper-slide
                  margin-right 10px
                  border-right 1px solid #e7e7e7
                  position relative
                  text-align center
                  a
                    display block
                    margin-right 10px
                    color #333
                    .thisproimg
                      background: url("./default-epet.png") no-repeat center #f4f4f4
                      background-size 120px auto;
                      position relative
                      img
                        display block
                        width 100%
                        height 40px
                        margin-top 5px
                    .cred
                      border-top 1px solid #e7e7e7
                      margin-top 5px
                      padding 3px 0
                      text-overflow ellipsis
                      white-space nowrap
                      overflow hidden
                      font-size 12px
      .brands
        padding 0 10px 10px 0
        .clearfix
          overflow hidden
          .f-item
            width 50%
            float left
            .band-item
              background f5f5f5
              padding-bottom 15px
              margin 10px 0 0 10px
              .img
                height 150px
                overflow hidden
                position relative
                .thisproimg
                  background url("./default-epet.png") no-repeat center
                  background-size 120px auto;
                  padding-top 100%
                  position relative
                  img
                    display block
                    width 100%
                    position absolute
                    top 0
                    left 0
                .join
                  width 100%
                  position absolute
                  left 0
                  bottom 0
                  border-bottom 0
                  background-color rgba(0,0,0,.4)
                  color #fff
                  font-size 12px
                  text-align center
                  text-overflow ellipsis
                  white-space nowrap
                  overflow hidden
              .clearfix
                overflow hidden
                font-size 12px
                padding 5px 0
                margin-top 5px
                .left
                  float left
                .right
                  float right
                  background #ddd
                  border-radius 5px
                  padding 0 5px
              .text
                height 60px
                overflow hidden
                font-size 13px
                padding 0 5px
                margin-top 5px
                line-height 1.6
  body
    background-color: #fff;
</style>
