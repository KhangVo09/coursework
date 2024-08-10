import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'semantic-ui-css/semantic.css';

Vue.config.productionTip = false;

new Vue({ // it created new vue to connect to App.vue
  router,
  render: h => h(App)
}).$mount('#app');

//this file makes everything, it includes vue, app,  router and css files
//this is the first step to make a web show up on browser 