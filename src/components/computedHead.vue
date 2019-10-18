<template>
    <div class="computed-head">
        <img src="../assets/img/logo.jpg" alt="LOGO" title="LOGO">
        <span>计算机与信息工程系</span>
        <el-tabs class="menu" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="学院概况" name="first">学院概况</el-tab-pane>
            <el-tab-pane label="师资队伍" name="second">师资队伍</el-tab-pane>
            <el-tab-pane label="人才培养" name="third">人才培养</el-tab-pane>
            <el-tab-pane label="科学研究" name="fourth">科学研究</el-tab-pane>
            <el-tab-pane label="学生工作" name="fives">学生工作</el-tab-pane>
            <el-tab-pane label="党建思政" name="six">党建思政</el-tab-pane>
            <el-tab-pane label="对外交流" name="seven">对外交流</el-tab-pane>
            <el-tab-pane label="校友中心" name="eight">校友中心</el-tab-pane>
        </el-tabs>
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
</style>