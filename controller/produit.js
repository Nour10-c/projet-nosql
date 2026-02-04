const Produit = require('../models/produit')




// Créer un nouveau produit
exports.create = (req, res, next) => {
  const produit = new Produit({
    Nom_produit: req.body.Nom_produit,
    Type_produit: req.body.Type_produit,
    Description: req.body.Description,
    Prix: req.body.Prix,
    Stock: req.body.Stock,
    Quantité_Produit: req.body.Quantité_Produit
  });
  produit.save()
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
};