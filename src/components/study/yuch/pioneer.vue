<template>
  <div class="pion">
    <h2>创业教育</h2>
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
        "创业教育是大学生素质教育的重要组成部分，通过创业教育培养学生树立创业意识，掌握创业技能，我系通过创办创新创业工作室、开设一些特色课程和聘请创业专家来校开办讲座等形式，为学生提供良好的创业教育环境。",
        "一、开设创业课程",
        "为了普及创业知识，我系开设了《就业与创业指导》和《职业素质拓展》课程，对创业知识进行全面介绍，并引导学生参加全系创新创业活动，提高学生创业意识和创业能力。",
        "二、聘请企业专家开办讲座",
        "1、广西卡西亚科技有限公司李俊技术总监主讲",
        "2015年12月9日晚，我系《物联网现状和职业化素质讲座》在图书馆多动能厅举行，系主任石铁峰老师出席并主持大会。讲座邀请到广西卡西亚科技有限公司的李俊技术总监主讲，物联网专业的老师与学生共150余人参与。",
        "李俊总监对物联网专业深入剖析同时分析了物联网专业的职业发展方向以及就业现状。在座谈会中，李俊总监注重与学生的交流，不时了解物联网专业的同学们目前的情况以及对专业学习的看法与意见。最后，在李俊老师幽默风趣的带动下,同学们也积极主动的去表达自己的想法，听完讲座后，同学们都觉得收获颇丰。"
      ],
      textA: [
        { text: "2、广西金中软件有限公司总经理肖新华主讲", id: 100 },
        {
          text:
            "20164月19日下午，我院计算机与信息工程系邀请广西软件行业协会常务副理事长、物联网分会会长、广西金中软件有限公司总经理肖新华先生到校作《软件企业采用的开发技术和项目流程介绍》专题讲座。",
          id: 101
        },
        {
          text:
            "讲座分为技术团队和技术路线的定位、软件项目开发流程和物联网开发项目实战等三个主题。技术团队和技术路线的定位包括：开发框架、前端开发框架之Bootstrap、开发技术快速学习、高效工作的秘诀等主要内容；软件项目开发流程详细介绍了市场、售前、设计、开发、测试、实施、售后等每个环节；物联网开发项目实战通过实际操作案例介绍相关知识。肖总经理的讲座语言生动幽默且具有哲理，同学们均感到收获良多、受益匪浅。最后，他向同学们提出两点建议：第一，建议同学们扩大知识面，提升专业技能；第二，建议同学们注意把自己的所学专业和社会需求相结合起来，注重实际技能的培养。",
          id: 102
        },
        {
          text:
            "本次讲座为学生提供了与企业行业专家零距离交流的机会，让学生领略成功企业家个人魅力的同时，坚定专业自信技术自强的信念。整个讲座在同学们热烈的掌声中结束。",
          id: 103
        }
      ],
      imgList: [
        { src: require("@/assets/img/jz_01.jpg"), id: 200 },
        { src: require("@/assets/img/jz_02.jpg"), id: 201 },
        { src: require("@/assets/img/jz_03.jpg"), id: 202 }
      ],
      imgA: [{ src: require("@/assets/img/jz_04.jpg"), id: 300 }]
    };
  }
};
</script>

<style scoped>
.pion {
  width: 100%;
  margin-left: 20px;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;
  text-align: center;
}
.pion h2 {
  display: block;
  font-size: 30px;
}
.pion img {
  width: 80%;
  padding-top: 10px;
}
.pion span {
  display: block;
  font-size: 20px;
  font-weight: 400;
  margin: 30px 0px;
}
.pion > p {
  text-indent: 2em;
  font-size: 16px;
  line-height: 30px;
  color: #575959;
  text-align: left;
}
</style>