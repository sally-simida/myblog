const db = require("./db");

module.exports = {
  getJournals() {
    return db.query(`SELECT * FROM t_journal`);
  },
  getJournalDetail(journal_id) {
    return db.query(
        "SELECT * FROM t_journal WHERE journal_id=?",
      [journal_id]
    );
  },
  saveArticle(obj){
    return db.query(
      "insert into t_journal set ?",obj )
  }
};