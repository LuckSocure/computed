<template>
  <div id="app">
    <computed-head />
    <router-view />
    <computed-foot />
  </div>
</template>

<script>
import computedHead from './components/computedHead';
import computedFoot from './components/computedFoot';

export default {
  name: 'App',
  components: {
    computedHead,
    computedFoot
  }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
</style>
