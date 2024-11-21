const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Конфигурация Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0",
            description: "API documentation for the Node.js project",
        },
        servers: [
            {
                url: "http://localhost:8080", // Адрес вашего API
            },
        ],
    },
    apis: ["./src/**/*.js"], // Указываем файлы с описанием API
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("Swagger documentation available at /api-docs");
};

module.exports = setupSwagger;