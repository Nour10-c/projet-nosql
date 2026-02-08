const produitRouter = require('./produit.js');

module.exports = (app) => {
  app.use('/produits', produitRouter);
};
``