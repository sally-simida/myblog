<template>
  <div class="nav">
    <div class="item-box">
      <div class="item" >
        <router-link to="/studyBlog">学习博客</router-link>
      </div>
      <div class="item">
        <router-link to="/journal">个人日志</router-link>
      </div>
      <div class="item">
        <router-link to="/personalProfile">个人简介</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.nav {
  height: 100%;
  width: 100%;
  background: url('../assets/img/stars.jpeg') no-repeat;
  background-size: 100% 100%;
  /* 脱离文档流，解决盒子高度由内容撑开 */
  position: fixed;
}
a {
  color: rgb(179, 173, 173);
}
.nav .item-box {
  width: 800px;
  height: 200px;
  margin: 0 auto;
  margin-top: 250px;
  display: flex;
  justify-content: space-around;
 div:hover {
  transform: translateY(-20px);
  background: rgba(212, 210, 210, 0.5);
  box-shadow: 50px 50px 100px rgba(247, 248, 250, 0.4);
}
.item {
  width: 200px;
  background: rgba(44, 107, 190, 0.6);
  text-align: center;
  line-height: 200px;
  font-size: 30px;
  border-radius: 20px;
  box-shadow: 20px 20px 30px rgba(48, 49, 51, 0.3);
}
a:hover {
  font-size: 40px;
  color: rgb(30, 30, 31);
}
a:active{
  font-size: 30px;
    color: rgb(30, 30, 31);
}
}
</style>