<template>
  <div class="col-md-4 mt col-sm-6 col-lg-3 mx-auto mb-5">
    <h4 class="footer__title playfair text-primary mb-4">
      <slot name="header" />
    </h4>
    <div class="footer__paragraph">
        <slot />
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>