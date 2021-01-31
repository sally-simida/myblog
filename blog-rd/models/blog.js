const db = require("../models/db");

module.exports = {
  getBlog() {
    return db.query(`SELECT * FROM t_blog`);
  },
  getBlogDetail(blog_id) {
    return db.query(
        "SELECT * FROM t_blog WHERE blog_id=?",
      [blog_id]
    );
  },
  saveArticle(obj){
    return db.query(
      "insert into t_blog set ?",obj )
  }
};