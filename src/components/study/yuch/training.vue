<template>
  <div class="train">
    <h2>创新创业实训室</h2>
    <span>计算机与信息工程系创新创业实训室简介</span>
    <p v-for="(text,index) in textList" :key="index">{{text}}</p>
    <img v-for="img in imgList" :key="img.id" :src="img.src" alt />
    <p v-for="item in textA" :key="item.id">{{item.text}}</p>
    <img v-for="src in imgA" :key="src.id" :src="src.src" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      textList: [
        "为了响应国家提倡大众创业、万众创新的号召，为社会培养更多的具有创新创业能力的人才，我系创建了创新创业工作室，同时，把物联网基础实训室和摄影摄像实训室整合起来，统一管理与开放。鼓励老师结合比赛、科研与项目，组建兴趣小组，在系部统一安排下使用创新创业工作室，为创新创业人才的培养创造良好的环境。",
        "一、创新创业工作室",
        "创新创业工作室的成立，将为学生提供一个很好的创新创业平台，激发广大学生勤奋学习，培养学生创新精神和创业意识，锻炼并增强学生科技创新能力和应用专业知识解决实际问题的能力。"
      ],
      textA: [
        { text: "二、物联网基础实训室", id: 100 },
        { text: "物联网基础实训室拥有60套RFID实验箱、10套综合实验台、5个沙盘和多套智慧实验实训系统，能满足学生开展嵌入式开发、RFID射频技术、无线传感网络、传感器与检测技术、物联网综合应用开发等专业核心课程的实验实训。", id: 101 }
      ],
      imgList: [
        {src: require("@/assets/img/cxcy_01.jpg"), id: 200},
        {src: require("@/assets/img/cxcy_02.jpg"), id: 201},
        {src: require("@/assets/img/cxcy_03.jpg"), id: 202}
      ],
      imgA: [
          {src: require('@/assets/img/wlsx_01.jpg'), id: 300},
          {src: require('@/assets/img/wlsx_02.jpg'), id: 301},
      ]
    };
  }
};
</script>

<style scoped>
.train {
  width: 100%;
  margin-left: 20px;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;
  text-align: center;
}
.train h2 {
  display: block;
  font-size: 30px;
}
.train img{
    width: 80%;
    padding-top: 10px;
}
.train span {
  display: block;
  font-size: 20px;
  font-weight: 400;
  margin: 30px 0px;
}
.train > p {
  text-indent: 2em;
  font-size: 16px;
  line-height: 30px;
  color: #575959;
  text-align: left;
}
</style>