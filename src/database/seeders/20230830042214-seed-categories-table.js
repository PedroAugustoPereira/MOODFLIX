"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Inteligência artifical",
        position: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Frameworks css",
        position: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Soft Skills",
        position: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Carreira",
        position: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ferramentas de desenvolvimento",
        position: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null);
  },
};
