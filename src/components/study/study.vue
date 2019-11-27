<template>
  <div class="study">
    <ul class="inner-box">
      <li v-for="text in textList" :key="text.id" @click="clickDom(text.id)">{{text.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textList: [
        { text: "教学创新", id: 1 },
        { text: "育人创新", id: 2 },
        { text: "创业教育", id: 3 }
      ]
    };
  },
  methods: {
    clickDom(id) {
      switch (id) {
        case 1:
          location.hash = "/study/learning";
          break;
        case 2:
          location.hash = "/study/education";
          break;
        case 3:
          location.hash = "/study/yuchuang";
          break;
      }
    }
  }
};
</script>

<style scoped>
.study {
  width: 1170px;
  margin: 0 auto;
}
.study li {
  list-style: none;
  width: 95%;
  height: 300px;
  margin: 20px auto 0px auto;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  box-shadow: 2px 2px 6px #ccc;
  cursor: pointer;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  line-height: 300px;
  text-shadow: 1px 1px 3px #595757;
  border-radius: 50%;
}
.study li:nth-child(1) {
  background-image: url("../../assets/img/timg.jpg");
}
.study li:nth-child(2) {
  background-image: url("../../assets/img/timg1.jpg");
}
.study li:nth-child(3) {
  background-image: url("../../assets/img/time2.jpg");
}
</style>