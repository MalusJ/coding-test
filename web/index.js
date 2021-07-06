import Vue from 'vue';
import { Icon } from 'ant-design-vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Icon);

new Vue({
  render: (h) => h(App),
}).$mount('#root');
