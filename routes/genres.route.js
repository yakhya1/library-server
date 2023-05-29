const { Router }= require("express");
const { gerenresController } = require("../controllers/genres.controller");

const router = Router();

router.post("/genres",  gerenresController.createGenres);
router.get("/genres", gerenresController.getGenres);
router.delete("/genres/:id", gerenresController.deleteGenres);

module.exports = router;
