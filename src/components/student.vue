<template>
    <div class="student">
        <h4>学生园地</h4>
        <studtext title="1.持续有效的毕业生四级就业管道" :imgSrc="imgSrc1"></studtext>
        <studtext title="2.两位一体的升本之路" :imgSrc="imgSrc2"></studtext>
        <studtext title="3.丰富多彩的学生活动" :imgSrc="imgSrc3"></studtext>
    </div>
</template>

<script>
import studtext from './studtext';

export default {
    data () {
        return {
            imgSrc1: [require('@/assets/img/byjy.jpg')],
            imgSrc2: [require('@/assets/img/lwyt.jpg')],
            imgSrc3: [require('@/assets/img/xshd_01.jpg'),require('@/assets/img/xshd_02.jpg'),require('@/assets/img/xshd_03.jpg')]
        }
    },
    components: {
        studtext
    }
}
</script>

<style scoped>
.student{
    width: 1170px;
    margin: 0 auto;
}
.student h4{
    font-size: 30px;
    text-align: center;
    margin: 20px 0px;
}
</style>