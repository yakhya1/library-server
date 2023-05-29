const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const router = Router();

router.post("/books", booksController.createBooks);
router.delete("/books", booksController.deleteBooks)
router.patch("/books/:id", booksController.updateBooks)
router.get("/books/:id", booksController.getIdBooks)
router.get("/books", booksController.getBooks)
router.get("/books/genre/:id", booksController.getGenreIdBooks)


module.exports = router;