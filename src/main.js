import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from "axios";
import VueAxios from 'vue-axios'
axios.defaults.baseURL = ''
// axios.defaults.headers.get["Content-type"]="application/json";
axios.interceptors.request.use(
    config => {

        config.headers.common['Access-Control-Allow-Origin'] ='*' ;
        config.headers.common['Access-Control-Allow-Method'] ='GET,POST' ;
        return config}

)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
}).$mount('#app')
