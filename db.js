const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./users.db", // Имя файла базы данных
});

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
        await sequelize.sync(); // Создание таблиц
        console.log("Database synchronized");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
})();

module.exports = { sequelize, User };
