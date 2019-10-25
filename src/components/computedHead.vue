<template>
    <div class="computed-head">
        <img src="../assets/img/logo.jpg" alt="LOGO" title="LOGO">
        <span>计算机与信息工程系</span>
        <ul class="menu">
            <router-link tag="li" to="/home">首页</router-link>
            <router-link tag="li" to="/Introduction">学院概况</router-link>
            <router-link tag="li" to="/teacher">师资队伍</router-link>
            <router-link tag="li" to="/talent">人才培养</router-link>
            <router-link tag="li" to="/study">科学研究</router-link>
            <router-link tag="li" to="/student">学生工作</router-link>
            <router-link tag="li" to="/thought">党建思政</router-link>
            <router-link tag="li" to="/with">对外交流</router-link>
            <router-link tag="li" to="/alumni">校友中心</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style scoped>
    .computed-head{
        position: relative;
        width: 1170px;
        margin: 0px auto;
    }
    .computed-head > img{
        display: inline-block;
        margin: 10px 0 0 0;
    }
    .computed-head > span{
        display: inline-block;
        vertical-align: middle;
        margin: -50px 10px 0px 10px;
        font-size: 20px;
        color: blueviolet;
    }
    .menu{
        position: absolute;
        top: 20px;
        display: inline-block;
        margin-left: 20px;
    }
    .menu > li{
        list-style: none;
        display: inline-block;
        margin-right: 10px;
        font-size: 14px;
        color: #595757;
        cursor: pointer;
    }
    .menu >li:hover{
        color: aquamarine;
    }
</style>