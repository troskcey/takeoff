import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// global styles
import "./assets/styles.sass";
import "./assets/settings.sass";

// plugins
import FontAwesome from "./plugins/FontAwesome.js";

Vue.use(FontAwesome);

// layouts
import LayoutDefault from "./layouts/LayoutDefault/Index.vue";

Vue.component(LayoutDefault.name, LayoutDefault);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
