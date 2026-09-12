const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/", pokemonController.index);
router.post("/", pokemonController.create);

module.exports = router;