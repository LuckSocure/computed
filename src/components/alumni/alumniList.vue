<template>
    <ul class="alumni-list">
        <router-link tag="li" to="/alumni/movie">
            <span>计算机应用技术专业简介</span>
            <span>[2019-10-10]</span>
        </router-link>
        <router-link tag="li" to="/alumni/basics">
            <span>物联网应用技术专业简介</span>
            <span>[2019-10-10]</span>
        </router-link>
        <router-link tag="li" to="/alumni/network">
            <span>计算机信息管理专业（网站设计与维护方向）简介</span>
            <span>[2019-10-10]</span>
        </router-link>
        <router-link tag="li" to="/alumni/soft">
            <span>软件技术专业简介</span>
            <span>[2019-10-10]</span>
        </router-link>
        <router-link tag="li" to="/alumni/website">
            <span>计算机网络技术专业简介</span>
            <span>[2019-10-10]</span>
        </router-link>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.alumni-list{
    width: 100%;
    padding-left: 0px;
    border: 1px solid #eee;
    box-shadow: 0px 0px 3px #7b7b7b;
    border-radius: 5px;
}
.alumni-list li{
    list-style: none;
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}
.alumni-list li:hover span{
    color: #0e2033;
}
.alumni-list li span{
    font-size: 14px;
    color: #575959;
}
.alumni-list li span:last-child{
    float: right;
}
</style>