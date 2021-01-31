<template>
  <div class="backGround">
    <Navigation></Navigation>
    <div class="wrapper">
    <div class="blog"><router-link to='/postAticle'>发表文章</router-link></div>
      <div class="img">
        <img src="../assets/img/album.png" alt="" />
        <p>姓名：一位不敢留下姓名的网友</p>
      </div>
      <div class="basic">
        <h3>基本资料:</h3>
        <div>
          性别：女
        </div>
        <div>
          职业：东北农业大学在校大学生
        </div>
        <div>
          学校：东北农业大学
        </div>
        <div>
          爱好：画画，火锅
        </div>
      </div>
      <div class="contact">
        <p>
          联系方式：
        </p>
        <p>QQ:2361642684</p>
        <p>请注明来意，谢谢</p>
        <p>欢迎大家多多提意见~</p>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "../components/nav";
export default {
  components: {
    Navigation,
  },
};
</script>
<style lang="scss" scoped>
.backGround {
  background: url("../assets/img/water.jpeg") no-repeat;
  background-size: cover;
  position: fixed;
  height: 100%;
  width: 100%;
  .wrapper {
    margin: 0 auto;
    margin-top: 55px;
    background: rgba(238, 237, 237, 0.555);
    padding: 50px;
    width: 700px;
    border-radius: 60px;
    overflow: hidden;
    position: relative;
    .blog {
    position: absolute;
    right: 50px;
    padding: 10px;
    border: 1px solid #ccc;
   a{
    color: #ccc;}
}
     .blog:hover{
     border: 1px solid black;
         a{
     color: #000;}}
    .img {
      width: 300px;
      margin: 0 auto;
      img {
        width: 200px;
        height: 200px;
      }
      p {
        margin: 10px;
      }
    }
    .basic {
      width: 300px;
      margin: 20px auto;
      div {
        margin: 20px 0;
      }
    }
    .contact {
      width: 220px;
      text-align: center;
      margin: 30px;
      color: rgb(179, 175, 175);
      font-size: 14px;
      position: relative;
      left: 450px;
      p {
        margin: 10px 0;
      }
    }
    .contact:hover{
     color: black;
    }
  }
}
</style>
