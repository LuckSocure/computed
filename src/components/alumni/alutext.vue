<template>
  <div class="text">
    <p v-for="(title,index) in title" :key="index">{{title}}</p>
    <div v-for="src in imgSrc" :key="src.text">
        <img :src="src.src" alt />
        <span>{{src.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
        type: Array
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
    text-align: left;
    text-indent: 2em;
    font-size: 16px;
    line-height: 30px;
    color: #575959;
}
.text div{
    position: relative;
}
.text div:hover span{
    display: block;
}
.text img{
    margin: 10px 0px;
}
.text div span{
    display: none;
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    font-size: 14px;
    color: #eee;
    background-color: rgba(0, 0, 0, .6);
    padding: 15px;
    border-radius: 50px;
}
</style>