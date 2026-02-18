import express from "express";
import { getProducts, createProduct } from "../controller/productController.js";

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         _id:
 *           type: string
 *           example: 65f1a2c8e4b0f1a2c8e4b0f1
 *         name:
 *           type: string
 *           example: iPhone 15
 *         price:
 *           type: number
 *           example: 999
 *         createdAt:
 *           type: string
 *           example: 2025-01-01T10:00:00Z
 *        
 */
router.get("/",getProducts);
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Récupérer tous les produits
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Liste des produits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             example:
 *               error: Erreur interne du serveur
 */
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Créer un produit
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *           example:
 *             name: Samsung Galaxy S23
 *             price: 850
 *     responses:
 *       201:
 *         description: Produit créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Données invalides
 *         content:
 *           application/json:
 *             example:
 *               error: Le nom et le prix sont obligatoires
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             example:
 *               error: Erreur interne du serveur
 */
router.post("/", createProduct);


export default router;
