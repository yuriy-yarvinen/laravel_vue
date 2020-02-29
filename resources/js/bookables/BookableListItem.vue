<template>
	<div class="card w-100">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<div class="card-text">{{ description }}</div>
			<div class="card-subtitle">{{ price }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		'title' : String,
		'description' : String,
		'price' : Number
	}
}
</script>

