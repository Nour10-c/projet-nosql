const express = require("express");
const router = express.Router();
const controller = require("../controller/produit");

router.post("/", controller.createProduit);
router.get("/", controller.getProduits);
router.get("/:id", controller.getProduit);
router.put("/:id", controller.updateProduit);
router.delete("/:id", controller.deleteProduit);

module.exports = router;
