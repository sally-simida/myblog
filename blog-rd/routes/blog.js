const blog = require('koa-router')()
const blogController = require('../controllers/blog')

blog.get('/studyBlog', blogController.getBlogs)

blog.get('/blogDetail/:blog_id', blogController.blogDetail)

blog.post('/blogField', blogController.blogField)


module.exports = blog
