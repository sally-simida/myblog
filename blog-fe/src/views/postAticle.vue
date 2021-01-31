<template>
  <div class="container">
    <Navigation></Navigation>
    <div class="content">
      <div class="choose">
      <el-radio v-model="radio" label="1">发表博客</el-radio>
      <el-radio v-model="radio" label="2">发表日志</el-radio></div>
      <div class="title">
      <input type="text" v-model="title" placeholder="标题"><br>
      <input type="text" v-model="introduce" placeholder="文章介绍"></div>
      <quill-editor
        class="item"
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
      >
      </quill-editor>
      <button class="btn" @click="postField">发表文章</button>
    </div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import Navigation from "../components/nav";
export default {
  components: {
    quillEditor,
    Navigation,
  },
  data() {
    return {
      content: "",
      radio:'1',
      title:'',
      introduce:'',
      editorOption: {
        placeholder: "请在这里输入",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            ["blockquote", "code-block"], //引用，代码块
            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ script: "sub" }, { script: "super" }], // 上下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ direction: "rtl" }], // 文本方向
            [{ size: ["small", false, "large", "huge"] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            [{ align: [] }], //对齐方式
            ["clean"], //清除字体样式
            ["image", "video"], //上传图片、上传视频
          ],
        },
      },
    };
  },
  methods: {
    postField() {
      if(this.radio == '1'){
        this.axios.post('http://localhost:80/blogField',{
          blog_title:this.title,
          blog_introduction:this.introduce,
          blog_content:this.content
        }).then(res=>{
          console.log(res);
          if (res.data.msg == 'successful') {
            alert('博客发表成功！')
          } else if(res.data.msg == 'Invalid format') {
            alert('小主啊！这三个小框框都不能为空啊~😅')
          }
        }).catch(err=>{
          console.log(err);
          alert('发表失败！')
        })
      } else{
        this.axios.post('http://localhost:80/journalField',{
          journal_content:this.content,
          journal_introduce:this.introduce,
          journal_title:this.title
        }).then(res =>{
          console.log(res);
          alert('日志发表成功！')
        }).catch(err =>{
          console.log(err);
          alert('发表失败！')
        })
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  background: url("../assets/img/starrySky.jpeg") no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  min-height: 100vh;
  height: 100%;
  .content {
    width: 800px;
    margin: 0 auto;
    padding-top: 100px;
    .item {
      background: rgba(255, 255, 255, 0.699);
      border-radius: 10px;
      min-height: 300px;
    }
    .choose{
      background: rgba(255, 255, 255, 0.699);
      display: flex;
      justify-content: space-around;
      padding: 30px;
      margin: 10px 0;
    }
    .btn{
      width: 150px;
      height: 50px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.719);
      font-size: 16px;
      position: absolute;
      top: 110px;
      right: 100px;
    }
   .title{
     width: 800px;
     background:  rgba(255, 255, 255, 0.719);
     margin: 10px 0;
     input{
       height: 30px;
       width: 700px;
       margin: 10px;
     }
   }
  }
}
</style>
