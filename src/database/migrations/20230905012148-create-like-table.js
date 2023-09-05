"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("likes", {
            user_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.DataTypes.INTEGER,
                references: { model: "users", key: "id" },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },

            course_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.DataTypes.INTEGER,
                references: { model: "courses", key: "id" },
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
        await queryInterface.dropTable("likes");
    },
};
