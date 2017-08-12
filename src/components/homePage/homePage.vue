<template>
    <div class="homePage">
      <div class="downloadApp" v-show="OK">
        <span class="closeBtn" @click="closeDownApp">
          <img src="./closebtn_03.png" alt="">
        </span>
        <div class="appDowning">
          <a href="javascript:;">
            <img src="./appdowning.png" alt="">
          </a>
        </div>
      </div>
      <homeHeader :homePage="homePage"></homeHeader>
    </div>
</template>
<script>
  import homeHeader from "../homeHeader/homeHeader.vue";
  import axios from "axios";
    export default {
        data(){
          return {
              OK:true,
            homePage:{}
          }
        },
      created(){
        axios.get("/homePage").then(response=>{
          const result = response.data;
           console.log(result)
          if(result.code == 0){
               this.homePage = result.data;
          }

        })
      },
        methods:{
          closeDownApp(){
              this.OK = false
          }
        },
        components: {
          homeHeader,
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .homePage
    .downloadApp
      position relative
      z-index 4
      .closeBtn
        position absolute
        width 5%
        margin-right 2%
        top 20%
        left 2%
        img
          width 100%
          height 100%
          vertical-align middle
      .appDowning
        a
          display block
          width 100%
          height 55px
          img
            width 100%
            height 55px


</style>
