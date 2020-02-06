<template>
	<div>
		<BookableListItem v-if="bookable1" :title='bookable1.title' :content='bookable1.content' v-bind:price='100'></BookableListItem>
		<BookableListItem v-if="bookable2"  :title='bookable2.title' :content='bookable2.content' v-bind:price='200'></BookableListItem>
	</div>
</template>

<script>
import BookableListItem from "./BookableListItem"
export default {
	components:{
		BookableListItem
	},
	data(){
		return {
			bookable1: null,
			bookable2: null,
		}
	},
	created(){
		setTimeout(()=>{
			this.bookable1 = {
				title: "Cheap Villa !!!",
				content: "Cheap Villa",
			};
			this.bookable2 = {
				title: "Cheap Villa2",
				content: "Cheap Villa2",
			};
		}, 2000);
	},
}
</script>