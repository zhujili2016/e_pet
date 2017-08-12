<template>
    <div>
      <loading v-show="isShow"></loading>
      <login v-show="!isShow"></login>
    <!--  <router-link to="/myEPet/login" v-show="!isShow"></router-link>
      <router-view></router-view>-->
    </div>
</template>
<script>
  import loading from "../loading/loading.vue"
  import login from "../login/login.vue"

    export default {
     data(){
        return {
          isShow:true
        }
      },
      mounted(){
        this.isShow = true
      },
      created(){
          setTimeout(()=>{
          this.isShow = false
          },3000)
      },
      components: {
          loading,
          login
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
