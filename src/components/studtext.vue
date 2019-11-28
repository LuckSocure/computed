<template>
  <div class="text">
    <p>{{title}}</p>
    <img v-for="(src,index) in imgSrc" :key="index" :src="src" alt />
  </div>
</template>

<script>
export default {
  props: {
    title: {
        type: String
    },
    imgSrc: {
        type: Array
    }
  }
};
</script>

<style scoped>
.text{
    width: 100%;
    text-align: center;
}
.text p{
    font-size: 20px;
    font-weight: 500;
}
</style>