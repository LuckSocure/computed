<template>
  <div class="alumni">
    <div class="content-left">
      <alumni-list></alumni-list>
    </div>
    <div class="content-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import alumniList from './alumniList';

export default {
  components: {
    alumniList
  }
};
</script>

<style scoped>
.alumni {
  width: 1170px;
  margin: 0px auto;
}
.content-left{
  display: inline-block;
  float: left;
  width: 34%;
}
.content-right{
  width: 65%;
  display: inline-block;
  float: left;
}
</style>