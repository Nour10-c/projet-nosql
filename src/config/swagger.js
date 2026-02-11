import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Projet NoSQL API",
      version: "1.0.0",
      description: "Documentation API Products",
    },
    servers: [
      { url: "http://localhost:5000" },
      { url: "https://projet-nosql-1.onrender.com" }
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
