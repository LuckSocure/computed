<template>
    <div class="movie">
        <p class="title">多媒体与影视技术中心</p>
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
                {src: require('@/assets/img/dmt_01.jpg'), text: '单反相机'},
                {src: require('@/assets/img/dmt_03.jpg'), text: '摄像电控摇臂'},
                {src: require('@/assets/img/dmt_05.jpg'), text: '视频后期非编系统'},
                {src: require('@/assets/img/dmt_07.jpg'), text: '音频后期编辑系统'},
                {src: require('@/assets/img/dmt_08.jpg'), text: '专业演播室及影视灯光控制系统'},
            ],
            textList: ['多媒体与影视技术中心是根据 “教学、实训、理论、实践”同步的实训教学方法，按照摄影摄像技术教学的要求，高标准配置了齐全的实训设施，本中心包括：一间拥有专业影视灯光控制系统、模拟蓝箱，能够进行节目直播、影视节目制作实训教学的影视演播室；两个能够进行商业人像、商品拍摄创作、室内摄影布光练习的摄影棚；一个进行了专业隔音处理，能够进行声音采集录制、后期编辑的录音室。同时，技术中心还拥有数十台不同型号、不同类别的高清摄像机，单反数码相机，以及摄像轨道、摄像摇臂、斯塔尼康稳定器、非线性编辑系统、移动演播室系统（导播系统）、数字音频工作站、专业调音台等专业配套设备。',
                       '本技术中心能够满足摄影摄像技术、图文信息技术等专业学生进行摄像基础、影视灯光、影视节目制作、影视节目直播、影视后期编辑制作、摄影技术、摄影用光、摄影人像创作、静物商品拍摄、广告摄影、声音采集与编辑等课程的实训教学和实践练习。']
        }
    }
}
</script>

<style scoped>
.movie{
  margin-left: 20px;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;
}
.movie > p{
    text-indent: 2em;
    font-size: 16px;
    line-height: 30px;
    color: #575959;
}
.movie p.title{
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