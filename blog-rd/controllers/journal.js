const journal = require("../models/journal");

module.exports = {
  //get
  async getJournal(ctx) {
    let journals = await journal.getJournals();
    ctx.body = {
        journals
    }
  },
  //get
  async journalDetail(ctx) {
    let { journal_id } = ctx.params;
    let [ journals ] = await journal.getJournalDetail(journal_id);
    if (journals) {
      ctx.body = {
        journals
      }
    }
  },
  //post
  async journalField(ctx) {
    console.log(666);
    let { journal_content, journal_introduce, journal_title } = ctx.request.body;
    if (journal_content.trim().length == 0 || journal_introduce.trim().length == 0 ||journal_title.trim().length == 0) {
      ctx.body={
        msg : "Invalid format"
      }
    } else {
      let results = await journal.saveArticle({ journal_content, journal_introduce, journal_title });
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
