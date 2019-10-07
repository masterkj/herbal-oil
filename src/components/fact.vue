<template>
  <div class="fact">
    <div class="icon"></div>
    <h4 class="fact__title">{{fact.title}}</h4>
    <div class="mt-0 row-div"> <b>___</b> </div>
    <div class="fact__text">{{fact.text}}</div>
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