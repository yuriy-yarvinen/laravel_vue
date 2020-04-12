import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables.vue";
import Bookable from "./bookable/Bookable.vue";
import Basket from "./basket/Basket";
import Review from "./review/Review.vue";

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
	{
		path: '/review/:id',
		component: Review,
		name: 'review',
	},
	{
		path: "/basket",
		component: Basket,
		name: "basket"
	},
	{
		path: "/auth/login",
		component: require("./auth/Login").default,
		name: "login"
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',// remove hash
});

export default router;