<template>
    <ul class="with-list">
        <router-link tag="li" to="/with/movie">
            <span>多媒体与影视技术中心</span>
            <span>[2019-10-10]</span>
        </router-link>
        <router-link tag="li" to="/with/basics">
            <span>计算机网络技术中心</span>
            <span>[2019-10-10]</span>
        </router-link>
        <router-link tag="li" to="/with/network">
            <span>软件开发与维护技术中心</span>
            <span>[2019-10-10]</span>
        </router-link>
        <router-link tag="li" to="/with/soft">
            <span>网站设计与维护技术中心</span>
            <span>[2019-10-10]</span>
        </router-link>
        <router-link tag="li" to="/with/website">
            <span>计算机基础技术中心</span>
            <span>[2019-10-10]</span>
        </router-link>
        <router-link tag="li" to="/with/things">
            <span>物联网综合技术中心</span>
            <span>[2019-10-10]</span>
        </router-link>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.with-list{
    width: 100%;
    padding-left: 0px;
    border: 1px solid #eee;
    box-shadow: 0px 0px 3px #7b7b7b;
    border-radius: 5px;
}
.with-list li{
    list-style: none;
    padding: 10px 15px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}
.with-list li:hover span{
    color: #0e2033;
}
.with-list li span{
    font-size: 14px;
    color: #575959;
}
.with-list li span:last-child{
    float: right;
}
</style>