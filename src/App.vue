<template>
  <router-view id="app"/>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log(process.env.NODE_ENV)
  }
}
</script>

<style>
#app {}
</style>
