<template>
  <div class="member mt-4 text-center">
    <img
      class="member__image mb-3"
      :src="`/herbal-oil`+member.image"
    >
    <h3 class="playfair">{{member.name}}</h3>
    <div class="line-dividerv">
      <p class="text-secondary">{{member.position}}</p>
      <div class="social-links">
        <a
          href="#"
          class="mr-1"
        >
          <div class="rounded-container rounded-container-sm bg-primary">
            <span :class="`icon icon-facebook bg-black center-y`"></span>
          </div>
        </a>
        <a href="#">
          <div class="rounded-container rounded-container-sm bg-primary">
            <span :class="`icon icon-instagram bg-black center-y`"></span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
</style>