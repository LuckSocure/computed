<template>
    <div class="basics">
        <p class="title">计算机网络技术中心</p>
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
                {src: require('@/assets/img/wl_01.jpg'), text: '光缆配线实训装置'},
                {src: require('@/assets/img/wl_03.jpg'), text: '网络中心机柜'},
                {src: require('@/assets/img/wl_06.jpg'), text: '综合布线实训台'},
                {src: require('@/assets/img/wl_04.jpg'), text: '综合布线器材展示柜'}
            ],
            textList: [
                '计算机网络技术中心设有网络技术基础实训室、网络系统集成实训室、网络信息安全实训室、网络综合布线实训室、思科网络实训室、学院网络管中心等多个实训室。该中心根据网络技术专业学生的能力需求并紧跟前沿网络技术而构建，能满足学生在网络建设方案编写、线路铺设与弱电施工、网络设备的架设、各种系统的架设等方面的实验，也能开展网络安全和云计算方面的工程实践。其中学院网络管理中心就是一个真实的实验环境，同时也一个生产性实验环境，该环境能培养学生的实战能力和良好职业素养，学生不需要就业单位的岗前培训就能胜任网络相关的工作，大大增强学生的就业竞争力。',
                '该中心还装备有思科公司捐赠给思科网络学院的各种路由器、交换机和防火墙；还有华为路由器、交换机、防火墙；惠普服务器、IBM服务器、浪潮服务器等设备。'
            ]
        }
    }
}
</script>

<style scoped>
.basics{
    margin-left: 20px;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
}
.basics > p{
    text-indent: 2em;
    font-size: 16px;
    line-height: 30px;
    color: #575959;
}
.basics p.title{
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