<template>
    <div class="things">
        <p class="title">物联网综合技术中心</p>
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
                {src: require('@/assets/img/wlw_01.jpg'), text: '物联网机房'},
                {src: require('@/assets/img/wlw_02.jpg'), text: '物联网应用开发实训台'},
                {src: require('@/assets/img/wlw_04.jpg'), text: '智慧工厂沙盘'},
                {src: require('@/assets/img/wlw_05.jpg'), text: '智能仓储实验室一'},
                {src: require('@/assets/img/wlw_06.jpg'), text: '智能仓储实验室二'}
            ],
            textList: [
                '物联网技术中心包括物联网综合应用实验室、智能家居实验室、智能仓储实验室、智慧工厂实训室、传感器实训室和嵌入式实训室。',
                '本中心拥有60套RFID实验箱、10套综合实验台、5个沙盘和多套智慧实验实训系统，能满足学生开展嵌入式开发、RFID射频技术、无线传感网络、传感器与检测技术、物联网综合应用开发等专业核心课程的实验实训。'
            ]
        }
    }
}
</script>

<style scoped>
.things{
    margin-left: 20px;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
}
.things > p{
    text-indent: 2em;
    font-size: 16px;
    line-height: 30px;
    color: #575959;
}
.things p.title{
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