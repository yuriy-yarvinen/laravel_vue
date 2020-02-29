import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables.vue";
import Bookable from "./bookable/Bookable.vue";

const routes = [
	{
		path: '/',
		component: Bookables,
		name: 'home',
	},
	{
		path: '/bookables/:id',
		component: Bookable,
		name: 'bookable',
	},

];

const router = new VueRouter({
	routes,
	mode: 'history',// remove hash
});

export default router;