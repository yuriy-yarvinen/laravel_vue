<template>
  <div class="row">
    <div class="col-md-8 pb-4">
      <div class="card">
        <div class="card-body">
          <div v-if="!loading">
            <h2>{{ bookable.title }}</h2>
            <hr />
            <article>{{ bookable.description }}</article>
          </div>
          <div v-else>Loading...</div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
		<availability></availability>
	</div>
  </div>
</template>

<script>
import Availability from "./Availability";
export default {
	components:{
		Availability
	},
	data(){
		return {
			bookable: null,
      		loading: false
		}
	},
	created(){
		const bookable_id = this.$route.params.id;

		this.loading = true;

		axios.get('/api/bookables/'+bookable_id).then(response => {
			this.bookable = response.data.data;
			this.loading = false;
		});
	
	},
}
</script>