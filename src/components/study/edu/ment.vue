<template>
  <div class="ment">
    <h2>育人创新之一：全人发展计划</h2>
    <p v-for="(text,index) in textList" :key="index">{{text}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textList: [
        "借鉴CDIO国际先进教育理念和港澳台的教育理念，结合高职的实际，提出高职生全人发展计划，通过开设一些特色课程培养学生的综合素质，在大一开设《职业素质拓展I》让学生快速了解大学及学习方法，完成角色的转换，在大三开设《职业素质拓展II》让学生拓展对社会的认识与各种能力，同时，整合团课，有计划培养学生各种素质，组织学生参加各级各类比赛，透过参与一系列课程活动，提高学生的社会能力、学习能力、生存能力与自信心，培养他们正确的人生价值观和工作态度，引导他们拓展潜能，为今后走向成功打下良好的基础。如计算机信息管理专业自实施全人发展计划以后，学生的个人智力、情感、社会性、物质性、艺术性、创造性与潜力都得到了进一步的挖掘，学生的综合素质明显得到提高。"
      ]
    };
  }
};
</script>

<style scoped>
.ment {
  width: 100%;
  margin-left: 20px;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;
  text-align: center;
}
.ment h2{
  display: block;
  font-size: 30px;
}
.ment span{
  display: block;
  font-size: 20px;
  font-weight: 400;
  margin: 30px 0px;
}
.ment > p {
  text-indent: 2em;
  font-size: 16px;
  line-height: 30px;
  color: #575959;
  text-align: left;
}
</style>