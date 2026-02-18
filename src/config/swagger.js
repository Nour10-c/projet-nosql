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

    components: {
      schemas: {
        Product: {
          type: "object",
          required: ["name", "price"],
          properties: {
            _id: {
              type: "string",
              example: "65f1a2b3c4d5e6f789012345",
            },
            name: {
              type: "string",
              example: "iPhone 15",
            },
            price: {
              type: "number",
              example: 999,
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
      },
    },
  },

 apis: ["./src/**/*.js"],




};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
