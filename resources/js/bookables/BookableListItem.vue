<template>
  <div class="card w-100">
    <div class="card-body">
      <router-link :to="{ name: 'bookable', params: {id: id} }">
        <h5 class="card-title">{{ title }}</h5>
      </router-link>

      <div class="card-text">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    id: Number
  }
};
</script>

