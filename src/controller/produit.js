const Produit = require("../models/Produit");

// CREATE
exports.createProduit = async (req, res) => {
  try {
    const produit = await Produit.create(req.body);
    res.status(201).json(produit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ ALL
exports.getProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    res.json(produits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ ONE
exports.getProduit = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);

    if (!produit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }

    res.json(produit);
  } catch (error) {
    res.status(400).json({ error: "ID invalide" });
  }
};

// UPDATE
exports.updateProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!produit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }

    res.json(produit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
exports.deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);

    if (!produit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }

    res.json({ message: "Produit supprimé" });
  } catch (error) {
    res.status(400).json({ error: "ID invalide" });
  }
};
