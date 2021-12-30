const router = require('express').Router();
const categoriesService = require('../services/categoriesService');

router.get('/categories', async (req, res) => {
    const result = await categoriesService.getCategories();
    res.json(result);
});

router.delete('/categories/:id', async (req, res) => {
     await categoriesService.deleteCategories(req.params.id);
    res.sendStatus(200);
});

router.post('/categories', async (req, res) => {
    console.log(req.body);
    const result = await categoriesService.insertCategories(req.body);
    res.sendStatus(200);
});

module.exports = router;