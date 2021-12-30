const router = require('express').Router();
const booksService = require('../services/booksService');

router.get('/books', async (req, res) => {
    const result = await booksService.getBooks();
    res.json(result);
});

router.delete('/books/:book_id', async (req, res) => {
     await booksService.deleteBooks(req.params.book_id);
    res.sendStatus(200);
});

router.post('/book', async (req, res) => {
    console.log(req.body);
    const result = await booksService.insertBook(req.body);
    res.sendStatus(200);
});

module.exports = router;