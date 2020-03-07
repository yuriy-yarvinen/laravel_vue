<template>
  <div>
    <h6 class="text-uppercase text-secondary font-weight-bolder">Check Availability</h6>

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
        />
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
		/>
      </div>
    </div>

    <button class="btn btn-secondary btn-block" @click="check">Check!</button>
  </div>
</template>

<script>
export default {
	//v-on = @
	data(){
		return{
			id: 1,
			from: "2019-11-08",
			to: null,
		}
	},
	methods: {
		check(){
			console.log(this.id);
			alert('I check somthing now');
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
</style> 