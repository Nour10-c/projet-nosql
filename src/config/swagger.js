import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Produits",
      version: "1.0.0",
      description: "Documentation de mon API Node.js avec MongoDB",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
      {
        url: "https://projet-nosql-1.onrender.com",
      },
    ],
  },
  apis: ["./src/routes/*.js"],



};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
