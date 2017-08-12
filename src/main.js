import Vue from "vue";
import { Swipe, SwipeItem ,Navbar, TabItem,TabContainer,TabContainerItem,Cell} from 'mint-ui';
import VueScroller from 'vue-scroller';


import App from "./App.vue";
import router from "./router";

import "./mock/mockServer";

Vue.use(VueScroller);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);



new Vue({
  el:"#app",
  render:h=>h(App),
  router
});
