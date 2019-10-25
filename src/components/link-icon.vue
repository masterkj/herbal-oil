<template>
  <a
    href="#"
    class="mr-3"
  >
    <div class="rounded-container text-center rounded-container-sm bg-primary">
      <span :class="`icon icon-${icon} bg-secondary center-y`"></span>
    </div>
  </a>
</template>

<script>
export default {
    props: {
        icon: String,
    }
}
</script>

<style>
</style>