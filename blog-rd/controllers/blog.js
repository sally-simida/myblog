const blog = require("../models/blog");

module.exports = {
  //get
  async getBlogs(ctx) {
    let results = await blog.getBlog();
    ctx.body = results;
  },
  //get
  async blogDetail(ctx) {
    let { blog_id } = ctx.params;
    let [ results ] = await blog.getBlogDetail(blog_id);
    console.log(results);
    if (results) {
      ctx.body = {
        results
      }
    }
  },
  //post
  async blogField(ctx) {
    console.log(666);
    let { blog_title, blog_content, blog_introduction } = ctx.request.body;
    console.log(blog_title, blog_content, blog_introduction);
    if (blog_title.trim().length == 0 ||blog_content.trim().length == 0 || blog_introduction.trim().length == 0) {
      ctx.body={
        msg: 'Invalid format'
      }
    } else {
      let results = await blog.saveArticle({ blog_title, blog_content, blog_introduction });
      console.log(results);
      if (results.insertId) {
        //insertId非空 => 数据库 增 操作成功
        ctx.body = {
          msg: "successful",
        };
      } else {
        ctx.body = {
          msg: "fail",
        };
      }
    }
  },
};
