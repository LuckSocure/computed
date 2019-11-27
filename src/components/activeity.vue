<template>
    <div class="activeity">
        <div class="active">
            <i class="el-icon-camera-solid icon"></i>
            <span>{{title}}</span>
            <a href="/">更多</a>
        </div>
        <ul class="menu">
            <li v-for="(item, index) in activeArr" :key="index">
                <a href="/">{{item.tag}}</a>
                <span>{{item.time}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '学生活动'
        },
        activeArr: {
            type: Array
        }
    }
}
</script>

<style scoped>
    .activeity{
        display: inline-block;
        width: 45%;
        margin: 20px 0px 20px 20px; 
    }
    .active{
        width: 100%;
        padding: 10px 0px;
        background-image: url('../assets/img/cm-tbg.png');
        background-repeat: repeat-x;
    }
    .icon{
        margin-left: 10px;
        color: white;
    }
    .active >span{
        font-size: 14px;
        color: white;
    }
    .active > a{
        float: right;
        margin-right: 20px;
        font-size: 14px;
        color: white;
        text-decoration: none;
    } 
    .menu{
        padding-left: 0px;
        width: 100%;
        background-image: url('../assets/img/itembg.jpg');
        background-repeat: no-repeat;
    }
    .menu > li{
        list-style: none;
        width: 100%;
        padding: 10px 0px;
        margin-left: 10px;
    } 
    .menu > li > a{
        text-decoration: none;
        color: #595757;
        font-size: 14px;
    }
    .menu > li > span{
        float: right;
        color: #595757;
        font-size: 14px;
        margin-right: 20px;
    }
</style>