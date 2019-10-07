<template>
  <div>
    <nav-bar />
    <router-view />
    <site-footer />
  </div>
</template>

<script>
import navBar from './components/nav-bar'
import siteFooter from '@/components/site-footer'

export default {
  components: {
    navBar,
    siteFooter
  }
}
</script>

<style>
</style>
