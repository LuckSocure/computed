<template>
  <div class="edu">
    <ul class="left">
      <router-link tag="li" to="/study/education/ment">全人发展计划</router-link>
      <router-link tag="li" to="/study/education/sumup">综合素质课</router-link>
      <router-link tag="li" to="/study/education/mechanism">全员育人长效机制</router-link>
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
.edu {
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