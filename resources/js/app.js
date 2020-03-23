
import moment from "moment";
import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";
import StarRating from "./shared/components/StarRating";
import FatalError from "./shared/components/FatalError";
import ValidationErrors from "./shared/components/ValidationErrors";
import Success from "./shared/components/Success";

require('./bootstrap');

window.Vue = require('vue');

// Vue.component(
// 	'example-component', 
// 	require('./components/ExampleComponent.vue').default
// );
Vue.component('star-rating', StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);

Vue.use(VueRouter);
Vue.filter("fromNow", value => moment(value).locale("ru").fromNow());

const app = new Vue({
	el: '#app',
	router,
	components: {
		"Index": Index
	}
});
