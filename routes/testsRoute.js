const router = require('express').Router();
const testService = require('../services/testServices');

router.get('/tests', async (req, res) => {
    const result = await testService.getTests();
    res.json(result);
});

router.delete('/tests/:test_id', async (req, res) => {
     await testService.deleteTest(req.params.test_id);
    res.sendStatus(200);
});

router.post('/test', async (req, res) => {
    console.log(req.body);
    const result = await testService.insertTest(req.body);
    res.sendStatus(200);
});


module.exports = router;