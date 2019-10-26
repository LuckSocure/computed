<template>
  <div class="with">
    <div class="content-left">
      <with-list></with-list>
    </div>
    <div class="content-right">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import withList from './withList';
export default {
  components:{
      withList
  }
};
</script>

<style scoped>
.with {
  width: 1170px;
  margin: 20px auto 0px auto;
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