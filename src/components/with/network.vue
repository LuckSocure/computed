<template>
    <div class="network">
        <p class="title">软件开发与维护技术中心</p>
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
                {src: require('@/assets/img/rj_01.jpg'), text: '软件中心'},
                {src: require('@/assets/img/rj_02.jpg'), text: '机房内景'},
                {src: require('@/assets/img/rj_03.jpg'), text: '测试部'}

            ],
            textList: [
                '软件开发与维护技术中心设有软件设计实训室、软件编码实训室、软件测试实训室、软件维护实训室等四个实训室。该中心按照真实的企业软件产品开发工作过程来创建（如下图），引入现代企业的理念与价值观，营造企业化的职业氛围，实训内容与项目来源于企业，实训方式和过程企业化，把最先进的IT技术应用于教学实训中，培养出高质量的、真正做到学生一毕业就能上岗胜任的软件技术专业人才。',
                '该中心装备有美工设计、网站设计、软件开发、软件测试专用电脑，投影仪，幕布，组网设备，打印机，专用软件等各种软硬设备。可承担图形图像处理、网页制作、程序设计、数据库开发、软件测试、软件工程等实训项目。并可对计算机应用技术、软件技术等专业相关的职业技能进行培训及鉴定。我们在已有人员、技术、规模的基础优势上，进一步做“强”做“大”，将实训中心建设成为生产性实训基地，在满足本校学生实习实训的基础上，成为周边职业院校和企业共享的实训平台，可对外开展平面广告设计、网站设计、软件测试、软件开发与维护等多种技术服务，进一步把实训中心建成具有开放性、社会性、服务性的全区一流的实训基地。'
            ]
        }
    }
}
</script>

<style scoped>
.network{
    margin-left: 20px;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
}
.network > p{
    text-indent: 2em;
    font-size: 16px;
    line-height: 30px;
    color: #575959;
}
.network p.title{
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