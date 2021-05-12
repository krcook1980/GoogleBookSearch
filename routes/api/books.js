const router = require("express").Router();
const booksController = require("../../controllers/bookController");


router.route('/')
    .get(booksController.getBooks)
    .post(booksController.saveBook);

router
    .route('/:id')
    .delete(booksController.deleteBook);

module.exports = router;