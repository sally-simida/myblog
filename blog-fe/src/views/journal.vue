<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="stars1">
      <div class="night">
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
      </div>
    </div>

    <div class="stars2">
      <div class="night">
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
      </div>
    </div>

    <div>
      <div class="content">
        <ul>
          <li class="item" v-for="journal in data" :key="journal.journal_id">
            <router-link :to="'/journalDetail/' + journal.journal_id">
              <h3>{{ journal.journal_title }}</h3></router-link
            >
            <p>{{ journal.journal_introduce }}</p>
          </li>
        </ul>
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
  data() {
    return {
      data: "",
    };
  },
  methods: {
    getData() {
      this.axios
        .get("http://localhost:80/journal")
        .then((res) => {
          this.data = res.data.journals;
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
@import "../assets/css/stars.css";
.container {
  min-height: 100vh;
  height: 100%;
  background: url("../assets/img/green.jpeg") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  .content {
    width: 800px;
    padding-top: 100px;
    padding-left: 300px;
    position: relative;
    z-index: 5;
    .item {
      width: 750px;
      padding: 30px;
      background: rgba(255, 255, 255, 0.37);
      border-radius: 10px;
      margin: 20px;
      p {
        padding: 10px 0;
      }
            h3:hover{
        color: rgb(90, 90, 90);
      }
    }
    .item:hover {
      background: rgba(255, 255, 255, 0.74);
      box-shadow: 20px 20px 40px rgba(255, 255, 255, 0.459);
    }
  }
}
</style>
