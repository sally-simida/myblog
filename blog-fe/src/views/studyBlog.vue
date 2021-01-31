<template>
  <div class="container">
    <Navigation></Navigation>
    <div>
      <div class="fish">
        <div class="datouwang">
          <div class="arms">
            <div class="arm" style="--scaleX:1;--scaleY:1;--rotate:3;"></div>
            <div class="arm" style="--scaleX:1;--scaleY:1.1;--rotate:2;"></div>
            <div class="arm" style="--scaleX:1;--scaleY:1.2;--rotate:1;"></div>
            <div
              class="arm"
              style="--scaleX:-1;--scaleY:1.15;--rotate:0;"
            ></div>
            <div class="arm" style="--scaleX:-1;--scaleY:1.1;--rotate:0;"></div>
            <div class="arm" style="--scaleX:-1;--scaleY:1;--rotate:-1;"></div>
            <div
              class="arm"
              style="--scaleX:-1;--scaleY:1.15;--rotate:-2;"
            ></div>
            <div
              class="arm"
              style="--scaleX:.5;--scaleY:1.15;--rotate:-3;"
            ></div>
          </div>
          <div class="tentacles">
            <div class="tentacle"></div>
            <div class="tentacle"></div>
            <div class="tentacle"></div>
            <div class="tentacle"></div>
            <div class="tentacle"></div>
          </div>
          <div class="guts"></div>
          <div class="body">
            <div class="base"></div>
          </div>
          <div class="eyes">
            <div class="eye left">
              <div class="eyelid"></div>
            </div>
            <div class="eye right">
              <div class="eyelid"></div>
            </div>
            <div class="mouth"></div>
          </div>
        </div>
      </div>

      <div class="content">
        <ul>
          <li class="item" v-for="blog in data" :key="blog.blog_id">
            <router-link :to="'/blogDetail/' + blog.blog_id"><h3>{{ blog.blog_title }}</h3></router-link>
            <p>{{ blog.blog_introduction }}</p>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import Navigation from "../components/nav";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      data: "",
    };
  },
  methods: {
    getData() {
      this.axios
        .get("http://localhost:80/studyBlog")
        .then((res) => {
          console.log(res);
          this.data = res.data;
          console.log(this.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/fish.css";
.container {
  min-height: 100vh;
  height: 100%;
  background: url("../assets/img/fish.jpeg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position-y: -500px;
  .content {
    width: 650px;
    float: right;
    margin-right: 250px;
    padding-top: 100px;
    .item {
      background: rgba(255, 255, 255, 0.377);
      padding: 30px;
      margin: 20px;
      border-radius: 20px;
      p{
      padding: 10px 0;}
      h3:hover{
        color: rgb(90, 90, 90);
      }
    }
    .item:hover {
      background: rgba(255, 255, 255, 0.74);
      box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.459);
    }
  }
  .clear {
    clear: both;
  }
}
</style>
