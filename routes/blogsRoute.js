const router = require('express').Router();
const blogsService = require('../services/blogsService');

router.get('/blogs', async (req, res) => {
    const result = await blogsService.getBlogs();
    res.json(result);
});

router.delete('/blogs/:blog_id', async (req, res) => {
     await blogsService.deleteBlog(req.params.blog_id);
    res.sendStatus(200);
});

router.post('/blog', async (req, res) => {
    console.log(req.body);
    const result = await blogsService.insertBlog(req.body);
    res.sendStatus(200);
});

module.exports = router;