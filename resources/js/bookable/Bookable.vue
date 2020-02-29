<template>
	<div>
		<div>{{bookable.title}}</div>
		<div>{{bookable.description}}</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			bookable: null,
		}
	},
	created(){
		const bookable_id = this.$route.params.id;

		axios.get('/api/bookable/'+bookable_id).then(response => {
			this.bookable = response.data;
		});
	
	},
}
</script>