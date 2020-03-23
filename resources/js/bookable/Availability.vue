<template>
  <div>
    <h6 class="text-uppercase text-secondary font-weight-bolder">
      Check Availability
      <span v-if="noAvailability" class="text-danger">(NOT AVAILABLE)</span>
      <span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
    </h6>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="from">From</label>
        <input
			v-model="from"
          	type="text"
          	name="from"
          	class="form-control form-control-sm"
          	placeholder="Start date"
			@keyup.enter="check"
			:class="[{'is-invalid' : errorFor('from')}]"
        />
		<v-errors :errors="errorFor('from')"></v-errors>
      </div>

      <div class="form-group col-md-6">
        <label for="to">To</label>
        <input 
			v-model="to" 
			type="text" 
			name="to" 
			class="form-control form-control-sm" 
			placeholder="End date" 
			@keyup.enter="check"
			:class="[{'is-invalid' : errorFor('to')}]"
		/>
		<v-errors :errors="errorFor('from')"></v-errors>
      </div>
    </div>

    <button class="btn btn-secondary btn-block" @click="check" :disabled="loading">Check!</button>
  </div>
</template>

<script>
import { is422 } from "./../shared/utils/response";
import validationErrors from "./../shared/mixins/validationErrors";

export default {
	//v-on = @
	mixins: [validationErrors],
	props: {
    	bookableId: String
  	},
	data(){
		return{
			from: "2019-11-08",
			to: null,
			loading: false,
			status: null,
		}
	},
	methods: {
		check(){
			console.log(this.id);
			this.loading = true;
			this.errors = null;
			axios.get(`/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`).then(response =>{
				this.status = response.status;
			}).catch(error => {
				if(is422(error)){
					this.errors = error.response.data.errors;
				}

				this.status = error.response.status;
			}).then(() => {
				this.loading = false;
			});
		}
	},
	computed: {
		hasErrors(){
			return 422 === this.status && this.errors !== null;
		},
		hasAvailability(){
			return 200 === this.status;
		},
		noAvailability(){
			return 404 === this.status;
		}
	}
}
</script>

<style scoped>
label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: gray;
  font-weight: bolder;
}

.is-invalid{
	border-color: #b22222;
	/* background-image: none; */
}
</style> 