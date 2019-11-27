<template>
  <div class="inner">
    <h2>教学创新之一：教育理念创新</h2>
    <span>引入CDIO国际先进教育理念</span>
    <p v-for="(text,index) in textList" :key="index">{{text}}</p>
    <img src="@/assets/img/cdio.jpg" alt="">
    <p v-for="item in textA" :key="item.id">{{item.text}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textList: [
        "CDIO工程教育模式是近年来国际工程教育改革的最新成果，从2000年起，美国麻省理工学院和瑞典皇家工学院等四所大学经过四年的跨国探索研究，创立了CDIO工程教育理念，并于2004年成立了以CDIO命名的国际合作组织。CDIO 工程教育是将构思(Conceive)、设计( De-sign)、实现( Implement)、运作( Operate) 体现在整个项目的生命周期中，通过项目带动方式达到行业需求的多种能力及素质的培养目的。它是做中学和基于项目教育和学习 ( Project basededucation and learning) 的集中概括与抽象表达，它提出系统的能力培养方案与实施办法，与我国高职院校所倡导的项目教学及校企合作办学在理念上具有一致性，这就决定了CDIO引入高职教育具有十分重要的意义。",
        "2009年我系引入了CDIO教育理念，以计算机信息管理专业为试点进行研究与实践，取得了良好进展，先后申报了3项区级课题，并获得立项研究，经过几年的探索与实践，CDIO本土化应用研究取得了一定的成果，发表了十几篇论文，并逐步在全系各专业推广。",
        "根据CDIO教育理念，我们对主要专业课程的教学按四个步骤进行。即构思阶段——明确任务和任务准备；设计阶段——项目实施方案设计；实施阶段——项目实施；运作阶段——项目评价，根据任务要求，对学生完成情况进行评价和反馈。具体CDIO 教学过程示意图如下："
      ],
      textA: [
        {text: '按照CDIO教育理念进行教学改革与实践以来，教师的教学能力和项目实施能力得到了提高，学生的个人智力、情感、社会性、物质性、艺术性、创造性与潜力都得到了进一步的挖掘，学生的基础知识、个人能力、人际团队能力和工程系统能力等综合素质明显得到提高。', id: 100}
      ]
    };
  }
};
</script>

<style scoped>
.inner {
  width: 100%;
  margin-left: 20px;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;
  text-align: center;
}
.inner h2{
  display: block;
  font-size: 30px;
}
.inner span{
  display: block;
  font-size: 20px;
  font-weight: 400;
  margin: 30px 0px;
}
.inner > p {
  text-indent: 2em;
  font-size: 16px;
  line-height: 30px;
  color: #575959;
  text-align: left;
}
</style>