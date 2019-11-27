<template>
  <div class="thought">
    <div class="tond">
      <ul>
        <li v-for="(item,index) in tondList" :key="index">
          <a :href="item.link">{{item.text}}:</a>
          <span v-for="(todo,index) in item.todo" :key="index">{{todo}}</span>
        </li>
      </ul>
    </div>
    <div class="bort">
      <ul>
        <li v-for="(item,index) in bortList" :key="index">
          <a :href="item.link">{{item.text}}:</a>
          <span v-for="(todo,index) in item.todo" :key="index">{{todo}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tondList: [
        {
          text: "组织建设",
          link: "#",
          todo: ["2017年度党员发展公示", "考察名单公布", "学生积极分子"]
        },
        {
          text: "组织生活",
          link: "#",
          todo: ["2017年度党员发展公示", "考察名单公布", "学生积极分子"]
        },
        {
          text: "理论学习",
          link: "#",
          todo: ["2017年度党员发展公示", "考察名单公布", "学生积极分子"]
        }
      ],
      bortList: [
        {
          text: "团学介绍",
          link: "#",
          todo: ["2017年度党员发展公示", "考察名单公布", "学生积极分子"]
        },
        {
          text: "社团风采",
          link: "#",
          todo: ["2017年度党员发展公示", "考察名单公布", "学生积极分子"]
        },
        {
          text: "学生活动",
          link: "#",
          todo: ["2017年度党员发展公示", "考察名单公布", "学生积极分子"]
        }
      ]
    };
  }
};
</script>

<style scoped>
.thought {
  width: 1170px;
  margin: 0 auto;
}
ul li {
  list-style: none;
}
.tond {
  width: 90%;
  height: 360px;
  margin: 0 auto;
  background-image: url("../assets/img/ulbg1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bort {
  width: 90%;
  height: 360px;
  margin: 50px auto 0px auto;
  background-image: url("../assets/img/ulbg2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tond ul,
.bort ul {
  padding-top: 100px;
  margin-left: 150px;
}
.tond li,
.bort li {
  width: 100%;
  line-height: 55px;
}
.tond a,
.bort a {
  text-decoration: none;
  font-size: 16px;
  color: #595757;
  font-weight: 500;
}
.tond a:hover,
.bort a:hover {
  text-shadow: 1px 1px 1px #595757;
}
.tond span,
.bort span {
  margin-left: 20px;
  font-size: 14px;
  color: #595757;
}
</style>