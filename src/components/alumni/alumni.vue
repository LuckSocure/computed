<template>
  <div class="alumni">
    <div class="content-left">
      <with-list></with-list>
    </div>
    <div class="content-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.alumni {
  width: 1170px;
  margin: 0px auto;
}
</style>