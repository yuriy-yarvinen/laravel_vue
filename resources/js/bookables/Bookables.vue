<template>
	<div>
		<div v-if="loading">
			Data is loading...
		</div>		
		<div v-else>
			<div class="row mb-4" v-for="row in rows" :key="'row' + row">
				<div class="col-12 col-sm-4 col-md-4 d-flex align-items-stretch"
				v-for="(bookable, colum) in bookablesInRow(row)"
				:key="'row' + row + colum"
				>
					<BookableListItem
					:title='bookable.title' 
					:description='bookable.description'
					v-bind:price='100' 
					></BookableListItem>
				</div>

				<div class="col-12 col-sm-4 col-md-4"
				v-for="p in placeholderInRows(row)" :key="'placeholder' + row + p"
				></div>
			</div>
		
		</div>

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
			bookables: null,
			loading: false,
			colums: 3
		}
	},
	computed:{
		rows(){
			return this.bookables === null ? 0 : Math.ceil(this.bookables.length / this.colums);
		}
	},
	methods: {
		bookablesInRow(row) {
			return this.bookables.slice((row - 1) * this.colums, row * this.colums);
		},
		placeholderInRows(row){
			return this.colums - this.bookablesInRow(row).length;
		}
	},
	created(){
		this.loading = true;

		const p = new Promise((resolve, reject) => {
			setTimeout(() => resolve("Hello"), 3000);
			
		})
		.then(result => result)
		.catch(result => result);

		axios.get('/api/bookables').then(response => {
			this.bookables = response.data;
			this.bookables.push({title:'x', description: 'x'});
			this.loading = false;
		});
	
	},
}
</script>