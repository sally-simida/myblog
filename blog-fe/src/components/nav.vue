<template>
  <div>
    <div class="nav">
      <div class="wrapper">
        <div>
          <img src="../assets/img/home.png" alt="" /><router-link to="/">
            首页</router-link
          >
        </div>
        <div>
          <img src="../assets/img/study.png" alt="" /><router-link
            to="/studyBlog"
          >
            学习博客</router-link
          >
        </div>
        <div>
          <img src="../assets/img/blog.png" alt="" /><router-link to="/journal">
            个人日志</router-link
          >
        </div>
        <div>
          <img src="../assets/img/personal.png" alt="" /><router-link
            to="/personalProfile"
          >
            个人简介</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigation",
};
</script>
<style lang="scss" scoped>
.nav {
  height: 55px;
  position: fixed;
  z-index: 99;
  background-size: 100% 100%;
  left: 50%;
  margin-left: -500px;
.wrapper {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  div {
    width: 150px;
    text-align: center;
    padding: 15px 0;
    border-radius: 20px;
    img {
      width: 20px;
      height: 20px;
      position: relative;
      top: 4px;
    }
}
div:hover{
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 10px 10px 30px rgba(43, 41, 41, 0.6);
    font-size: 18px;
    img{
        width: 22px;
        height: 22px;
    }
}
div:active{
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  transform: translateY(2px);
}
  }
}
</style>
