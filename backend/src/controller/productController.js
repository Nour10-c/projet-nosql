import Product from "../models/product.js";


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};


export const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({
        error: "Données invalides",
        message: "Le nom et le prix sont obligatoires",
      });
    }

    if (typeof price !== "number") {
      return res.status(400).json({
        error: "Données invalides",
        message: "Le prix doit être un nombre",
      });
    }

    const newProduct = new Product({ name, price });
    const saved = await newProduct.save();

    res.status(201).json({
      message: "Produit créé avec succès",
      data: saved,
    });

  } catch (err) {
    res.status(500).json({
      error: "Erreur serveur",
      message: err.message,
    });
  }
};
