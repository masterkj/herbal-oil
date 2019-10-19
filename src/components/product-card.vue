<template>
  <div class="card mb-4">
    <div class="overlay">
      <img
        class="card-img-top"
        :src="product.image"
      >
      <div class="overlay overlay-transparent d-flex justify-content-center align-items-center">
        <div class="squeare-container">
          <a href="#">
            <span class="icon icon-link center-y"></span>
          </a>
        </div>
      </div>
    </div>
    <div class="card-title mb-1">
      <p class="text-secondary mb-0">{{product.name}}</p>
      <h3 class="text-secondary">{{product.price}}$</h3>
    </div>
    <div class="row d-flex align-items-center justify-content-center">
      <button class="btn btn-light mt-0 mb-4">show product</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
</style>