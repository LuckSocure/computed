<template>
    <div class="soft">
        <p class="title">网站设计与维护技术中心</p>
        <p v-for="(text,index) in textList" :key="index">{{text}}</p>
        <ul>
            <li v-for="(item, index) in imgList" :key="index">
                <img :src="item.src" alt="">
                <p>{{item.text}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgList: [
                {src: require('@/assets/img/wz_01.jpg'), text: '机房内景一'},
                {src: require('@/assets/img/wz_02.jpg'), text: '机房内景二'},
                {src: require('@/assets/img/wz_03.jpg'), text: '机房内景三'}

            ],
            textList: [
                '本中心按照计算机信息管理专业（网站设计与维护方向）人才培养需求，对专业核心课程的理实一体化教学与实训教学在软件、硬件与管理方面的要求，进行系统规划与设计。经过多年的建设，中心功能日趋完善，主要从以下三方面服务于计算机信息管理等相关专业的人才培养与专业建设：',
                '一、“教、学、做、训、评”中心',
                '本中心目前主要为《网页制作》、《网页美工》、《Photoshop图像处理》、《网站规划与设计》、《Web前端开发》、《移动互联网应用开发》、《PHP应用开发》、《Flash动画制作》和《专业项目》等专业课程的理实一体化教学与实训教学提供完善的软、硬件环境，保证学生能够边学边做，教师能够在教学的过程中方便的对学生进行评价与考核，提升教学效率与教学效果。',
                '二、教师改革创新基地',
                '本中心根据互联网技术的最新发展，搭建了移动互联网应用（Android）开发、HTML5应用开发、网页前端综合开发等最新技术的开发平台，保证专业团队教师的教学改革、技术应用研究与创新实践等需要。',
                '三、学生技能大赛训练营',
                '本中心同时还作为计算机信息管理专业、计算机应用技术专业、计算机网络技术专业等学生参加广西高校计算机应用大赛等学生技能竞赛的集训大本营，在教师的指导下，学生组成竞赛队伍，团队协作，训练与提升专业技能，完成自己的参赛作品。以赛促训，以赛促学，中心为参赛学生动手实践能力的提升，提供了不可或缺的平台。'
            ]
        }
    }
}
</script>

<style scoped>
.soft{
    margin-left: 20px;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
}
.soft > p{
    text-indent: 2em;
    font-size: 16px;
    line-height: 30px;
    color: #575959;
}
.soft p.title{
    text-align: center;
    font-size: 24px;
    font-weight: 800;
}
ul{
    padding-left: 0;
}
ul li{
    list-style: none;
    display: inline-block;
    padding: 10px;
    margin-left: 10px;
}
ul li p{
    line-height: 20px;
    font-size: 14px;
    color: #7b7b7b;
    text-align: center;
}
</style>
