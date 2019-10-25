<template>
    <div class="teacher">
        <div class="head">
            <p></p>
            <img src="../assets/img/head.jpg" alt="">
        </div>
        <ul>
            <li v-for="(item, index) in listArr" :key="index">
                <img :src="item.imgSrc" alt="">
                <div class="text">
                    <p>{{item.vocational}}</p>
                    <p>{{item.text}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            listArr: [
                {imgSrc:'../assets/img/jy.jpg', vocational: '计算机应用技术专业团队', text: '本专业是我院最早举办高职教育的专业之一,被认定为自治区优质专业、自治区优势专业'},
                {imgSrc:'../assets/img/rj.jpg', vocational: '软件技术专业团队', text: '本专业是广西机电职业技术学院重点建设专业之一'},
                {imgSrc:'../assets/img/wl.jpg', vocational: '计算机网络技术专业团队', text: '本专业开设于2003年，经过11年的建设与发展，积累了丰富的教学资源'},
                {imgSrc:'../assets/img/wlw.jpg', vocational: '物联网应用技术专业团队', text: '本专业开设于2013年，师资力量雄厚。'},
                {imgSrc:'../assets/img/xx.jpg', vocational: '网站设计与维护专业团队', text: '本专业是2000年经广西教育厅批准开设，并把培养方向定位为网站设计与维护方向'},
                {imgSrc:'../assets/img/ss.jpg', vocational: '摄影摄像技术专业团队', text: '本专业是经广西教育厅批准开设，支持我区“14+10”产业发展，服务北部湾经济区建设的紧缺新专业'},
            ]
        }   
    }
}
</script>

<style scoped>
    .teacher{
        width: 1170px;
        margin: 0px auto;
    }
    .head{
        width: 100%;
    }
    .head p{
        width: 50%;
        height: 20px;
        background: orange;
        border-radius: 10px;
        margin: 20px auto 0px auto;
    }
    .head img{
        display: inline-block;
        width: 50%;
        margin-left: 290px;
    }
</style>