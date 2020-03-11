
import moment from "moment";
import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";

require('./bootstrap');

window.Vue = require('vue');

// Vue.component(
// 	'example-component', 
// 	require('./components/ExampleComponent.vue').default
// );
// Vue.component(
// 	'example-component2', 
// 	require('./components/ExampleComponent2.vue').default
// );

Vue.use(VueRouter);
Vue.filter("fromNow", value => moment(value).lang("ru").fromNow());

const app = new Vue({
	el: '#app',
	router,
	components: {
		"Index": Index
	}
});
