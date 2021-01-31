const journal = require('koa-router')()
const journalController = require('../controllers/journal')

journal.get('/journal', journalController.getJournal)

journal.get('/journalDetail/:journal_id', journalController.journalDetail)

journal.post('/journalField', journalController.journalField)
  
  module.exports = journal
