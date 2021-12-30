const router = require('express').Router();
const videoService = require('../services/videoService');

router.get('/videos', async (req, res) => {
    const result = await videoService.getVideos();
    res.json(result);
});

router.delete('/video/:video_id', async (req, res) => {
     await videoService.deleteVideo(req.params.video_id);
    res.sendStatus(200);
});

router.post('/video', async (req, res) => {
    console.log(req.body);
    const result = await videoService.insertVideo(req.body);
    res.sendStatus(200);
});


module.exports = router;