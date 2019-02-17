// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import firebaseApp from "./firebaseApp";

Vue.use(Buefy);
Vue.config.productionTip = false;
Vue.prototype.$firebase = firebaseApp;

new Vue({
  render: h => h(App)
}).$mount("#app");
