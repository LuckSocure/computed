<template>
  <div class="sumup">
    <h2>育人创新之二：综合素质课</h2>
    <p v-for="(text,index) in textList" :key="index">{{text}}</p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            textList: [
                '素质教育是大学生思想政治教育的主要任务之一。系部以大学生全面发展为目标，结合高职院校人才培养特点，根据社会需求和学生成长规律，有计划有目的地开设系列综合素质课。分学期分阶段地通过“法纪教育”、“安全教育”、“校纪校规教育”等课程提高学生法制意识，增强遵纪守法观念；通过“爱国主义教育”、“党的知识教育”、“诚信教育”、“感恩教育”等课程加强对学生世界观、人生观和价值观的引导，使其在个人成长道路上朝正确的方向发展；通过“现代商务礼仪”、“心理健康”、“交际与口才”、“运动健康”等课程促进文化素质与身心健康协调发展，全面培养学生成为大学生勤于学习、善于创造、甘于奉献，成为有理想、有道德、有文化、有纪律的社会主义新人。',
                '综合素质课运用CDIO教育理念组织教学过程，由教师按照课程教学目的设定具体的主题，组织学生分构思、设计、实施和运作4个阶段完成学习任务，各阶段具体教学方法如下：',
                '1、构思阶段(Conceive)',
                '在构思阶段，首先将班级分成若干组，以宿舍为单位或随机进行分组，每小组推出一名组长负责落实学习任务，其次要求学生根据主题，阅读相关书籍、上网查找有关资料，每个学生必须阅读3-5篇文章，深入了解主题的定义与意义，确定个人对主题所形成的主要观点，最后，要求每个学生把自己看过的材料相关信息记录下来，以表格的形式进行汇总，以便在最后阶段总结与展示。',
                '2、设计阶段(Design)',
                '在设计阶段，每个小组根据学习活动的要求来设计个人如何去实现主题的步骤，首先对主题进行深入解读，收集相关的资料，如收集一些有代表性的文章，在此基础上与小组成员讨论自己的设计方案，然后经过不断的修改与完善，最终形成个人实现主题的基本思路。',
                '3、实施阶段(Implement)',
                '在实施阶段，首先根据主题设计的思路，与同组同学交流与讨论，让同组同学了解方案的具体内容，然后由组长根据同学的个性特点分配任务，以充分调动同学们参与学习的积极性，让每个学生都能按照设计方案去完成任务。',
                '4、运作阶段(Operate)',
                '运作阶段也叫汇报阶段，主要对学习主题进行全面总结，目的是让老师全面了解整个学习过程，看看同学们学到什么东西，是否达到教学效果。具体汇报过程可分为两个阶段： ①小组成员个人自我介绍，分别展示自己，介绍自己通过学习三个阶段的学习，对学习主题所持有的观点。②全面总结学习过程，重点展示每个人的设计方案、学习文章（含出处）、讨论及活动图片或视频。在汇报的过程中，学生以小组为单位上讲台展示自己学习整个过程，要求制作PPT，在多媒体教室进行展示，每个小组展示学习过程约5分钟，全面总结也5分钟。最后，指导教师对各组展示与总结进行点评，每个小组上台汇报总时间约为15分钟。',
                '基于CDIO理念的综合素质课，开启了学生探索性自主学习的新模式，各阶段的实施过程，有机地将学习与实践结合起来，在润物细无声中逐步达到教学目的，让学生真正实现综合素质全面提高。'
            ]
        }
    }
};
</script>

<style scoped>
.sumup {
  width: 100%;
  margin-left: 20px;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;
  text-align: center;
}
.sumup h2{
  display: block;
  font-size: 30px;
}
.sumup span{
  display: block;
  font-size: 20px;
  font-weight: 400;
  margin: 30px 0px;
}
.sumup > p {
  text-indent: 2em;
  font-size: 16px;
  line-height: 30px;
  color: #575959;
  text-align: left;
}
</style>