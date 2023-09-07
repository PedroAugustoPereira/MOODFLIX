"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("watch_times", {
            seconds: {
                allowNull: false,
                type: Sequelize.DataTypes.INTEGER,
            },

            user_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.DataTypes.INTEGER,
                references: { model: "users", key: "id" },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },

            episode_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.DataTypes.INTEGER,
                references: { model: "episodes", key: "id" },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },

            created_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
            },

            updated_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("watch_times");
    },
};
