<template>
    <div class="computed-foot">
        <div class="icon">
            <img src="../assets/img/gxcme.jpg" alt="">
            <p>地址：广西南宁大学东路101号 | 邮编：530007 | 桂ICP备05000952号</p>
        </div>
        <div class="code">
            <img src="../assets/img/ws.jpg" alt="">
            <p>扫一扫了解学院</p>
        </div>
        <div class="tag">
            <p>中华人民共和国教育部</p>
            <p>广西壮族自治区教育厅</p>
            <p>广西壮族自治区工业和信息化厅</p>
            <p>教育部全国青少年普法网</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .computed-foot{
        padding-top: 24px;
        display: flex;
        width: 1170px;
        margin: 0px auto;
    }
    .computed-foot div{
        padding: 20px 10px;
        box-sizing: border-box;
        width: 360px;
        /* background: #eeeeee; */
        margin-right: 20px;
        text-align: center;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }
    .computed-foot div p{
        font-size: 14px;
        color: #727171;
    }
    .icon img,
    .code img{
        display: inline-block;
        width: 100px;
        height: 100px;
    }
</style>