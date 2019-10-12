<template>
  <div class="p-4 pt-5 text-center">
    <div class="rounded-container">
      <span :class="`icon ${fact.icon} center-y`"></span>
    </div>
    <div class="item-description">
      <h4 class="item-desctiption__title align-center playfair">{{fact.title}}</h4>
      <span class="line-divider"></span>
      <p>{{fact.text}}</p>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    fact: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
</style>