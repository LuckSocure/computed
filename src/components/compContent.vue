<template>
    <div class="content">
        <el-carousel :interval="3000" type="card" height="300px">
            <el-carousel-item v-for="(item,index) in listArr" :key="index">
            <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="list">
            <activeity :activeArr=activeArr></activeity>
            <activeity title='重要通知' :activeArr=noticeArr></activeity>
            <activeity title='新闻速递' :activeArr=newsArr></activeity>
            <activeity title='讲座信息' :activeArr=lectrueArr></activeity>
        </div>
        <div class="presentation">
            <activeity title="专业介绍" :activeArr=presentationArr></activeity>
        </div>
    </div>
</template>

<script>
import activeity from './activeity';

export default {
    data () {
        return {
            listArr: ['http://www.gxcme.edu.cn/x/jisuanji/images/slide3.jpg',
                     'http://www.gxcme.edu.cn/x/jisuanji/images/slide2.jpg',
                     'http://www.gxcme.edu.cn/x/jisuanji/images/slide10.jpg'],
            activeArr: [
                {tag: '计算机学院开展纪念五四运动 100 周年主题团日活动', time: '05-08'},
                {tag: '计算机学院开展纪念五四运动 100 周年主题团日活动', time: '05-08'},
                {tag: '计算机学院开展纪念五四运动 100 周年主题团日活动', time: '05-08'},
                {tag: '计算机学院开展纪念五四运动 100 周年主题团日活动', time: '05-08'},
                {tag: '计算机学院开展纪念五四运动 100 周年主题团日活动', time: '05-08'},
                {tag: '计算机学院开展纪念五四运动 100 周年主题团日活动', time: '05-08'}
            ],
            noticeArr: [
                {tag: '2019 年计算机科学技术学院（软件学院）国家奖学金名单公示', time: '10-14'},
                {tag: '2019 年计算机科学技术学院（软件学院）国家奖学金名单公示', time: '10-14'},
                {tag: '2019 年计算机科学技术学院（软件学院）国家奖学金名单公示', time: '10-14'},
                {tag: '2019 年计算机科学技术学院（软件学院）国家奖学金名单公示', time: '10-14'},
                {tag: '2019 年计算机科学技术学院（软件学院）国家奖学金名单公示', time: '10-14'},
                {tag: '2019 年计算机科学技术学院（软件学院）国家奖学金名单公示', time: '10-14'}
            ],
            newsArr: [
                {tag: '2019“全国高校大数据应用创新大赛” 总决赛暨颁奖典礼圆满...', time: '09-27'},
                {tag: '2019“全国高校大数据应用创新大赛” 总决赛暨颁奖典礼圆满...', time: '09-27'},
                {tag: '2019“全国高校大数据应用创新大赛” 总决赛暨颁奖典礼圆满...', time: '09-27'},
                {tag: '2019“全国高校大数据应用创新大赛” 总决赛暨颁奖典礼圆满...', time: '09-27'},
                {tag: '2019“全国高校大数据应用创新大赛” 总决赛暨颁奖典礼圆满...', time: '09-27'},
                {tag: '2019“全国高校大数据应用创新大赛” 总决赛暨颁奖典礼圆满...', time: '09-27'}
            ],
            lectrueArr: [
                {tag: '10.16 | 联邦学习在金融行业的实践：问题，方法及应用', time: '10-09'},
                {tag: '10.16 | 联邦学习在金融行业的实践：问题，方法及应用', time: '10-09'},
                {tag: '10.16 | 联邦学习在金融行业的实践：问题，方法及应用', time: '10-09'},
                {tag: '10.16 | 联邦学习在金融行业的实践：问题，方法及应用', time: '10-09'},
                {tag: '10.16 | 联邦学习在金融行业的实践：问题，方法及应用', time: '10-09'},
                {tag: '10.16 | 联邦学习在金融行业的实践：问题，方法及应用', time: '10-09'}
            ],
            presentationArr: [
                {tag: '计算机应用技术专业', time: '05-08'},
                {tag: '软件技术专业', time: '05-08'},
                {tag: '计算机网络技术专业', time: '05-08'},
                {tag: '物联网应用技术专业', time: '05-08'},
                {tag: '计算机信息管理-网站设计与维护专业', time: '05-08'},
                {tag: '软件技术专业（数据智能处理）', time: '05-08'}
            ]
        }
    },
    components: {
        activeity
    }
}
</script>

<style scoped>
  .content{
      width: 1170px;
      margin: 0px auto;
  }
  .list{
      width: 100%;
  }
  .presentation{
      margin-left: 20px;
      width: 92%;
      background-image: url('../assets/img/ind-join.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
  }
</style>