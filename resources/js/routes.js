import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables.vue";
import ExampleComponent2 from "./components/ExampleComponent2.vue";


const routes = [
	{
		path: '/',
		component: Bookables,
		name: 'home',
	},
	{
		path: '/second',
		component: ExampleComponent2,
		name: 'second',
	}
];

const router = new VueRouter({
	routes,
	mode: 'history',// remove hash
});

export default router;