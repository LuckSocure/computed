<template>
    <div class="website">
        <p class="title">计算机基础技术中心</p>
        <p v-for="(text,index) in textList" :key="index">{{text}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            textList: [
                '计算机基础技术中心前身是计算机基础技术实验室，经过多年的发展，现在已成为全校公共计算机基础课实验教学、学生竞赛、实验实训、培训和其他科技创新实践活动的实践锻炼基地，同时为教师提供科研、教研、教改的实验平台。',
                '该中心承担全校计算机基础实验教学和部分学院的专业课实验教学，日平均接纳学生上千人次，设有计算机组装、多媒体技术、平面设计、程序设计等多个现代化实训室。',
                '该中心是全校IT技术职业技能鉴定和培训基地、国家信息产业部IT职业技术教育工程定点基地，承担着计算机职业技能鉴定任务。设有国家劳动和社会保障部职业技能鉴定中心授权的计算机高新技术考试站、（ATA）国际著名IT厂商IT认证考试站、国家信息产业部授权的IT技术考试站、国家教育部授权的全国计算机应用技术证书考试（NIT）考试站，现具备中、高级软件操作员、数据库操作员、网络操作员、微机系统维修员、计算机绘图员、图像制作员、程序员等的职业技能培训和鉴定资格。经过培训和鉴定，可获得初、中、高级职业技能证书。 该中心还具有面向社会开展平面图形设计、室内装饰设计、应用软件设计、计算机维护等多种技术服务的能力。'
            ]
        }
    }
}
</script>

<style scoped>
.website{
    margin-left: 20px;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
}
.website > p{
    text-indent: 2em;
    font-size: 16px;
    line-height: 30px;
    color: #575959;
}
.website p.title{
    text-align: center;
    font-size: 24px;
    font-weight: 800;
}
</style>