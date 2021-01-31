<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="content">
      <div class="item">
      <h3>{{data.journal_title}}</h3>
      <div>{{data.journal_introduce}}</div>
      <p v-html="data.journal_content"></p>
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
        .get("http://localhost:80/journalDetail/" + this.$route.params.journal_id)
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
.container {
  min-height: 100vh;
  height: 100%;
  background: url("../assets/img/blueGreen.jpeg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 0;
  .content {
    width: 800px;
    margin: 0 auto;
    padding-top: 100px;
    .item {
    background: rgba(255, 255, 255, 0.377);
    border-radius: 20px;
    padding: 30px;
      h2 {
        text-align: center;
        margin: 20px;
      }
      div {
        color: rgb(85, 85, 85);
        margin: 20px 0;
      }
      p {
        text-indent: 2em;
        margin: 20px 0;
      }
    }
  }
}
</style>
