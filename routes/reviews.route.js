const { Router } = require("express");
const { reviewControllers } = require("../controllers/reviews.controllers");


const router = Router();

router.post("/review/books/:id", reviewControllers.createReview)
router.delete("/review/books/:id", reviewControllers.deleteReview)
router.get("/review/books/:id", reviewControllers.getReview)
module.exports = router;