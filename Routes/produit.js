const express = require('express');
const router = express.Router();
const produitController = require('../controller/produit.js'); // <-- corrige le dossier + extension

router.post('/create', produitController.create);

module.exports = router;