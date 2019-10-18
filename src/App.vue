<template>
  <div id="app">
    <computed-head></computed-head>
    <comp-content></comp-content>
    <computed-foot></computed-foot>
  </div>
</template>

<script>
import computedHead from './components/computedHead';
import compContent from './components/compContent';
import computedFoot from './components/computedFoot';

export default {
  name: 'App',
  components: {
    computedHead,
    compContent,
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
