<template>
  <div class="yuchu">
    <ul class="left">
      <router-link tag="li" to="/study/yuchuang/training">创新创业实训室</router-link>
      <router-link tag="li" to="/study/yuchuang/pioneer">创业教育</router-link>
    </ul>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.yuchu {
  width: 1170px;
  margin: 0px auto;
}
.left {
  float: left;
  display: inline-block;
  width: 25%;
  margin-top: 20px;
  box-sizing: border-box;
  cursor: pointer;
}
.right {
  float: left;
  display: inline-block;
  width: 75%;
  margin-top: 20px;
  box-sizing: border-box;
}
.left li {
  list-style: none;
  padding: 5px 0px;
  width: 80%;
  border-bottom: 1px solid #eeeeee;
  text-align: center;
  line-height: 30px;
  color: #7b7b7b;
  font-size: 16px;
}
.left li:hover {
  color: #b5b5b5;
}
</style>