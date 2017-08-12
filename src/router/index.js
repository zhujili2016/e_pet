import Vue from "vue";
import Router from "vue-router";
import homePage from "../components/homePage/homePage.vue";
import category from "../components/category/category.vue";
import myCart from "../components/myCart/myCart.vue";
import myEPet from "../components/myEPet/myEPet.vue";


import navHome from "../components/navHome/navHome.vue";
import navCat from "../components/navCat/navCat.vue";
import navSpecial from "../components/navSpecial/navSpecial.vue";
import navMarket from "../components/navMarket/navMarket.vue";
import navFashion from "../components/navFashion/navFashion.vue";
import navClass from "../components/navClass/navClass.vue";


import login from "../components/login/login.vue";
import regist from "../components/regist/regist.vue";

Vue.use(Router);

export default new Router({
  linkActiveClass:"active",
  mode:"history",
  routes:[
    {
      path:"/homePage",
      component:homePage,
      children:[
        {
          path:"/",
          redirect:"/homePage/navHome"
        },
        {
          path:"navHome",
          component:navHome
        },
        {
          path:"navCat",
          component:navCat
        },
        {
          path:"navSpecial",
          component:navSpecial
        },
        {
          path:"navMarket",
          component:navMarket
        },
        {
          path:"navFashion",
          component:navFashion
        },
        {
          path:"navClass",
          component:navClass
        },
      ]
    },
    {
      path:"/category",
      component:category
    },
    {
      path:"/myCart",
      component:myCart
    },
    {
      path:"/myEPet",
      component:myEPet,
      children:[
        {
          path:"login",
          component:login,
          children:[
            {
              path:"regist",
              component:regist
            },
          ]
        },
       /* {
          path:"/",
          redirect:"/myEPet/loading"
        },*/
        ]
    },
    {
      path:"/",
      redirect:"/homePage"
    }
  ]
})



