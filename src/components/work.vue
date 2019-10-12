<template>
  <div>
    <div class="overlay mb-3">
      <img
        class="image"
        :src="`/images/${work.image}`"
      >
      <div class="overlay d-flex justify-content-center align-items-center ">
        <div class="rounded-container rounded-container-trans">
          <a href="#">
            <span :class="`icon icon-attachment center-y`"></span>
          </a>
        </div>
      </div>
    </div>
    <div class="item-description">
      <h4 class="item-desctiption__title align-center playfair"><b>{{work.title}}</b></h4>
      <span class="line-divider"></span>
      <p>{{work.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
</style>