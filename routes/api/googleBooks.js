const router = require("express").Router();
const googleController = require("../../controllers/googleController");

router.route('/:query')
    .get(googleController.searchBooks)

 module.exports = router;   